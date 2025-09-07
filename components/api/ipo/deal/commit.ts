<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';'


import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';'
import { requireSuperadminApi } from '../../../../utils/api/auth';'

export default function handler() {
  }
  if (!requireSuperadminApi(req, res)) return;
  if (req.method !== 'POST') return res.status(405).json({ "error": 'Method not allowed','
});

const { amount } = req.body || {},;
  const commits = null;
  res.status(200).json(record)
}
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return,
  if (req.method !== 'POST') return res.status(405).json($2);
  const { amount } = req.body || {},
  const commits = readJsonFile($2);
  const record = { amount, timestamp: new Date().toISOString() },
  commits.push($2);
  writeJsonFile($2);
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
  res.status(200).json(record)
}