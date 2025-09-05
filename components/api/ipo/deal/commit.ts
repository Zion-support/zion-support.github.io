<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage',
import { requireSuperadminApi } from '../../../../utils/api/auth',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return,
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { amount } = req.body || {},
  const commits = readJsonFile('deal/soft-commits.json', [] as any[]),
  const record = { amount, timestamp: new Date().toISOString() },
  commits.push(record),
  writeJsonFile('deal/soft-commits.json', commits),
  res.status(200).json(record)
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (!requireSuperadminApi(req, _res)) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_amount} = req.body || {};
  const _commits = readJsonFile('deal/soft-commits.json', [] as any[]);
  const _record = {_amount, _timestamp: new Date().toISOString()};
  commits.push(record);
  writeJsonFile('deal/soft-commits.json', commits);
  res.status(200).json(record);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}