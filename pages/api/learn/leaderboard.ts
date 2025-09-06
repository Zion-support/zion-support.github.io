import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { period = 'monthly' } = req.query;
    
    // Mock leaderboard data
    const leaderboard = [
      {
        rank: 1,
        userId: 'user1',
        name: 'Alice Johnson',
        score: 2850,
        coursesCompleted: 12,
        badges: 8
      },
      {
        rank: 2,
        userId: 'user2',
        name: 'Bob Smith',
        score: 2720,
        coursesCompleted: 10,
        badges: 6
      },
      {
        rank: 3,
        userId: 'user3',
        name: 'Carol Davis',
        score: 2580,
        coursesCompleted: 9,
        badges: 5
      }
    ];

    res.status(200).json({
      period,
      leaderboard,
      totalParticipants: 1250,
      lastUpdated: new Date().toISOString()
    });
  } catch (error) {
    console.error('Leaderboard error:', error);
    res.status(500).json({ error: 'Failed to get leaderboard' });
  }
}