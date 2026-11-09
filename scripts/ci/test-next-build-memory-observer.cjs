'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict'),cp=require('node:child_process'),Module=require('node:module');
async function main(){
 const load=Module._load,ext=Module._extensions['.js'];const before=Object.fromEntries(['SIGTERM','SIGINT','uncaughtException','unhandledRejection','exit'].map(k=>[k,process.listenerCount(k)]));
 const observer=require('./observe-next-build-memory.cjs');
 assert.equal(Module._load,load);assert.equal(Module._extensions['.js'],ext);for(const k in before)assert.equal(process.listenerCount(k),before[k]);
 const records=[];let callback,unref=0;const sentinel={unref(){unref++;}};const runtime={pid:7,memoryUsage:()=>({rss:10,heapUsed:5,heapTotal:8,external:1,arrayBuffers:0})};
 assert.equal(observer.startSampler({runtime,write:r=>records.push(r),now:()=>100,every:(cb,ms)=>{assert.equal(ms,15000);callback=cb;return sentinel;}}),sentinel);assert.equal(unref,1);callback();assert.equal(records.length,2);assert.deepEqual(Object.keys(records[0]).sort(),['phase','pid','elapsedMs','rssBytes','heapUsedBytes','heapTotalBytes','externalBytes','arrayBuffersBytes'].sort());assert.equal(records[0].phase,'start');assert.equal(records[1].phase,'sample');
 observer.startSampler({runtime,write:()=>{throw new Error('synthetic');},every:()=>sentinel});
 observer.startSampler({runtime:{pid:7,memoryUsage(){throw new Error('synthetic');}},every:()=>sentinel});
 const token={},failure=new Error('sentinel');let observedThis,argsSeen,nextSpan;
 class FakeSpan {
   traceChild(...args){observedThis=this;argsSeen=args;if(args[0]==='throw-child')throw failure;return nextSpan;}
   stop(...args){observedThis=this;argsSeen=args;if(args[0]==='throw-stop')throw failure;return token;}
   traceAsyncFn(fn){return fn();}
 }
 const fakeRoot=new FakeSpan();const events=[];const originalChild=FakeSpan.prototype.traceChild,originalStop=FakeSpan.prototype.stop,originalAsync=FakeSpan.prototype.traceAsyncFn;
 const instrument=observer.installSpanObserver(FakeSpan,e=>events.push(e),runtime);assert(instrument);
 nextSpan=new FakeSpan();const args=['make',{private:'NEVER_LOG_THIS'}];assert.equal(fakeRoot.traceChild(...args),nextSpan);assert.equal(observedThis,fakeRoot);assert.deepEqual(argsSeen,args);
 assert.equal(nextSpan.stop(12),token);assert.equal(observedThis,nextSpan);assert.deepEqual(argsSeen,[12]);nextSpan.stop();assert.equal(events.length,2);
 assert.throws(()=>fakeRoot.traceChild('throw-child'),e=>e===failure);
 nextSpan=new FakeSpan();fakeRoot.traceChild('seal');assert.throws(()=>nextSpan.stop('throw-stop'),e=>e===failure);assert.equal(events.length,3);nextSpan.stop();assert.equal(events.length,4);
 nextSpan=new FakeSpan();fakeRoot.traceChild('build-module-private-name');nextSpan.stop();nextSpan.stop();assert.deepEqual(instrument.counters(),{modulesStarted:1,modulesEnded:1,modulesOutstanding:0});assert.equal(events.length,4);
 nextSpan=new FakeSpan();fakeRoot.traceChild('unknown-sensitive-path',{secret:'NEVER_LOG_THIS'});nextSpan.stop();assert.equal(events.length,4);
 nextSpan=new FakeSpan();fakeRoot.traceChild('webpack-compilation',{name:'server',private:'NEVER_LOG_THIS'});assert.equal(events[4].compiler,'server');nextSpan.stop();
 nextSpan=new FakeSpan();fakeRoot.traceChild('webpack-compilation',{name:'NEVER_LOG_THIS'});assert.equal(Object.hasOwn(events[6],'compiler'),false);nextSpan.stop();assert(!JSON.stringify(events).includes('NEVER_LOG_THIS'));
 const promise=Promise.resolve(token);assert.equal(FakeSpan.prototype.traceAsyncFn,originalAsync);assert.equal(fakeRoot.traceAsyncFn(()=>promise),promise);
 instrument.restore();assert.equal(FakeSpan.prototype.traceChild,originalChild);assert.equal(FakeSpan.prototype.stop,originalStop);
 const failingObservation=observer.installSpanObserver(FakeSpan,()=>{throw failure},runtime);nextSpan=new FakeSpan();assert.equal(fakeRoot.traceChild('make'),nextSpan);assert.equal(nextSpan.stop(),token);failingObservation.restore();assert.equal(observer.installSpanObserver(class {}),null);
 const next=process.env.NEXT_TEST_DIR?path.resolve(process.env.NEXT_TEST_DIR):path.dirname(require.resolve('next/package.json'));
 assert(observer.verify(next));
 const observerPath=path.join(__dirname,'observe-next-build-memory.cjs');
 function activationProbe(cli){return cp.spawnSync(process.execPath,['-e',`process.argv=[process.execPath,${JSON.stringify(cli)},'build'];require(${JSON.stringify(observerPath)});`],{timeout:2000,encoding:'utf8',env:{...process.env,ZION_NEXT_MEMORY_OBSERVER:'1',DEBUG:observer.NAMESPACE}});}
 const activated=activationProbe(path.join(next,'dist/bin/next'));assert.equal(activated.status,0);assert.equal((activated.stderr.match(/\[next-memory\]/g)||[]).length,1);assert(!activated.stderr.includes('NEXT_MEMORY_OBSERVER_REJECTED'));

 const RealSpan=require(path.join(next,'dist/trace/trace.js')).Span;const asyncFn=RealSpan.prototype.traceAsyncFn,traceFn=RealSpan.prototype.traceFn;const realEvents=[];const realObserver=observer.installSpanObserver(RealSpan,e=>realEvents.push(e),runtime);assert(realObserver);assert.equal(RealSpan.prototype.traceAsyncFn,asyncFn);assert.equal(RealSpan.prototype.traceFn,traceFn);
 const reporter=require(path.join(next,'dist/trace/report')).reporter;const report=reporter.report;reporter.report=()=>{};
 try {
   const rootSpan=new RealSpan({name:'root',attrs:{path:'NEVER_LOG_REAL_PATH'}});
   const child=rootSpan.traceChild('make',{path:'NEVER_LOG_REAL_PATH'});assert(child instanceof RealSpan);assert.equal(child.attrs.path,'NEVER_LOG_REAL_PATH');assert.equal(child.stop(),undefined);child.stop();
   assert.equal(rootSpan.traceChild('seal',{path:'NEVER_LOG_REAL_PATH'}).traceFn(()=>token),token);
   assert.throws(()=>rootSpan.traceChild('emit').traceFn(()=>{throw failure}),e=>e===failure);
   assert.equal(await rootSpan.traceChild('create-entrypoints').traceAsyncFn(async()=>token),token);
   await assert.rejects(rootSpan.traceChild('generate-webpack-config').traceAsyncFn(async()=>{throw failure}),e=>e===failure);
   rootSpan.traceChild('create-deferred-entrypoints').stop();
   assert.equal(realEvents.filter(e=>e.event==='start').length,6);assert.equal(realEvents.filter(e=>e.event==='end').length,6);assert(!JSON.stringify(realEvents).includes('NEVER_LOG_REAL_PATH'));
 }finally{reporter.report=report;realObserver.restore();}
 let cancelled=0;assert.throws(()=>observer.startSampler({runtime,write:()=>{},every:()=>({unref(){throw failure}}),cancel:()=>cancelled++}),e=>e===failure);assert.equal(cancelled,1);

 const rollback=cp.spawnSync(process.execPath,['--no-warnings','-e',`const Span=require(${JSON.stringify(path.join(next,'dist/trace/trace.js'))}).Span;const old=Span.prototype.traceChild,stop=Span.prototype.stop;process.argv=[process.execPath,${JSON.stringify(path.join(next,'dist/bin/next'))},'build'];const timer=global.setInterval;global.setInterval=()=>{throw new Error('synthetic')};require(${JSON.stringify(observerPath)});global.setInterval=timer;if(Span.prototype.traceChild!==old||Span.prototype.stop!==stop)process.exit(2);`],{timeout:2000,encoding:'utf8',env:{...process.env,ZION_NEXT_MEMORY_OBSERVER:'1',DEBUG:observer.NAMESPACE}});assert.equal(rollback.status,0);assert(rollback.stderr.includes('NEXT_MEMORY_OBSERVER_REJECTED'));
 const temp=fs.mkdtempSync(path.join(os.tmpdir(),'next-observer-test-'));
 try{
  for(const file of Object.keys(observer.HASHES)){fs.mkdirSync(path.dirname(path.join(temp,file)),{recursive:true});fs.copyFileSync(path.join(next,file),path.join(temp,file));}
  fs.writeFileSync(path.join(temp,'package.json'),JSON.stringify({version:'16.4.5'}));assert(observer.verify(temp));
  fs.writeFileSync(path.join(temp,'package.json'),JSON.stringify({version:'16.4.4'}));assert.equal(observer.verify(temp),false);
  fs.writeFileSync(path.join(temp,'package.json'),JSON.stringify({version:'16.4.5'}));fs.appendFileSync(path.join(temp,'dist/build/webpack-build/impl.js'),'\n');assert.equal(observer.verify(temp),false);const rejected=activationProbe(path.join(temp,'dist/bin/next'));assert.equal(rejected.status,0);assert(rejected.stderr.includes('NEXT_MEMORY_OBSERVER_REJECTED'));assert(!rejected.stderr.includes('[next-memory]'));
 }finally{fs.rmSync(temp,{recursive:true,force:true});}
 const preload=path.join(__dirname,'observe-next-build-memory.cjs');
 const child=cp.spawnSync(process.execPath,['--no-warnings','-r',preload,'-e',`require(${JSON.stringify(preload)}).startSampler();`],{timeout:2000,encoding:'utf8'});
 assert.equal(child.status,0);assert.equal(child.error,undefined);assert.equal((child.stderr.match(/\[next-memory\]/g)||[]).length,1);
 const untouched=cp.spawnSync(process.execPath,['--no-warnings','-r',preload,'-e',`const m=require(${JSON.stringify(preload)}); const value={}; const promise=Promise.resolve(value); function f(){return promise} if(f()!==promise)process.exit(2); const error=new Error('sentinel');try{throw error}catch(e){if(e!==error)process.exit(3)}`],{timeout:2000,encoding:'utf8',env:{...process.env,ZION_NEXT_MEMORY_OBSERVER:'1',DEBUG:observer.NAMESPACE}});
 assert.equal(untouched.status,0);assert.equal(untouched.stdout,'');assert.equal(untouched.stderr,'');
 await new Promise((resolve,reject)=>{const child=cp.spawn(process.execPath,['--no-warnings','-r',preload,'-e',`require(${JSON.stringify(preload)}).startSampler();setInterval(()=>{},1000)`],{stdio:['ignore','ignore','pipe']});const timeout=setTimeout(()=>{child.kill('SIGKILL');reject(new Error('timeout'));},2000);child.stderr.on('data',chunk=>{if(chunk.toString().includes('[next-memory]'))child.kill('SIGTERM');});child.on('error',reject);child.on('exit',(code,signal)=>{clearTimeout(timeout);try{assert.equal(signal,'SIGTERM');resolve();}catch(e){reject(e);}});});
 console.log('NEXT_MEMORY_OBSERVER_TESTS_PASS');
}
main().catch(()=>{console.error('NEXT_MEMORY_OBSERVER_TESTS_FAILED');process.exitCode=1});
