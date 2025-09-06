/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
const HOST = $2;
async function post(url: string, body: any) {
  const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }),
  return await res.json()
}

async function main() {
  const seedsPath = path.join(process.cwd(), 'datapage-metadataseo-seeds.json'),
  if (!fs.existsSync(seedsPath)) {
    console.log($2);
    process.exit(0)
  }
  const seeds = JSON.parse(fs.readFileSync(seedsPath, 'utf8')) as Array<{ prompt: string, region?: string, service?: string }>,
  const outDir = path.join(process.cwd(), 'datapage-metadataseo'),
  fs.mkdirSync($2);
  for (const s of seeds) {
    const gen = await post($2);
    if (gen?.slug && gen?.payload) {
      fs.writeFileSync(path.join(outDir, `${gen.slug}.json`), JSON.stringify(gen.payload, null, 2)),
      console.log('Generated', gen.slug)
    }
  }
}

main().catch((e) => { console.error(e), process.exit(1) }),