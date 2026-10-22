'use strict';
// Deterministic, opt-in one-time repair for generated service-page JSON-LD JSX.
// No network, no deployment, and no file writes unless explicitly given --write.
const fs=require('node:fs');
const path=require('node:path');
const ROOT=path.resolve(__dirname,'..');
const RAW_SCRIPT=/^([ \t]*)<script type="application\/ld\+json">(\{[^\r\n]*\})<\/script>[ \t]*$/gm;

function repairSource(original) {
  let changed=0,skipped=0;
  const content=original.replace(RAW_SCRIPT,(line,indent,json)=>{
    let data;
    try {data=JSON.parse(json);}catch {skipped++;return line;}
    if(!data || Array.isArray(data) || typeof data!=='object' ||
       data['@context']!=='https://schema.org' || data['@type']!=='Service' ||
       JSON.stringify(data).includes('<')){
      // A literal '<' (including a JSON-escaped one) can terminate script content.
      // This automatic fixer must not emit unsafe HTML from generated source.
      skipped++;return line;
    }
    changed++;
    // Preserve the original valid JSON as a JS object literal; React serializes it
    // to an application/ld+json text node. Avoid string interpolation or extra props.
    return indent+'<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify('+json+') }} />';
  });
  return {content,changed,skipped};
}
function validateRelativePath(input) {
  if(typeof input!=='string'||input.includes('\\')||input.includes('\0')||
     !/^app\/services\/(?:[a-zA-Z0-9_.-]+\/)+page\.tsx$/.test(input) ||
     input.split('/').includes('..')) throw Error('Only generated app/services/**/page.tsx allowed');
  return path.resolve(ROOT,input);
}
function validateLocalSourceFile(input) {
  const absolute=validateRelativePath(input);
  const real=fs.realpathSync(absolute);
  const repoRoot=fs.realpathSync(ROOT);
  const serviceRoot=path.join(repoRoot,'app','services');
  // Reject direct symlinks and symlinked parent directories that escape services.
  if (!real.startsWith(serviceRoot+path.sep) || fs.lstatSync(absolute).isSymbolicLink() ||
      !fs.statSync(real).isFile()) throw Error('Unsafe generated service file');
  return real;
}
function main(argv=process.argv.slice(2)) {
  const write=argv.includes('--write'),inputs=argv.filter(x=>x!=='--write');
  if(!inputs.length) {console.error('Usage: node automation/repair-jsonld-jsx.cjs [--write] app/services/<slug>/page.tsx ...');process.exitCode=2;return;}
  let total=0,skipped=0;
  try{
    for(const file of inputs){
      const absolute=validateLocalSourceFile(file);
      const original=fs.readFileSync(absolute,'utf8');
      const repaired=repairSource(original);
      total+=repaired.changed;skipped+=repaired.skipped;
      if(write&&repaired.changed)fs.writeFileSync(absolute,repaired.content,'utf8');
    }
  }catch(error){console.error('Refused unsafe path, missing file, or I/O failure.');process.exitCode=2;return;}
  console.log(JSON.stringify({mode:write?'write':'dry-run',files:inputs.length,replacements:total,unmodifiedCandidateLines:skipped}));
}
module.exports={repairSource,validateRelativePath,validateLocalSourceFile,main};
if(require.main===module)main();
