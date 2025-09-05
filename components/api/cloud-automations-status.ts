<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const dir = path.resolve(process.cwd(), 'data/cloud-automations'),
  const data: Record<string any> = {},
  try {
    if (fs.existsSync(dir)) {
      for (const f of fs.readdirSync(dir)) {
        if (f.endsWith('.json')) {
          const fp = path.join(dir, f),
          data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8'))
        }
      }
    }
  } catch (e) {
    // ignore
  }
  res.status(200).json({ ok: true, data })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _dir = path.resolve(process.cwd(), _'data/cloud-automations');
  const data: Record<string, _any> = {};
  try {_if (fs.existsSync(dir)) {
      for (const f of fs.readdirSync(dir)) {
        if (f.endsWith('.json')) {
          const _fp = path.join(dir, _f);
          data[f.replace('.json', _'')] = JSON.parse(fs.readFileSync(fp, _'utf8'));}
      }
    }
  } catch (e) {_// ignore}
  res.status(200).json({_ok: true, _data});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}