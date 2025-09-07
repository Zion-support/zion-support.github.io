import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Placeholder for leaderboard logic
    const leaderboard = [
      { rank: 1, username: 'User1', score: 1000 },
      { rank: 2, username: 'User2', score: 900 },
      { rank: 3, username: 'User3', score: 800 }
    ];

    res.status(200).json({ success: true, leaderboard });
  } catch (error) {
    console.error('Leaderboard error:', error);
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
}