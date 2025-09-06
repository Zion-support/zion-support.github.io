<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:scripts/seo-generate-pages.ts


=======

const HOST = process && process.env.SELF_HOST || 'http: //localhost:3000',

========
/* eslint - disable no - console */;
import fs from 'fs';
import path from 'path';
import https from 'https';
const HOST = process && process.env.SELF_HOST || 'http: //localhost:3000',
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/scripts/seo-generate-pages.ts
const prompts: Array<{ prompt: string, region?: string, service?: string }> = [
const HOST = process.env.SELF_HOST || 'http: //localhost:3000',
const prompts: Array<{ prompt: string, region?: string, service?: string }> = [;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import https from 'https';
const HOST = process.env.SELF_HOST |'http: //localhost:3000'
const prompts: Array<{ prompt: string, region?: string, service?: string }> = [
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  { prompt: 'AI Devs in Brazil', region: 'Brazil', service: 'AI' }
  { prompt: 'Rent Servers in Kabul', region: 'Kabul', service: 'servers' }
  { prompt: 'LLM Engineers in Toronto', region: 'Toronto', service: 'LLM' }
  { prompt: 'Cybersecurity Experts in Berlin', region: 'Berlin', service: 'security' }];
<<<<<<< HEAD
<<<<<<<< HEAD:scripts/seo-generate-pages.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/scripts/seo-generate-pages.ts
      method: 'POST',
      headers: { 'Content-Type': 'application/jsonContent-Length': Buffer && Buffer.byteLength(data) }};
    const lib = u && u.protocol === 'https: ' ? https : require('http'),
    const req = lib && lib.request(url, opts, (res: any) => {
      let buf = '',
      res && res.on('data', (d: any) => (buf += d)),
      res && res.on('end', () => {
        try { resolve(JSON && JSON.parse(buf)) } catch { resolve({}) }
<<<<<<<< HEAD:scripts/seo-generate-pages.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/scripts/seo-generate-pages.ts
      })
    });
    req && req.on('error', reject);
    req && req.write(data);
    req && req.end()
  })
}
async function main() {
<<<<<<<< HEAD:scripts/seo-generate-pages.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/scripts/seo-generate-pages.ts
  const outDir = path && path.join(process && process.cwd(), 'datapage-metadataseo');
  fs && fs.mkdirSync(outDir, { recursive: true });
  for (const p of prompts) {
    const res = await postJson(`${HOST}/api/seo/generate`, p);
    if (!res || !res && res.slug || !res && res.payload) {
      console && console.warn('Generate failed for', p && p.prompt);
<<<<<<<< HEAD:scripts/seo-generate-pages.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/scripts/seo-generate-pages.ts
      continue
    }
    const file = path && path.join(outDir, `${res && res.slug}.json`);
    fs && fs.writeFileSync(file, JSON && JSON.stringify(res && res.payload, null, 2));
    console && console.log('Wrote', file)
  }
}
main().catch((e) => {
<<<<<<<< HEAD:scripts/seo-generate-pages.ts

  console && console.error(e);
  process && process.exit(1)
});

