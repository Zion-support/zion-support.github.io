import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { userId, courseId, lessonId } = req.body || {};
    
    if (!userId || !courseId || !lessonId) {
      return res.status(400).json({ error: 'User ID, course ID, and lesson ID are required' });
    }

    // Placeholder for lesson completion logic
    res.status(200).json({ success: true, message: 'Lesson completed' });
  } catch (error) {
    console.error('Lesson completion error:', error);
    res.status(500).json({ error: 'Failed to complete lesson' });
  }
}