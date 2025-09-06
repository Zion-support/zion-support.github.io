
=======

 


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import fs from 'fs';
import path from 'path';

  const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  return await res.json()

}

}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
async function main() {
  try {
  const seedsPath = path && path.join(process && process.cwd(), 'datapage-metadataseo-seeds && seeds.json');
  if (!fs && fs.existsSync(seedsPath)) {
    console && console.log('No seeds file found at', seedsPath);
    process && process.exit(0)
  }
  const seeds = JSON && JSON.parse(fs && fs.readFileSync(seedsPath, 'utf8')) as Array<{ prompt: string, region?: string, service?: string }>;
  const outDir = path && path.join(process && process.cwd(), 'datapage-metadataseo');
  fs && fs.mkdirSync(outDir, { recursive: true });
  for (const s of seeds) {
    const gen = await post(`${HOST}/api/seo/generate`, s);
    if (gen?.slug && gen?.payload) {
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
