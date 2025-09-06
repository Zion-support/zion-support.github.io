import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { userId, courseId, score, timeSpent } = req.body;
    
    if (!userId || !courseId) {
      return res.status(400).json({ error: 'User ID and course ID are required' });
    }

    // Mock course completion
    const completion = {
      id: Date.now().toString(),
      userId,
      courseId,
      score: score || 85,
      timeSpent: timeSpent || 120, // minutes
      completedAt: new Date().toISOString(),
      certificateEligible: (score || 85) >= 70
    };

    res.status(200).json(completion);
  } catch (error) {
    console.error('Course completion error:', error);
    res.status(500).json({ error: 'Failed to complete course' });
  }
}