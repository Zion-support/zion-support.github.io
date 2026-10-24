'use strict';
// Read-only OpenAPI 3 JSON inventory + bounded compatibility check. No tokens/network.
const fs = require('node:fs');
const path = require('node:path');
const {execFileSync} = require('node:child_process');

const DIRS = ['', 'openapi/', 'api/', 'docs/', 'public/', 'spec/', 'specs/'];
const JSON_PATHS = [...DIRS.map(d => d+'openapi.json'), 'openapi-spec.json', 'docs/openapi-spec.json'];
const YAML_PATHS = DIRS.flatMap(d => [d+'openapi.yaml', d+'openapi.yml']);
const METHODS = ['get','put','post','delete','patch','head','options','trace'];
const MAX_BYTES = 2000000;
const BASE = /^(?:[a-f0-9]{40}|HEAD\^1)$/i;

function isObject(v) { return v !== null && typeof v === 'object' && !Array.isArray(v); }
function readSpec(raw) {
  if (Buffer.byteLength(raw, 'utf8') > MAX_BYTES) throw Error('spec-too-large');
  const doc = JSON.parse(raw);
  if (!isObject(doc) || !/^3\./.test(String(doc.openapi || '')) ||
      !isObject(doc.info) || !doc.info.title || !doc.info.version || !isObject(doc.paths)) {
    throw Error('invalid-openapi3-contract');
  }
  const operations = Object.values(doc.paths).reduce((sum,item) =>
    sum + (isObject(item) ? METHODS.filter(method => isObject(item[method])).length : 0),0);
  if (!operations) throw Error('no-http-operations');
  return doc;
}
function compare(before, after) {
  const findings = [];
  function add(rule, location) { findings.push({rule, location}); }
  for (const [route, oldPath] of Object.entries(before.paths)) {
    if (!isObject(oldPath)) continue;
    const nextPath = after.paths[route];
    for (const method of METHODS) {
      if (!isObject(oldPath[method])) continue;
      const label = method.toUpperCase() + ' ' + route;
      if (!isObject(nextPath) || !isObject(nextPath[method])) {
        add('removed-operation', label); continue;
      }
      const previous = oldPath[method], current = nextPath[method];
      const oldParams = [...(Array.isArray(oldPath.parameters) ? oldPath.parameters : []),
        ...(Array.isArray(previous.parameters) ? previous.parameters : [])];
      const newParams = [...(Array.isArray(nextPath.parameters) ? nextPath.parameters : []),
        ...(Array.isArray(current.parameters) ? current.parameters : [])];
      const key = p => isObject(p) ? String(p.in) + ':' + String(p.name) : '';
      const existing = new Map(oldParams.map(p => [key(p),p]));
      for (const param of newParams) {
        if (!isObject(param) || !param.required) continue;
        const prior = existing.get(key(param));
        if (!prior || !prior.required) add('new-required-parameter', label + ' ' + key(param));
      }
      if (isObject(previous.responses) && isObject(current.responses)) {
        for (const code of Object.keys(previous.responses)) {
          if (/^2\d\d$/.test(code) && !(code in current.responses))
            add('removed-success-response', label + ' ' + code);
        }
      }
    }
  }
  const oldSchemas = isObject(before.components) && isObject(before.components.schemas)
    ? before.components.schemas : {};
  const nextSchemas = isObject(after.components) && isObject(after.components.schemas)
    ? after.components.schemas : {};
  for (const [name, oldSchema] of Object.entries(oldSchemas)) {
    const newer = nextSchemas[name];
    if (!isObject(newer)) { add('removed-schema', name); continue; }
    if (!isObject(oldSchema)) continue;
    if (oldSchema.type && newer.type && oldSchema.type !== newer.type)
      add('changed-schema-type', name);
    const prevRequired = new Set(Array.isArray(oldSchema.required) ? oldSchema.required : []);
    for (const prop of Array.isArray(newer.required) ? newer.required : []) {
      if (!prevRequired.has(prop)) add('new-required-property', name + '.' + prop);
    }
    const oldProps = isObject(oldSchema.properties) ? oldSchema.properties : {};
    const newProps = isObject(newer.properties) ? newer.properties : {};
    for (const [prop, oldDef] of Object.entries(oldProps)) {
      const newDef = newProps[prop];
      if (!isObject(newDef)) { add('removed-property', name + '.' + prop); continue; }
      if (isObject(oldDef) && oldDef.type && newDef.type && oldDef.type !== newDef.type)
        add('changed-property-type', name + '.' + prop);
      if (isObject(oldDef) && Array.isArray(oldDef.enum) && Array.isArray(newDef.enum)) {
        if (oldDef.enum.some(value => !newDef.enum.includes(value)))
          add('narrowed-enum', name + '.' + prop);
      }
    }
  }
  return findings;
}
function git(root, args) {
  return execFileSync('git',args,{cwd:root,encoding:'utf8',stdio:['ignore','pipe','pipe'],timeout:15000,maxBuffer:MAX_BYTES+4096});
}
function status(root, base) {
  const json = JSON_PATHS.filter(p => fs.existsSync(path.join(root,p)));
  const yaml = YAML_PATHS.filter(p => fs.existsSync(path.join(root,p)));
  const report = {schema:'zion.openapi.contract-audit.v1',status:'unknown',
    contract_path:null,comparisons_performed:false,breaking_finding_count:0,findings:[],
    limitations:'JSON OpenAPI 3; selected backwards-compatibility rules only; not complete semantic or live API certification.'};
  if (base && !BASE.test(base)) throw Error('invalid-base-ref');
  if (base) git(root,['rev-parse','--verify',base + '^{commit}']);
  if (json.length + yaml.length > 1) {report.status='ambiguous-contract';return report;}
  if (yaml.length) {report.status='yaml-contract-not-supported';return report;}
  if (!json.length) {
    if (base) {
      const changed = git(root,['diff','--name-only',base,'HEAD','--',
        'app/api','src/app/api','pages/api',...JSON_PATHS,...YAML_PATHS]).trim();
      if (changed) {report.status='missing-contract-for-api-change';return report;}
    }
    report.status='not-configured';return report;
  }
  const file=json[0];report.contract_path=file;
  const next=readSpec(fs.readFileSync(path.join(root,file),'utf8'));
  if (!base) {report.status='validated-without-baseline';return report;}
  // Only a verified absent baseline is a new contract. Git errors must fail closed.
  const tracked=git(root,['ls-tree','-r','--name-only',base,'--',file]).trim();
  if (!tracked.split('\n').includes(file)) {report.status='new-contract-baseline';return report;}
  const previous=git(root,['show',base+':'+file]);
  const old=readSpec(previous);
  report.comparisons_performed=true;
  const issues=compare(old,next);
  report.breaking_finding_count=issues.length;
  report.findings=issues.slice(0,50);
  report.status=issues.length?'breaking-change':'no-detected-breaking-change';
  return report;
}
function main(args=process.argv.slice(2)) {
  const root=process.cwd();
  const index=args.indexOf('--base');
  const base=index>=0 ? args[index+1] : '';
  const output='automation/reports/openapi-contract-audit.json';
  let report;
  try {report=status(root,base);} catch(error) {
    report={schema:'zion.openapi.contract-audit.v1',status:'audit-error',
      error_code:error.message.startsWith('Unexpected token')?'invalid-json':'invalid-or-unavailable-evidence'};
  }
  fs.mkdirSync(path.dirname(output),{recursive:true});
  fs.writeFileSync(output,JSON.stringify(report,null,2)+'\n');
  const evidence = report.comparisons_performed ? 'Compared with baseline.' : 'NO backwards-compatibility comparison performed.';
  const summary='OpenAPI contract inventory: '+report.status+'. '+evidence;
  console.log(summary);
  if (process.env.GITHUB_STEP_SUMMARY)
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY,
      '## OpenAPI contract inventory\n\n- Status: **'+report.status+'**\n- '+evidence+'\n- Findings: '+
      (report.breaking_finding_count||0)+'\n- This is not live API validation.\n');
  if (report.status==='not-configured') console.log('::warning::No OpenAPI contract exists at a supported path; this is not a passing drift check.');
  const fatal=['ambiguous-contract','yaml-contract-not-supported','missing-contract-for-api-change',
    'breaking-change','audit-error'];
  return fatal.includes(report.status)?1:0;
}
module.exports={readSpec,compare,status,main,JSON_PATHS,YAML_PATHS};
if (require.main===module) process.exitCode=main();
