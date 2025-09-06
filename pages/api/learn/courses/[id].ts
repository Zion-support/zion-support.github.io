import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'PUT' && req.method !== 'DELETE') {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { id } = req.query;
    
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Course ID is required' });
    }

    if (req.method === 'GET') {
      // Get course by ID
      const course = {
        id,
        title: 'Zion OS Fundamentals',
        description: 'Learn the basics of Zion OS platform',
        duration: 120,
        difficulty: 'beginner',
        rating: 4.5,
        students: 1250,
        price: 0,
        modules: [
          { id: '1', title: 'Introduction', duration: 15 },
          { id: '2', title: 'Getting Started', duration: 30 },
          { id: '3', title: 'Advanced Features', duration: 45 }
        ]
      };

      res.status(200).json(course);
    } else if (req.method === 'PUT') {
      // Update course
      const { title, description, duration, difficulty, price } = req.body;
      
      const course = {
        id,
        title: title || 'Updated Course',
        description: description || 'Updated description',
        duration: duration || 60,
        difficulty: difficulty || 'beginner',
        price: price || 0,
        updatedAt: new Date().toISOString()
      };

      res.status(200).json(course);
    } else if (req.method === 'DELETE') {
      // Delete course
      res.status(200).json({ message: 'Course deleted successfully' });
    }
  } catch (error) {
    console.error('Course error:', error);
    res.status(500).json({ error: 'Failed to process course' });
  }
}