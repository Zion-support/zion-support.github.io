import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { courseId, userId, score, completedAt } = req.body;

    if (!courseId || !userId) {
      return res.status(400).json({ error: 'Course ID and user ID are required' });
    }

    // Mock course completion
    const completion = {
      id: Date.now().toString(),
      courseId,
      userId,
      score: score || 0,
      completedAt: completedAt || new Date().toISOString(),
      status: 'completed'
    };

    res.status(201).json({
      success: true,
      completion
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to complete course'
    });
  }
}