import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (!requireSuperadminApi(req, res)) return,
  if (req.method !== 'POST') return res.status(405).json($2);
  const { amount } = req.body || {},
  const commits = readJsonFile($2);
  const record = { amount, timestamp: new Date().toISOString() },
  commits.push($2);
  writeJsonFile($2);
=======
<<<<<<< HEAD
  if (!requireSuperadminApi(req, res)) return;'
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { amount } = req.body |{}'
    return res.status(405).json({ error: 'Method not allowed' });  const { amount } = req.body || {};export default function handler() { return null; }
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { amount } = req.body || {};'
  const commits = readJsonFile('deal/soft-commits.json', [] as any[]);
  const record = { amount, timestamp: new Date().toISOString() }
  commits.push(record);'
  writeJsonFile('deal/soft-commits.json', commits);
}
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


<<<<<<< HEAD
  res.status(200).json(record)
}