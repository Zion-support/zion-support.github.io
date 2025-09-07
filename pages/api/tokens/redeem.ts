import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { account, amount, type, serviceId } = req.body as { 
      account?: string; 
      amount?: number; 
      type?: string; 
      serviceId?: string 
    };
    
    if (!account || !amount || amount <= 0 || !type) {
      return res.status(400).json({ error: 'Invalid input' });
    }

    // Placeholder for token redemption logic
    const redemption = {
      id: `rdm_${Math.random().toString(36).slice(2)}_${Date.now()}`,
      account,
      amount,
      type,
      serviceId: serviceId || '',
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    res.status(200).json({ success: true, redemption });
  } catch (error) {
    console.error('Token redemption error:', error);
    res.status(500).json({ error: 'Failed to redeem tokens' });
  }
}