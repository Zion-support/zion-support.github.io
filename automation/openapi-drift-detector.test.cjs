'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const os=require('node:os');
const path=require('node:path');
const {execFileSync}=require('node:child_process');
const {readSpec,compare,status}=require('./openapi-drift-detector.cjs');
const contract=()=>({openapi:'3.0.3',info:{title:'Public Test API',version:'1.0.0'},
  paths:{'/demo':{get:{responses:{'200':{description:'OK'}}}}},
  components:{schemas:{Item:{type:'object',properties:{id:{type:'string'},status:{type:'string',enum:['open','closed']}},required:['id']}}}});
function tmp(fn){const root=fs.mkdtempSync(path.join(os.tmpdir(),'zion-openapi-'));try{return fn(root);}finally{fs.rmSync(root,{recursive:true,force:true});}}
const git=(root,...args)=>execFileSync('git',args,{cwd:root,encoding:'utf8'}).trim();
test('valid OpenAPI 3 JSON with an operation',()=>assert.equal(readSpec(JSON.stringify(contract())).openapi,'3.0.3'));
test('empty or invalid spec cannot pass',()=>{assert.throws(()=>readSpec('{}'));const x=contract();x.paths={};assert.throws(()=>readSpec(JSON.stringify(x)),/no-http-operations/);});
test('no spec reports not-configured, never drift-pass',()=>tmp(root=>assert.equal(status(root,'').status,'not-configured')));
test('removed operation is breaking',()=>{const a=contract(),b=contract();delete b.paths['/demo'];assert(compare(a,b).some(x=>x.rule==='removed-operation'));});
test('new required query param is breaking',()=>{const a=contract(),b=contract();b.paths['/demo'].get.parameters=[{name:'token',in:'query',required:true}];assert(compare(a,b).some(x=>x.rule==='new-required-parameter'));});
test('removed successful response is breaking',()=>{const b=contract();delete b.paths['/demo'].get.responses['200'];assert(compare(contract(),b).some(x=>x.rule==='removed-success-response'));});
test('removed property, enum narrowing and new required field are breaking',()=>{
  const b=contract();b.components.schemas.Item.properties.status.enum=['open'];delete b.components.schemas.Item.properties.id;b.components.schemas.Item.required.push('status');
  const names=new Set(compare(contract(),b).map(x=>x.rule));for(const rule of ['narrowed-enum','removed-property','new-required-property'])assert(names.has(rule));
});
test('nonbreaking addition is not rejected',()=>{const b=contract();b.paths['/health']={get:{responses:{'200':{description:'OK'}}}};assert.deepEqual(compare(contract(),b),[]);});
test('invalid Git base SHA is rejected before any reads',()=>tmp(root=>assert.throws(()=>status(root,'main'),/invalid-base-ref/)));
test('API implementation change without spec fails closed',()=>tmp(root=>{
  git(root,'init','-q');git(root,'config','user.email','test@example.invalid');git(root,'config','user.name','Tester');
  fs.writeFileSync(path.join(root,'README.md'),'initial');git(root,'add','.');git(root,'commit','-qm','init');
  const old=git(root,'rev-parse','HEAD');fs.mkdirSync(path.join(root,'app/api'),{recursive:true});
  fs.writeFileSync(path.join(root,'app/api/route.js'),'export default null;');git(root,'add','.');git(root,'commit','-qm','api');
  assert.equal(status(root,old).status,'missing-contract-for-api-change');
}));
test('real committed contract change compares to baseline',()=>tmp(root=>{
  git(root,'init','-q');git(root,'config','user.email','test@example.invalid');git(root,'config','user.name','Tester');
  fs.writeFileSync(path.join(root,'openapi.json'),JSON.stringify(contract()));git(root,'add','.');git(root,'commit','-qm','baseline');
  const old=git(root,'rev-parse','HEAD'),b=contract();delete b.paths['/demo'];b.paths['/health']={get:{responses:{'200':{description:'ok'}}}};
  fs.writeFileSync(path.join(root,'openapi.json'),JSON.stringify(b));
  const result=status(root,old);assert.equal(result.status,'breaking-change');assert(result.comparisons_performed);
}));
test('unconfigured YAML never produces drift pass',()=>tmp(root=>{
  fs.writeFileSync(path.join(root,'openapi.yaml'),'openapi: 3.0.3');
  assert.equal(status(root,'').status,'yaml-contract-not-supported');
}));
