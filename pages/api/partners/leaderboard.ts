import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    // Mock partners leaderboard
    const leaders = [
      {
        id: '1',
        partnerCode: 'PARTNER001',
        name: 'Tech Solutions Inc',
        referrals: 25,
        revenue: 50000,
        rank: 1
      },
      {
        id: '2',
        partnerCode: 'PARTNER002',
        name: 'Digital Agency Co',
        referrals: 18,
        revenue: 35000,
        rank: 2
      }
    ];

    res.status(200).json({
      success: true,
      leaders
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to retrieve leaderboard'
    });
  }
}