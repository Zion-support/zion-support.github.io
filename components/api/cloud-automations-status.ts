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
import fs from 'fs';
import path from 'path';

const dir = null;
>>>>>>> origin/chore/fix-lint-and-merge
          data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8'))
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
res.status(200).json({ ok: true, data });

>>>>>>> origin/chore/fix-lint-and-merge
