import { NextApiRequest, NextApiResponse } from 'next';

const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {};
(global as any).__ZION_DID_STORE__ = store;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { address } = req.query as { address?: string };
  if (!address) {
    return res.status(400).json({ error: 'Missing address' });
  }

  const data = store[String(address).toLowerCase()] || null;
  res.status(200).json({ data });
}