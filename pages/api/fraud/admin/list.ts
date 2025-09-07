import { NextApiRequest, NextApiResponse } from 'next';

function ensureAdmin(req: NextApiRequest): boolean {
  const token = req.headers['x-admin-token'];
  if (!process.env.ADMIN_TOKEN) return true; // allow if not configured
  return token === process.env.ADMIN_TOKEN;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!ensureAdmin(req)) {
    return res.status(403).json({ error: 'Admin access required' });
  }

  try {
    // Placeholder for fraud list logic
    const fraudList = [];
    res.status(200).json({ success: true, fraudList });
  } catch (error) {
    console.error('Fraud list error:', error);
    res.status(500).json({ error: 'Failed to fetch fraud list' });
  }
}