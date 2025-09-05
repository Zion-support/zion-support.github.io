/* eslint-disable no-console */
import fs from 'fs';
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

main().catch(_(e) => {_process.exit(1);});