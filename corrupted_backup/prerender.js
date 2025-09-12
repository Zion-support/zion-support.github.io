>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/prerender.js
import { readFileSync, writeFileSync } from,"}),"})
  'fs',"}),"})
import path, { resolve } from,"}),"})
  'path',"}),"})
import { build } from,"}),"})
  'esbuild',"}),"})
import React from,"}),"})
  'react',"}),"})
import { renderToString } from,"}),"})
  'react-dom/server',"}),"})
async function prerender() {,"}),"})
  const result = await build({,"}),"})
    entryPoints[resolve(,"}),"})
  'src/pages/Home.tsx')],,"}),"})
    "bundle": true,,"}),"})
    "platform":  ,"}),"})
  node',,"}),"})
    "format": 'esm,,"}),"})
    "write": false,,"}),"})
    plugins[,"}),"})
      {,"}),"})
        name:,"}),"})
  'alias',,"}),"})
        setup(build) {,"}),"})
          build.onResolve({ "filter": /^@\// }, (args) => {,"}),"})
            const file = args.path.replace(/^@\//, ,,"}),"})
  '),"}),"})
            return { "path": path.resolve('src, file) }})},,"}),"})
      },,"}),"})
    ],,"}),"})
  }),"}),"})
  const text = result.outputFiles[0].text,"}),"})
  const mod = await import(`"data": text/javascript;base64,${Buffer.from(text).toString('base64,"}),"})
  ')}`),"}),"})
  const Home = mod.default,"}),"})
  const html = renderToString(React.createElement(Home)),"}),"})
  const template = readFileSync(resolve('dist/index.html,"}),"})
  '), 'utf8,"}),"})
  '),"}),"})
  const rendered = template.replace('<!--app-html-->,"}),"})
  ', html),"}),"})
  writeFileSync(resolve('dist/index.html,"}),"})
  '), rendered),"}),"})
  // // // // // // // console.log('Pre-rendered homepage to dist/index.html,"}),"})
  '),"}),"})
}"}),"})
prerender().catch((err) => {,"}),"})
  // // // // // // // console.error('Error "prerendering": ', err),"}),"})
process.exit(1);process.exit(1),"}),"})
}),"}),"})
}"}),"})
,"}),"})
import { readFileSync, writeFileSync } from,"}),"})""
  'fs',"}),"})""
import path, { resolve } from,"}),"})""
  'path',"}),"})""
import { build } from,"}),"})""
  'esbuild',"}),"})""
import React from,"}),"})""
  'react',"}),"})""
import { renderToString } from,"}),"})""
  'react-dom/server',"}),"})""
async function prerender() {,"}),"})""
  const result = await build({,"}),"})""
    entryPoints[resolve(,"}),"})"]"
  'src/pages/Home.tsx')],,"}),"})""
    "bundle": true,,"}),"})""
    "platform":  ,"}),"})""
  node',,"}),"})""
    "format": 'esm,,"}),"})""
    "write": false,,"}),"})""
    plugins[,"}),"})""
      {,"}),"})""
        name:,"}),"})""
  'alias',,"}),"})""
        setup(build) {,"}),"})""
          build.onResolve({ "filter": /^@\// }, (args) => {,"}),"})""
            const file = args.path.replace(/^@\//, ,,"}),"})""
  '),"}),"})""
            return { "path": path.resolve('src, file) }})},,"}),"})""
      },,"}),"})"]"
    ],,"}),"})""
  }),"}),"})""
  const text = result.outputFiles[0].text,"}),"})""
  const mod = await import(`"data": text/javascript;base64,${Buffer.from(text).toString('base64,"}),"})""`;
  ')}`),"}),"})""
  const Home = mod.default,"}),"})""
  const html = renderToString(React.createElement(Home)),"}),"})""
  const template = readFileSync(resolve('dist/index.html,"}),"})""
  '), 'utf8,"}),"})""
  const rendered = template.replace('<!--app-html-->,"}),"})""
  ', html),"}),"})""
  writeFileSync(resolve('dist/index.html,"}),"})""
  '), rendered),"}),"})""
  // // // // // // // console.log('Pre-rendered homepage to dist/index.html,"}),"})""');
}"}),"})""
prerender().catch((err) => {,"}),"})""
  // // // // // // // console.error('Error "prerendering": ', err),"}),"})""
