import { NextApiRequest, NextApiResponse } from 'next';

const mockLeaderboard = [
  { rank: 1, name: 'Alice Johnson', score: 950, courses: 5 },
  { rank: 2, name: 'Bob Smith', score: 920, courses: 4 },
  { rank: 3, name: 'Carol Davis', score: 890, courses: 6 },
  { rank: 4, name: 'David Wilson', score: 870, courses: 3 },
  { rank: 5, name: 'Eva Brown', score: 850, courses: 4 }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { limit = '10' } = req.query;
    const limited = mockLeaderboard.slice(0, parseInt(limit as string));
    res.status(200).json({ leaderboard: limited });
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to load leaderboard' });
  }
}