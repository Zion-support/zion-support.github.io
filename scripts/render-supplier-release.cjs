'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const out=process.argv[2]||'out';
// The legacy content hub has no main landmark. Add one without changing its forms or scripts.
const hub=path.join(out,'apps/content-hub.html');let html=fs.readFileSync(hub,'utf8');
if(!/<main\b/i.test(html)){
 assert(html.includes('<body>')&&html.includes('</body>'),'Legacy hub landmarks changed');
 html=html.replace('<body>','<body><main id="content-hub-main">').replace('</body>','</main></body>');fs.writeFileSync(hub,html);
}
// Portuguese canonical home is /. Keep any /pt/ redirect byte-for-byte unchanged.
const alias=path.join(out,'pt/index.html');let redirect=null;
if(fs.existsSync(alias)){const bytes=fs.readFileSync(alias);if(/http-equiv\s*=\s*["']?refresh/i.test(bytes.toString())){redirect=bytes;fs.unlinkSync(alias);}}
try{require('./render-supplier-evidence.cjs');require('./test-supplier-evidence-locales.cjs');}
finally{if(redirect)fs.writeFileSync(alias,redirect);}