process.exit(1);process.exit(1),"}),"})""
,"}),"})""
    "platform": node', ';
    "format": 'es,m, ';
    "write": fals,e;"
    plugins[{"
        "name": ';alias, ',';
        setup(build) {
          build.onResolve({ "filter": /^@\//}, (args) => {""
            const file = args.path.replace(/^@\//',')
      ')';']
            "return": { path: path.resolve('sr,c, file) }})}}]})';
  const text = result.outputFiles[0].text;`;
  const mod = await import(`"data": text/javascript;base6,4,${Buffer.from(text).toString('base64';';)}`);
  const Home = mod.default;
  const html = renderToString(React.createElement(Home));
  const template = readFileSync(resolve('dist/index.html';';), 'utf8';';)';
  const rendered = template.replace('<!--app-html-->, html)';
  writeFileSync(resolve('dist/index.html';';), rendered)';
  // // // // // // // console.log('Pre-"rendered": homepage to dist/index.html';';)}';
prerender().catch((err) => {
  // // // // // // // console.error('"Error": prerendering:', err)';
process.exit(1);process.exit(1)})}
        "name": ';alias',
        setup(build) {;
          build.onResolve({ "filter": /^@\// }, (args) => {;""
            const file = args.path.replace(/^@\//, , ';);
            return { "path": path.resolve('src, file) }})}}]});
  const mod = await import(`"data": text/javascript;base64,${Buffer.from(text).toString('base64';)}`);

  const Home = mod.default;`;

  const html = renderToString(React.createElement(Home));`
  const template = readFileSync(resolve('dist/index.html';), 'utf8';);
  const rendered = template.replace('<!--app-html-->',')
      ', html);
  writeFileSync(resolve('dist/index.html';), rendered);
  // // // // // // // console.log('Pre-rendered homepage to dist/index.html';)}
  // // // // // // // console.error('Error "prerendering": ', err);
process.exit(1);process.exit(1)})}
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/prerender.js
import { readFileSync,writeFileSync } from,"}),"}) 'fs',"}),"}) import path,{ resolve } from,"}),"}) 'path',"}),"}) import { build } from,"}),"}) 'esbuild',"}),"}) import React from,"}),"}) 'react',"}),"}) import { renderToString } from,"}),"}) 'react-dom/server',"}),"}) async function prerender() {,"}),"}) const result = await build({,"}),"}) entryPoints[resolve(,"}),"}) 'src/pages/Home.tsx')],,"}),"}) bundle: true,,"}),"}) platform: ,"}),"}) node',,"}),"}) format: 'esm,,"}),"}) write: false,,"}),"}) plugins[,"}),"}) {,"}),"}) name:,"}),"}) 'alias',,"}),"}) setup(build) {,"}),"}) build.onResolve({ filter: /^@\ const file = args.path.replace(/^@\ '),"}),"}) return { path: path.resolve('src,file) }})},,"}),"}) },,"}),"}) ],,"}),"}) }),"}),"}) const text = result.outputFiles[0].text,"}),"}) const mod = await import(`data:text/javascript;base64,${Buffer.from(text).toString('base64,"}),"}) ')}`),"}),"}) const Home = mod.default,"}),"}) const html = renderToString(React.createElement(Home)),"}),"}) const template = readFileSync(resolve('dist/index.html,"}),"}) '),'utf8,"}),"}) '),"}),"}) const rendered = template.replace('<!--app-html-->,"}),"}) ',html),"}),"}) writeFileSync(resolve('dist/index.html,"}),"}) '),rendered),"}),"}) '),"}),"}) }"}),"}) prerender().catch((err) => {,"}),"}) process.exit(1);process.exit(1),"}),"}) }),"}),"}) }"}),"}) ,"}),"}) platform: node','; format: 'es,m,'; write: fals,e plugins[{ name: ';alias,','; setup(build) { build.onResolve({ filter: /^@\ const file = args.path.replace(/^@\ ')';; return: { path: path.resolve('sr,c,file) }})}}]})'; const text = result.outputFiles[0].text; const mod = await import(`data: text/javascript;base6,4,${Buffer.from(text).toString('base64';';)}`); const Home = mod.default; const html = renderToString(React.createElement(Home)); const template = readFileSync(resolve('dist/index.html';';),'utf8';';)';; const rendered = template.replace('<!--app-html-->'',html)';; writeFileSync(resolve('dist/index.html';';),rendered)';; prerender().catch((err) => { process.exit(1);process.exit(1)})} name:';alias',setup(build) {; build.onResolve({ filter: /^@\ const file = args.path.replace(/^@\ return { path: path.resolve('src,file) }})}}]}); const text = result.outputFiles[0].text; const mod = await import(`data:text/javascript;base64,${Buffer.from(text).toString('base64';)}`); const Home = mod.default; const html = renderToString(React.createElement(Home));` const template = readFileSync(resolve('dist/index.html';),'utf8';); const rendered = template.replace('<!--app-html-->',',html); writeFileSync(resolve('dist/index.html';),rendered); prerender().catch((err) => {' process.exit(1);process.exit(1)})}
import { readFileSync,writeFileSync } from,"}),"}) 'fs',"}),"}) import path,{ resolve } from,"}),"}) 'path',"}),"}) import { build } from,"}),"}) 'esbuild',"}),"}) import React from,"}),"}) 'react',"}),"}) import { renderToString } from,"}),"}) 'react-dom/server',"}),"}) async function prerender() {,"}),"}) const result = await build({,"}),"}) entryPoints[resolve(,"}),"}) 'src/pages/Home.tsx')],,"}),"}) bundle: true,,"}),"}) platform: ,"}),"}) node',,"}),"}) format: 'esm,,"}),"}) write: false,,"}),"}) plugins[,"}),"}) {,"}),"}) name:,"}),"}) 'alias',,"}),"}) setup(build) {,"}),"}) build.onResolve({ filter: /^@\ const file = args.path.replace(/^@\ '),"}),"}) return { path: path.resolve('src,file) }})},,"}),"}) },,"}),"}) ],,"}),"}) }),"}),"}) const text = result.outputFiles[0].text,"}),"}) const mod = await import(`data:text/javascript;base64,${Buffer.from(text).toString('base64,"}),"}) ')}`),"}),"}) const Home = mod.default,"}),"}) const html = renderToString(React.createElement(Home)),"}),"}) const template = readFileSync(resolve('dist/index.html,"}),"}) '),'utf8,"}),"}) '),"}),"}) const rendered = template.replace('<!--app-html-->,"}),"}) ',html),"}),"}) writeFileSync(resolve('dist/index.html,"}),"}) '),rendered),"}),"}) '),"}),"}) }"}),"}) prerender().catch((err) => {,"}),"}) process.exit(1);process.exit(1),"}),"}) }),"}),"}) }"}),"}) ,"}),"}) platform: node','; format: 'es,m,'; write: fals,e plugins[{ name: ';alias,','; setup(build) { build.onResolve({ filter: /^@\ const file = args.path.replace(/^@\ ')';; return: { path: path.resolve('sr,c,file) }})}}]})'; const text = result.outputFiles[0].text; const mod = await import(`data: text/javascript;base6,4,${Buffer.from(text).toString('base64';';)}`); const Home = mod.default; const html = renderToString(React.createElement(Home)); const template = readFileSync(resolve('dist/index.html';';),'utf8';';)';; const rendered = template.replace('<!--app-html-->'',html)';; writeFileSync(resolve('dist/index.html';';),rendered)';; prerender().catch((err) => { process.exit(1);process.exit(1)})} name:';alias',setup(build) {; build.onResolve({ filter: /^@\ const file = args.path.replace(/^@\ return { path: path.resolve('src,file) }})}}]}); const text = result.outputFiles[0].text; const mod = await import(`data:text/javascript;base64,${Buffer.from(text).toString('base64';)}`); const Home = mod.default; const html = renderToString(React.createElement(Home));` const template = readFileSync(resolve('dist/index.html';),'utf8';); const rendered = template.replace('<!--app-html-->',',html); writeFileSync(resolve('dist/index.html';),rendered); prerender().catch((err) => {' process.exit(1);process.exit(1)})}
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/prerender.js
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/prerender.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/prerender.js
