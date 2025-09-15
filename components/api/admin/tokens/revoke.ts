import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { userId, amount, reason } = req.body || {};
  if (!userId || !amount) {
    return res.status(400).json({ error: 'Missing userId or amount' });
  }

  try {
    const transaction = {
      id: Date.now().toString(),
      userId,
      amount: -parseInt(amount),
      reason: reason || 'Manual revocation',
      date: new Date().toISOString(),
    };

    return res.status(200).json({ transaction });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || 'Failed to revoke tokens' });
  }
}