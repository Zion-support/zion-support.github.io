'use strict';
const fs=require('node:fs'),path=require('node:path');
function canonical(p){
 let cursor=path.resolve(p);const tail=[];
 for(;;){
  try{fs.lstatSync(cursor);break;}catch(e){if(e.code!=='ENOENT')throw e;const parent=path.dirname(cursor);if(parent===cursor)throw e;tail.unshift(path.basename(cursor));cursor=parent;}
 }
 return path.resolve(fs.realpathSync(cursor),...tail);
}
function contains(parent,child){const rel=path.relative(parent,child);return rel===''||(!path.isAbsolute(rel)&&rel!=='..'&&!rel.startsWith('..'+path.sep));}
function noSymlinks(dir){
 for(const ent of fs.readdirSync(dir,{withFileTypes:true})){
  const file=path.join(dir,ent.name);
  if(ent.isSymbolicLink())throw Error('Review output must not contain symbolic links: '+file);
  if(ent.isDirectory())noSymlinks(file);
 }
}
function assertReviewOutput(source,out){
 if(typeof source!=='string'||!source.trim()||typeof out!=='string'||!out.trim())throw Error('Explicit source and separate review output directories required');
 const sourcePath=path.resolve(source),outputPath=path.resolve(out);
 if(!fs.statSync(sourcePath).isDirectory())throw Error('Review source must be a directory');
 const sourceReal=canonical(sourcePath),outputReal=canonical(outputPath);
 for(const [a,b] of [[sourcePath,outputPath],[sourceReal,outputReal]])if(contains(a,b)||contains(b,a))throw Error('Review source and output must be disjoint directories');
 if(fs.existsSync(outputPath)){
  if(fs.lstatSync(outputPath).isSymbolicLink())throw Error('Review output must not be a symbolic link');
  if(!fs.statSync(outputPath).isDirectory())throw Error('Review output must be a directory');
  noSymlinks(outputPath);
 }
 return {source:sourceReal,out:outputReal};
}
module.exports={assertReviewOutput};
