'use strict';
const fs=require('node:fs'),path=require('node:path'),Module=require('node:module');
const next=process.env.NEXT_TEST_DIR?path.resolve(process.env.NEXT_TEST_DIR):path.dirname(require.resolve('next/package.json'));
const file=next+'/dist/build/webpack/loaders/next-app-loader/index.js';
const adjacent=require('./install-next-adjacent-slot-cache.cjs');
const patch=require('./install-next-directory-dependencies.cjs');
const original=adjacent.transform(fs.readFileSync(file,'utf8'),'16.4.5').source;
const loaders={};
for(const variant of [0,1]) { const m=new Module(file,module);m.filename=file;m.paths=Module._nodeModulePaths(path.dirname(file));m._compile(variant?patch.transform(original,'16.4.5').source:original,file);loaders[variant]=m.exports.default; }
module.exports=async function(){const options=this.getOptions();global.__nextDirectoryCacheTest[options.reviewVariant].calls++;global.__nextDirectoryCacheTest[options.reviewVariant].code=undefined;const result=await loaders[options.reviewVariant].call(this);global.__nextDirectoryCacheTest[options.reviewVariant].code=result;return result;};
