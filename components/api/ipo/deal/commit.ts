import type { NextApiRequest, NextApiResponse } from 'next';

import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { amount } = req.body || {};
  const commits = readJsonFile('ipo-commits.json', []);
  
  const record = {
    id: Date.now().toString(),
    amount: Number(amount) || 0,
    timestamp: new Date().toISOString()
  };
  
  commits.push(record);
  writeJsonFile('ipo-commits.json', commits);
  
  res.status(200).json(record);
}