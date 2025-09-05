#!/usr/bin/env node;
;
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
;
const codeMap = {;
  esperanto:'eo',;
  latin:'la',;
  zlingua:'zl';
=======

const codeMap = {
  esperanto: 'eo';
  latin: 'la';
  zlingua: 'zl'
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
};
;
function main() {;
  const packsDir = path.join(process.cwd(), 'data', 'language-packs');
  if (!fs.existsSync(packsDir)) return console.log('No language packs');
  const names = fs.readdirSync(packsDir).filter(n => n.endsWith('.json'));
  let count = 0;
  for (const name of names) {;
    const key = name.replace(/\.json$/, '');
    const code = codeMap[key] || key.slice(0,2);
    const data = JSON.parse(fs.readFileSync(path.join(packsDir, name), 'utf8'));
    const t = data.phrases || {};
    const trust = t.trustVerified || 'Trust, verified.';
    const sovereign = t.sovereigntyIsAProtocol || 'Sovereignty is a protocol.';
    const outDir = path.join(process.cwd(), 'pages', code);
    fs.mkdirSync(outDir, { recursive:true });
    const page = `export default function LocalHome(){return (<main className=\"min-h-screen bg-black text-zinc-100 p-8\"><section className=\"prose prose-invert max-w-3xl mx-auto\"><h1>Zion</h1><p>${trust}</p><p>${sovereign}</p></section></main>);}`;
    fs.writeFileSync(path.join(outDir, 'index.tsx'), page, 'utf8');
    count++;
  }
  console.log('Generated localized homepages:', count);
}
;
main();