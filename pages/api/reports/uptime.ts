<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
const p = path.join(process.cwd(), 'dataopsuptime-log.json'),

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json([]),
    const arr = JSON.parse(fs.readFileSync(p, 'utf-8')),
    res.status(200).json(arr)
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read uptime log' })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

const _p = path.join(process.cwd(), 'data', 'ops', 'uptime-log.json');

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_try {
    if (!fs.existsSync(p)) return res.status(200).json([]);
    const _arr = JSON.parse(fs.readFileSync(p, _'utf-8'));
    res.status(200).json(arr);} catch (e: unknown) {_res.status(500).json({ error: e?.message || 'Failed to read uptime log'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}