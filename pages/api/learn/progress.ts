import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { userId } = req.query;
    
    if (!userId || typeof userId !== 'string') {
      return res.status(400).json({ error: 'User ID is required' });
    }

    // Mock learning progress
    const progress = {
      userId,
      totalCourses: 12,
      completedCourses: 8,
      inProgressCourses: 2,
      totalTimeSpent: 1440, // minutes
      currentStreak: 7, // days
      longestStreak: 21,
      badges: [
        { id: '1', name: 'First Course', earnedAt: '2024-01-15' },
        { id: '2', name: 'Week Warrior', earnedAt: '2024-01-22' }
      ],
      lastActivity: new Date().toISOString()
    };

    res.status(200).json(progress);
  } catch (error) {
    console.error('Learning progress error:', error);
    res.status(500).json({ error: 'Failed to get learning progress' });
  }
}