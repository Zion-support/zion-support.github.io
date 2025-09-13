import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const config = {
      tokenPrice: 0.01,
      minPurchase: 100,
      maxPurchase: 10000,
      currency: 'USD',
    };
    return res.status(200).json(config);
  }

  if (req.method === 'POST') {
    const { tokenPrice, minPurchase, maxPurchase } = req.body || {};
    // Update configuration logic here
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}