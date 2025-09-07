import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { id } = req.query;
    
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Invalid course ID' });
    }

    // Placeholder for course retrieval logic
    const course = {
      id,
      title: 'Sample Course',
      description: 'Sample course description',
      lessons: []
    };

    res.status(200).json({ success: true, course });
  } catch (error) {
    console.error('Course retrieval error:', error);
    res.status(500).json({ error: 'Failed to fetch course' });
  }
}