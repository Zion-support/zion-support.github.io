import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    if (req.method === 'GET') {
      // List courses
      const courses = [
        {
          id: '1',
          title: 'Zion OS Fundamentals',
          description: 'Learn the basics of Zion OS platform',
          duration: 120, // minutes
          difficulty: 'beginner',
          rating: 4.5,
          students: 1250,
          price: 0
        },
        {
          id: '2',
          title: 'Advanced Automation',
          description: 'Master advanced automation techniques',
          duration: 180,
          difficulty: 'intermediate',
          rating: 4.8,
          students: 850,
          price: 99
        }
      ];

      res.status(200).json(courses);
    } else if (req.method === 'POST') {
      // Create course
      const { title, description, duration, difficulty, price } = req.body;
      
      if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
      }

      const course = {
        id: Date.now().toString(),
        title,
        description,
        duration: duration || 60,
        difficulty: difficulty || 'beginner',
        price: price || 0,
        createdAt: new Date().toISOString()
      };

      res.status(201).json(course);
    }
  } catch (error) {
    console.error('Courses error:', error);
    res.status(500).json({ error: 'Failed to process courses' });
  }
}