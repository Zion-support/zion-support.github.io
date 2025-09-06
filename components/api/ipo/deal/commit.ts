import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const { amount } = req.body || {},
  const commits = readJsonFile('deal/soft-commits.json', [] as any[]),
  const record = { amount, timestamp: new Date().toISOString() },
  commits.push(record),
  writeJsonFile('deal/soft-commits.json', commits),

=======
  res.status(200).json(record)
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
