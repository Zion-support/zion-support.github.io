<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
const usersPath = path.join(process.cwd(), 'datalearnusers.json'),

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8')),
    const entries = Object.values(users as any).map((u: any) => ({
      userId: u.userId,
      name: u.name || u.userId,
      certifications: u.certifications?.length || 0,
      points: (u.certifications?.length || 0) * 100 + Object.values(u.progress || {}).reduce((acc: number, p: any) => acc + (p.percent || 0), 0)
    })),

    const top = entries.sort((a: any, b: any) => b.points - a.points).slice(0, 20),
    res.status(200).json({ leaderboard: top })
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to load leaderboard' })
  }
};
=======
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-10dd
