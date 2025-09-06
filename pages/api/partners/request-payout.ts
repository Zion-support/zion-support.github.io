import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { partnerCode, amount, paymentMethod, bankDetails } = req.body;
    
    if (!partnerCode || !amount || !paymentMethod) {
      return res.status(400).json({ error: 'Partner code, amount, and payment method required' });
    }

    // Mock payout request
    const payout = {
      id: `payout-${Date.now()}`,
      partnerCode,
      amount,
      paymentMethod,
      bankDetails: bankDetails || {},
      status: 'pending',
      requestedAt: new Date().toISOString(),
      estimatedProcessingTime: '3-5 business days'
    };

    res.status(200).json({
      success: true,
      payout
    });
  } catch (error) {
    res.status(500).json({ error: 'Payout request failed' });
  }
}