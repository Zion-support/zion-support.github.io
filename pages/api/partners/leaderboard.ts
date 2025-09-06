import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { period = 'monthly' } = req.query;
    
    // Mock leaderboard data
    const leaders = [
      {
        rank: 1,
        partnerCode: 'PARTNER001',
        name: 'Alpha Partners',
        referrals: 150,
        revenue: 15000,
        commission: 1500
      },
      {
        rank: 2,
        partnerCode: 'PARTNER002',
        name: 'Beta Solutions',
        referrals: 120,
        revenue: 12000,
        commission: 1200
      },
      {
        rank: 3,
        partnerCode: 'PARTNER003',
        name: 'Gamma Group',
        referrals: 100,
        revenue: 10000,
        commission: 1000
      }
    ];

    res.status(200).json({
      period,
      leaders,
      lastUpdated: new Date().toISOString()
    });
  } catch (error) {
    console.error('Partners leaderboard error:', error);
    res.status(500).json({ error: 'Failed to get leaderboard' });
  }
}