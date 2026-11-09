'use strict';
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const {performance} = require('node:perf_hooks');
const VERSION = '16.4.5';
const NAMESPACE = 'next:build:webpack-build';
const HASHES = Object.freeze({
  'dist/trace/trace.js': '04c46dd2d1f10d40bfe8a9a01d706447559c965bc66262576aed356cf1095a39',
  'dist/bin/next': '760b5b8059d08cc2120112344dd80570fa022e09ef0d993452172d0ac469a48b',
  'dist/build/webpack-build/impl.js': '421731ea3b8122fb42321462bb8b0556b635976a14f163860449e4ce0f729f72',
});
function verify(root) {
  try {
    if (JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8')).version !== VERSION) return false;
    return Object.entries(HASHES).every(([file,hash])=>crypto.createHash('sha256').update(fs.readFileSync(path.join(root,file))).digest('hex') === hash);
  } catch { return false; }
}
function writeRecord(record) {
  try { fs.writeSync(2, '[next-memory] '+JSON.stringify(record)+'\n'); } catch {}
}
function startSampler({ runtime=process, every=setInterval, write=writeRecord, now=()=>performance.now(), cancel=clearInterval, counters=()=>({}) }={}) {
  const started=now();
  function sample(phase) {
    try {
      const m=runtime.memoryUsage();
      write({phase,pid:runtime.pid,elapsedMs:now()-started,rssBytes:m.rss,heapUsedBytes:m.heapUsed,heapTotalBytes:m.heapTotal,externalBytes:m.external,arrayBuffersBytes:m.arrayBuffers,...counters()});
    } catch {}
  }
  sample('start');
  const timer=every(()=>sample('sample'),15000);
  try {timer.unref();} catch(error) {try{cancel(timer);}catch{}throw error;}
  return timer;
}
const PHASES = new Set(['create-entrypoints','create-deferred-entrypoints','generate-webpack-config','run-webpack-compiler','webpack-compilation','make','seal','emit','webpack-close']);
function installSpanObserver(Span, emit=writeRecord, runtime=process) {
  const proto=Span && Span.prototype;
  const childDescriptor=proto && Object.getOwnPropertyDescriptor(proto,'traceChild');
  const stopDescriptor=proto && Object.getOwnPropertyDescriptor(proto,'stop');
  if (!childDescriptor || !stopDescriptor || typeof childDescriptor.value!=='function' || typeof stopDescriptor.value!=='function' || !childDescriptor.writable || !stopDescriptor.writable) return null;
  const originalChild=childDescriptor.value,originalStop=stopDescriptor.value;
  const tracked=new WeakMap();let modulesStarted=0,modulesEnded=0;
  function counters(){return {modulesStarted,modulesEnded,modulesOutstanding:modulesStarted-modulesEnded};}
  function record(phase,event,compiler){
    try {const m=runtime.memoryUsage();emit({phase,event,pid:runtime.pid,rssBytes:m.rss,heapUsedBytes:m.heapUsed,...counters(),...(compiler?{compiler}:{})});}catch{}
  }
  function child(...args){
    const span=Reflect.apply(originalChild,this,args);
    try {
      const name=args[0];
      if(typeof name!=='string')return span;
      if(name==='build-module'||name.startsWith('build-module-')){tracked.set(span,{module:true});modulesStarted++;return span;}
      if(!PHASES.has(name))return span;
      let compiler;
      if(name==='webpack-compilation'){
        const candidate=args[1] && args[1].name;
        if(candidate==='server'||candidate==='client'||candidate==='edge-server')compiler=candidate;
      }
      tracked.set(span,{phase:name,compiler});record(name,'start',compiler);
    }catch{}
    return span;
  }
  function stop(...args){
    const result=Reflect.apply(originalStop,this,args);
    try {const item=tracked.get(this);if(item){tracked.delete(this);if(item.module)modulesEnded++;else record(item.phase,'end',item.compiler);}}catch{}
    return result;
  }
  try {
    Object.defineProperty(proto,'traceChild',{...childDescriptor,value:child});
    Object.defineProperty(proto,'stop',{...stopDescriptor,value:stop});
  }catch{try{Object.defineProperty(proto,'traceChild',childDescriptor);Object.defineProperty(proto,'stop',stopDescriptor);}catch{}return null;}
  return {counters,restore(){Object.defineProperty(proto,'traceChild',childDescriptor);Object.defineProperty(proto,'stop',stopDescriptor);}};
}
function activate() {
  if (process.env.ZION_NEXT_MEMORY_OBSERVER !== '1') return;
  let root;
  try {
    if (!process.argv[1]) return;
    const cli=fs.realpathSync(process.argv[1]);
    // npm, shell helpers, workers and unrelated scripts get no instrumentation.
    if (path.basename(cli)!=='next' || path.basename(path.dirname(cli))!=='bin' || path.basename(path.dirname(path.dirname(cli)))!=='dist') return;
    root=path.resolve(path.dirname(cli),'../..');
    if (cli !== path.join(root,'dist/bin/next') || process.argv[2]!=='build') return;
  } catch { return; }
  if (process.env.DEBUG !== NAMESPACE || !verify(root)) {
    try { fs.writeSync(2,'NEXT_MEMORY_OBSERVER_REJECTED\n'); } catch {}
    return;
  }
  let observer;
  try {observer=installSpanObserver(require(path.join(root,'dist/trace/trace.js')).Span);}catch{}
  if(!observer){try{fs.writeSync(2,'NEXT_MEMORY_OBSERVER_REJECTED\n');}catch{}return;}
  try {startSampler({counters:observer.counters});} catch {
    try {observer.restore();} catch {}
    try {fs.writeSync(2,'NEXT_MEMORY_OBSERVER_REJECTED\n');} catch {}
  }
}
module.exports={verify,startSampler,activate,installSpanObserver,HASHES,NAMESPACE};
activate();
