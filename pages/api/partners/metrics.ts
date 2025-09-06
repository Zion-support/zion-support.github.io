import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { partnerCode, period = 'monthly' } = req.query;
    
    if (!partnerCode || typeof partnerCode !== 'string') {
      return res.status(400).json({ error: 'Partner code is required' });
    }

    // Mock partner metrics
    const metrics = {
      partnerCode,
      period,
      totalReferrals: 150,
      activeReferrals: 120,
      totalRevenue: 15000,
      commissionEarned: 1500,
      conversionRate: 0.8,
      topReferralSources: [
        { source: 'Website', count: 75 },
        { source: 'Social Media', count: 45 },
        { source: 'Email', count: 30 }
      ],
      lastUpdated: new Date().toISOString()
    };

    res.status(200).json(metrics);
  } catch (error) {
    console.error('Partners metrics error:', error);
    res.status(500).json({ error: 'Failed to get partner metrics' });
  }
}