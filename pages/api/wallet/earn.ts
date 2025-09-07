import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { userId, amount, reason, metadata } = req.body || {};
    
    if (!userId || typeof amount !== 'number' || !reason) {
      return res.status(400).json({ error: 'User ID, amount, and reason are required' });
    }

    // Placeholder for wallet earn logic
    const earning = {
      id: `earn_${Date.now()}`,
      userId,
      amount,
      reason,
      metadata: metadata || {},
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    res.status(200).json({ success: true, earning });
  } catch (error) {
    console.error('Wallet earn error:', error);
    res.status(500).json({ error: 'Failed to process wallet earning' });
  }
}