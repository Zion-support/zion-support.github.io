<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse,
  from 'next';
=======
<<<<<<< HEAD


  try {}
    if (fs.existsSync(dir)) {}
      for (const f of fs.readdirSync(dir)) {"
        if (f.endsWith(".json")) {}
          const fp = path.join(dir, f);
          );
  const dir = null;
          data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8'))
origin/cursor/automate-test-improve-and-merge-code-2533
  const dir = path.resolve(process.cwd(), 'data/cloud-automations'),
  const data: Record<string, any> = {},
  try {
    if (fs.existsSync(dir)) {
      for (const f of fs.readdirSync(dir)) {
        if (f.endsWith('.json')) {
          const fp = path.join($2);
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> origin/main
import fs from 'fs';
import path from 'path';

const dir = null;
<<<<<<< HEAD
          data[f.replace('.json',,,
  '')] = JSON.parse(fs.readFileSync(fp,,,
  'utf8'))
=======
>>>>>>> origin/chore/fix-lint-and-merge
          data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8'))
>>>>>>> origin/main
        }
      }
    }
  } catch (e) {
<<<<<<< HEAD
export default function handler() {const dir = path.resolve(process.cwd(), "data/cloud-automations")const data: Record<string, any> = {}try {if (fs.existsSync(dir)) {for (const f of fs.readdirSync(dir)) {if (f.endsWith(".json")) {const fp = path.join(dir, f))const dir = null;
          data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8'))}
export default function handler() {const dir = path.resolve(process.cwd(), "data/cloud-automations)const data: Record<string, any> = {}try {if (fs.existsSync(dir)) {for (const f of fs.readdirSync(dir)) {if (f.endsWith(.json")) {const fp = path.join(dir, f))const dir = null;
          data[f.replace('.json, ')] = JSON.parse(fs.readFileSync(fp, 'utf8'))}
      }
    }
  } catch (e) {// ignore;
=======
    // ignore}
  }
<<<<<<< HEAD
res.status(200).json({ ok: true,,,
  data });
=======
res.status(200).json({ ok: true, data });

>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/main
