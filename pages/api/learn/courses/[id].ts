import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { id } = req.query;

    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Course ID is required' });
    }

    // Mock course details
    const course = {
      id,
      title: 'Advanced React Development',
      description: 'Master React with hooks, context, and performance optimization',
      category: 'frontend',
      level: 'intermediate',
      duration: '8 weeks',
      instructor: 'Sarah Johnson',
      rating: 4.8,
      lessons: [
        {
          id: '1',
          title: 'Introduction to React Hooks',
          duration: '45 minutes',
          type: 'video'
        },
        {
          id: '2',
          title: 'Context API Deep Dive',
          duration: '60 minutes',
          type: 'video'
        }
      ],
      prerequisites: ['Basic JavaScript', 'HTML/CSS'],
      learningOutcomes: [
        'Master React hooks',
        'Understand context API',
        'Optimize React performance'
      ]
    };

    res.status(200).json({
      success: true,
      course
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to retrieve course details'
    });
  }
}