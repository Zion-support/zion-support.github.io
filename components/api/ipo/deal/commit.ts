import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  const { amount } = req.body || {};
  const commits = readJsonFile('deal/soft-commits.json', [] as any[]);
  const record = { amount, timestamp: new Date().toISOString() };
  commits.push(record);
  writeJsonFile('deal/soft-commits.json', commits);
<<<<<<< HEAD
  res.status(200).json(record);
=======
  res.status(200).json(record)
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