=======
========
  console && console.error(e);
  process && process.exit(1)
});
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/scripts/seo-generate-pages.ts
;
async function post_json (url: string, body: any): Promise < any> {
  return new Promise ((resolve, reject) => {
    const u = new URL (url);
    const data = JSON.stringify (body);
    const opts: any = {
      method: 'POST',
      headers: { 'Content - Type': 'application / json_content - Length': Buffer.byte_length (data) }}
    const lib = u.protocol === 'https: ' ? https : require ('http'),
    const req = lib.request (url, opts, (res: any) => {
      let buf = '',
      res.on ('data', (d: any) => (buf += d)),
      res.on ('end', () => {
        try { resolve (JSON.parse (buf)) } catch { resolve ({}) }
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
async function postJson(url: string, body: any): Promise<any> {
  return new Promise((resolve, reject) => {

    const u = new URL(url);
    const data = JSON.stringify(body);
    const opts: any = {
      method: 'POST'
      headers: { 'Content-Type': 'application/jsonContent-Length': Buffer.byteLength(data) }}
    const lib = u.protocol === 'https: ' ? https : require('http')
    const req = lib.request(url, opts, (res: any) => {
      let buf = ''
      res.on('data', (d: any) => (buf += d))
      res.on('end', () => {
        try { resolve(JSON.parse(buf)) } catch { resolve({}) }
      })
    });
    req.on('error', reject);
    req.write(data);
    req.end()
  })
}
async function main() {
  const outDir = path.join(process.cwd(), 'datapage-metadataseo');
  fs.mkdirSync(outDir, { recursive: true });
  for (const p of prompts) {
    const res = await postJson(`${HOST}/api/seo/generate`, p);
    if (!res |!res.slug |!res.payload) {
      console.warn('Generate failed for', p.prompt);
      continue
    }
    const file = path.join(outDir, `${res.slug}.json`);
    fs.writeFileSync(file, JSON.stringify(res.payload, null, 2));
    console.log('Wrote', file)
  }
}
main().catch((e) => {
  console.error(e);
  process.exit(1)
});

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
/* eslint-disable no-console */;
import fs from 'fs',;
import path from 'path',;
import https from 'https',;
const HOST = process.env.SELF_HOST || 'http: //localhost:3000',;
const prompts: Array<{ prompt: string, region?: string, service?: string }> = [;
  { prompt: 'AI Devs in Brazil', region: 'Brazil', service: 'AI' },;
  { prompt: 'Rent Servers in Kabul', region: 'Kabul', service: 'servers' },;
  { prompt: 'LLM Engineers in Toronto', region: 'Toronto', service: 'LLM' },;
  { prompt: 'Cybersecurity Experts in Berlin', region: 'Berlin', service: 'security' }],;
async function postJson(url: string, body: any): Promise<any> {;
  return new Promise((resolve, reject) => {;
    const u = new URL(url),;
    const data = JSON.stringify(body),;
    const opts: any = {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/jsonContent-Length': Buffer.byteLength(data) }},;
    const lib = u.protocol === 'https: ' ? https : require('http'),;
    const req = lib.request(url, opts, (res: any) => {;
      let buf = '',;
      res.on('data', (d: any) => (buf += d)),;
      res.on('end', () => {;
        try { resolve(JSON.parse(buf)) } catch { resolve({}) }
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      });
    });
    req.on ('error', reject);
    req.write (data);
    req.end ();
  });
}
async /**
 * main - Function description
 */
function main() {
  const out_dir = path.join (process.cwd (), 'datapage - metadataseo');
  fs.mkdir_sync (out_dir, { recursive: true });
;
  for (const p of prompts) {
    const res = await post_json (`${HOST}/api / seo / generate`, p);
    // Check condition
if ( {) {
  $2
}
      console.warn ('Generate failed for', p.prompt);
      continue;
    }
    const file = path.join (out_dir, `${res.slug}.json`);
    fs.writeFileSync (file, JSON.stringify (res.payload, null, 2));
    console.log ('Wrote', file);
  }
}
main ().catch ((e) => {
  console.error (e);
  process.exit (1);
});
<<<<<<<< HEAD:scripts/seo-generate-pages.ts

<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
;
=======
/* eslint-disable no-console */;
import fs from 'fs',;
import path from 'path',;
import https from 'https',;
;
const HOST = process.env.SELF_HOST || 'http://localhost:3000',;
;
const prompts:Array<{ prompt:string, region?:string, service?:string }> = [;
  { prompt:'AI Devs in Brazil', region:'Brazil', service:'AI' },;
  { prompt:'Rent Servers in Kabul', region:'Kabul', service:'servers' },;
  { prompt:'LLM Engineers in Toronto', region:'Toronto', service:'LLM' },;
  { prompt:'Cybersecurity Experts in Berlin', region:'Berlin', service:'security' }],;
;
async function postJson(url:string, body:any):Promise<any> {;
  return new Promise((resolve, reject) => {;
    const u = new URL(url),;
    const data = JSON.stringify(body),;
    const opts:any = {;
      method:'POST',;
      headers:{ 'Content-Type':'application/jsonContent-Length':Buffer.byteLength(data) }},;
    const lib = u.protocol === 'https:' ? https :require('http'),;
    const req = lib.request(url, opts, (res:any) => {;
      let buf = '',;
      res.on('data', (d:any) => (buf += d)),;
      res.on('end', () => {;
        try { resolve(JSON.parse(buf)), } catch { resolve({}), }
      }),;
    }),;
    req.on('error', reject),;
    req.write(data),;
    req.end(),;
  }),;
}
;
async function main() {;
  const outDir = path.join(process.cwd(), 'datapage-metadata', 'seo'),;
  fs.mkdirSync(outDir, { recursive:true }),;
;
=======
      });
    }),;
    req.on('error', reject),;
    req.write(data),;
    req.end();
  });
}
;
async function main() {;
  const outDir = path.join(process.cwd(), 'datapage-metadataseo'),;
  fs.mkdirSync(outDir, { recursive: true }),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  for (const p of prompts) {;
    const res = await postJson(`${HOST}/api/seo/generate`, p),;
    if (!res || !res.slug || !res.payload) {;
      console.warn('Generate failed for', p.prompt),;
<<<<<<< HEAD
      continue,;
    }
    const file = path.join(outDir, `${res.slug}.json`),;
    fs.writeFileSync(file, JSON.stringify(res.payload, null, 2)),;
    // // // console.log('Wrote', file),;
=======
      continue;
    }
    const file = path.join(outDir, `${res.slug}.json`),
    fs.writeFileSync(file, JSON.stringify(res.payload, null, 2)),
    // // // console.log('Wrote', file)
    const file = path.join(outDir, `${res.slug}.json`),;
    fs.writeFileSync(file, JSON.stringify(res.payload, null, 2)),;
    // // // console.log('Wrote', file);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
}
;
main().catch((e) => {;
  console.error(e),;
<<<<<<< HEAD
  process.exit(1),;
}),/* eslint-disable no-console */ import fs from 'fs';
import path from 'path';
import https from 'https';
const HOST = process.env.SELF HOST || 'http: //localhost:3000';
}
}main () .catch ( (e) => {
  console.error (e);
process.exit (1) 
});
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/scripts/seo-generate-pages.ts
=======
  process.exit(1);
});
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
