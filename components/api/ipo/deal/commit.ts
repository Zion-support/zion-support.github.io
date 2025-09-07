import type { NextApiRequest, NextApiResponse } from 'next';

import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;}
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed',}
});

const { amount } = req.body || {},
  const commits = null;
  res.status(200).json(record)
}

