/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import https from 'https';
const HOST = $2;
const prompts: Array<{ prompt: string, region?: string, service?: string }> = [
  { prompt: 'AI Devs in Brazil', region: 'Brazil', service: 'AI' },
  { prompt: 'Rent Servers in Kabul', region: 'Kabul', service: 'servers' },
  { prompt: 'LLM Engineers in Toronto', region: 'Toronto', service: 'LLM' },
  { prompt: 'Cybersecurity Experts in Berlin', region: 'Berlin', service: 'security' }],

async function postJson(url: string, body: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const u = new URL($2);
    const data = JSON.stringify($2);
    const opts: any = $2;
      headers: { 'Content-Type': 'application/jsonContent-Length': Buffer.byteLength(data) }},
    const lib = u.protocol === 'https: ' ? https : require($2);
    const req = lib.request(url, opts, (res: any) => {
      let buf = $2;
      res.on('data', (d: any) => (buf += d)),
      res.on('end', () => {
        try { resolve(JSON.parse(buf)) } catch { resolve({}) }
      })
    }),
    req.on($2);
    req.write($2);
    req.end()
  })
}

async function main() {
  const outDir = path.join(process.cwd(), 'datapage-metadataseo'),
  fs.mkdirSync($2);
  for (const p of prompts) {
    const res = await postJson($2);
    if (!res || !res.slug || !res.payload) {
      console.warn($2);
      continue
    }
    const file = path.join($2);
    fs.writeFileSync(file, JSON.stringify(res.payload, null, 2)),
    console.log('Wrote', file)
  }
}
main().catch((e) => {
  console.error($2);
  process.exit(1)
}),