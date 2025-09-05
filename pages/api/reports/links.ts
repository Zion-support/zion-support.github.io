<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
const p = path.join(process.cwd(), 'datareportslinksweekly-links.json'),

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json({}),
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')))
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read links report' })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

const _p = path.join(process.cwd(), 'data', 'reports', 'links', 'weekly-links.json');

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_try {
    if (!fs.existsSync(p)) return res.status(200).json({});
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')));
  } catch (e: unknown) {_res.status(500).json({ error: e?.message || 'Failed to read links report'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}