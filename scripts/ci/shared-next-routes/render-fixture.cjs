const assert = require('node:assert/strict');
const { spawn, spawnSync } = require('node:child_process');
const fs = require('node:fs');
const net = require('node:net');
const path = require('node:path');
const { once } = require('node:events');
const { setTimeout: pause } = require('node:timers/promises');

const fixture = fs.mkdtempSync(path.join(process.cwd(), '.next-routes-test-'));
const cli = require.resolve('next/dist/bin/next');
const text = name => 'export default function Page(){return <output id="result">'+name+'</output>}';
const sources = {
  'package.json': '{"name":"routing-fixture","private":true}',
  'next.config.js': 'module.exports={experimental:{cpus:2,webpackBuildWorker:true},generateBuildId:async()=>"fixture"}',
  'app/layout.js': 'export default function Layout({children}){return <html><body>{children}</body></html>}',
  'app/page.js': text('root'),
  'app/(catalog)/products/layout.js': 'export default function Layout({children,aside}){return <main>{children}{aside}</main>}',
  'app/(catalog)/products/page.js': text('products'),
  'app/(catalog)/products/(fixed)/featured/page.js': text('featured'),
  'app/(catalog)/products/[sku]/page.js': 'export default async function Page({params}){const {sku}=await params;return <output id="result">{"sku-"+sku}</output>}',
  'app/(catalog)/products/@aside/default.js': 'export default function Page(){return <output id="aside">fallback</output>}',
  'app/(catalog)/products/@aside/page.js': 'export default function Page(){return <output id="aside">all</output>}',
  'app/(catalog)/products/@aside/featured/page.js': 'export default function Page(){return <output id="aside">curated</output>}',
  'app/(catalog)/products/@aside/[sku]/page.js': 'export default async function Page({params}){const {sku}=await params;return <output id="aside">{"aside-"+sku}</output>}',
  'app/edge/[id]/page.js': 'export const runtime="edge"; export default async function Page({params}){const {id}=await params;return <output id="result">{"edge-"+id}</output>}',
};
const cases = [
  ['/', 200, 'root', null],
  ['/products', 200, 'products', 'all'],
  ['/products/featured', 200, 'featured', 'curated'],
  ['/products/blue', 200, 'sku-blue', 'aside-blue'],
  ['/edge/blue', 200, 'edge-blue', null],
  ['/missing', 404, null, null],
];

function run(file, args, env) {
  const result = spawnSync(process.execPath,[file,...args],{stdio:'inherit',env});
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error('Process failed with status '+result.status+' ('+file+')');
}

async function freePort() {
  const s=net.createServer();
  s.listen(0,'127.0.0.1');
  await once(s,'listening');
  const {port}=s.address();
  await new Promise((resolve,reject)=>s.close(err=>err?reject(err):resolve()));
  return port;
}

async function readPages(env) {
  const port=await freePort();
  const base='http://127.0.0.1:'+port;
  const server=spawn(process.execPath,[cli,'start',fixture,'-p',String(port),'-H','127.0.0.1'],{stdio:'inherit',env});
  const finished=once(server,'exit');
  try {
    let ready=false;
    for(let i=0; i<120; i++) {
      if(server.exitCode!==null || server.signalCode!==null) throw new Error('Next server exited during startup');
      try { if((await fetch(base)).ok) {ready=true;break;} } catch { /* Socket not bound yet. */ }
      await pause(250);
    }
    assert.ok(ready,'Next server startup');
    const pages=[];
    for(const [url,status,expected,aside] of cases){
      const response=await fetch(base+url);
      const html=await response.text();
      const marker=id=>html.match(new RegExp('<output id="'+id+'">([^<]*)</output>'))?.[1]??null;
      const actual=[url,response.status,marker('result'),marker('aside')];
      assert.deepEqual(actual,[url,status,expected,aside]);
      pages.push(actual);
    }
    return pages;
  } finally {
    if(server.exitCode===null && server.signalCode===null) server.kill('SIGTERM');
    await finished;
  }
}

async function inspect(patched) {
  const out=path.join(fixture,'.next');
  fs.rmSync(out,{recursive:true,force:true});
  const env={...process.env,ZION_NEXT_SHARED_ROUTE_MANIFEST:patched?'1':'0',NEXT_TELEMETRY_DISABLED:'1'};
  run(cli,['build',fixture,'--webpack'],env);
  const manifest=JSON.parse(fs.readFileSync(path.join(out,'server','app-paths-manifest.json'),'utf8'));
  if(patched){
    const dir=path.join(out,'cache','app-route-lists');
    assert.ok(fs.readdirSync(dir).some(f=>/^[0-9a-f]{64}\.json$/.test(f)),'Expected a shared route manifest');
  }
  return {paths:Object.keys(manifest).sort(),pages:await readPages(env)};
}

(async()=>{
  try{
    for(const [rel,source] of Object.entries(sources)){
      const dest=path.join(fixture,rel);
      fs.mkdirSync(path.dirname(dest),{recursive:true});
      fs.writeFileSync(dest,source);
    }
    const baseline=await inspect(false);
    run(path.join(__dirname,'apply.cjs'),[path.dirname(require.resolve('next/dist/build/entries'))],process.env);
    const candidate=await inspect(true);
    assert.deepEqual(candidate,baseline);
    console.log('Matched baseline for '+candidate.paths.length+' compiled app paths and '+candidate.pages.length+' served URLs, including dynamic, static, parallel and edge routes.');
  } finally {fs.rmSync(fixture,{recursive:true,force:true});}
})().catch(e=>{console.error(e);process.exitCode=1;});
