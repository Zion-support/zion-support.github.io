import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { partnerCode, amount, paymentMethod, accountDetails } = req.body;
    
    if (!partnerCode || !amount || !paymentMethod) {
      return res.status(400).json({ error: 'Partner code, amount, and payment method are required' });
    }

    // Mock payout request
    const payout = {
      id: Date.now().toString(),
      partnerCode,
      amount,
      paymentMethod,
      accountDetails: accountDetails || {},
      status: 'pending',
      requestedAt: new Date().toISOString(),
      estimatedProcessing: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 days
    };

    res.status(201).json(payout);
  } catch (error) {
    console.error('Payout request error:', error);
    res.status(500).json({ error: 'Failed to request payout' });
  }
}