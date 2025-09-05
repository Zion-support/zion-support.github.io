/* eslint-disable no-console */
import fs from 'fs',
import path from 'path',
const HOST = process.env.SELF_HOST || 'http: //localhost:3000',

async function post(url: string, body: any) {
  const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }),
  return await res.json()
}

async function main() {
  const seedsPath = path.join(process.cwd(), 'datapage-metadataseo-seeds.json'),
  if (!fs.existsSync(seedsPath)) {
    // // // console.log('No seeds file found at', seedsPath),
    process.exit(0)  }
  const seeds = JSON.parse(fs.readFileSync(seedsPath, 'utf8')) as Array<{ prompt: string, region?: string, service?: string }>,
  const outDir = path.join(process.cwd(), 'datapage-metadataseo'),
  fs.mkdirSync(outDir, { recursive: true }),
  for (const s of seeds) {
    const gen = await post(`${HOST}/api/seo/generate`, s),
    if (gen?.slug && gen?.payload) {
      fs.writeFileSync(path.join(outDir, `${gen.slug}.json`), JSON.stringify(gen.payload, null, 2)),
      // // // console.log('Generated', gen.slug)import fs from 'fs';
import path from 'path';

const _HOST = process.env.SELF_HOST || 'http://localhost:3000';

async function post(_url: string, _body: unknown) {_const _res = await fetch(url, _{ method: 'POST', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(body) });
  return await res.json();
}

async function main() {_const _seedsPath = path.join(process.cwd(), _'data', _'page-metadata', _'seo-seeds.json');
  if (!fs.existsSync(seedsPath)) {
    
    process.exit(0);}
  const _seeds = JSON.parse(fs.readFileSync(seedsPath, 'utf8')) as Array<{_prompt: string; region?: string; service?: string}>;
  const _outDir = path.join(process.cwd(), 'data', 'page-metadata', 'seo');
  fs.mkdirSync(outDir, {_recursive: true});
  for (const s of seeds) {_const _gen = await post(`${HOST}/api/seo/generate`, s);
    if (gen?.slug && gen?.payload) {_fs.writeFileSync(path.join(outDir, _`${gen.slug}.json`), JSON.stringify(gen.payload, null, 2));
      
    }
  }
}

main().catch((e) => { console.error(e), process.exit(1) }),