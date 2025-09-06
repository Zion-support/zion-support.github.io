import type { NextApiRequest, NextApiResponse } from 'next';
import { getFraudStore } from '../../../../utils/fraud/store';

function ensureAdmin(req: NextApiRequest): boolean {
  const token = req.headers['x-admin-token'];
  if (!process.env.ADMIN_TOKEN) return true; // allow if not configured
  return token === process.env.ADMIN_TOKEN;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  
  if (!ensureAdmin(req)) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  try {
    const store = getFraudStore();
    const cases = await store.getCases();
    res.status(200).json({ cases });
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to fetch fraud cases' });
  }
}