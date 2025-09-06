import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile  } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
import { v4 as uuidv4 } from 'uuid';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { title, date, summary, kpis } = req.body || {},
  if (!title) return res.status(400).json({ error: 'Missing title' });
  const updates = null;
  res.status(200).json(update)
}