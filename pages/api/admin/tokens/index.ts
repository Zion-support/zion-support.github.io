import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  const { userId } = req.query;
  const txs = [
    { id: '1', userId: 'user1', amount: 100, type: 'purchase', date: new Date().toISOString() },
    { id: '2', userId: 'user2', amount: 50, type: 'usage', date: new Date().toISOString() },
  ];

  const filtered = typeof userId === 'string' ? txs.filter(t => t.userId === userId) : txs;
  res.status(200).json({ transactions: filtered });
}