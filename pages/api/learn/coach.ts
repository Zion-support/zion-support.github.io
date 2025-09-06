import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    if (req.method === 'GET') {
      // Get coach information
      const coach = {
        id: '1',
        name: 'AI Learning Coach',
        expertise: ['JavaScript', 'React', 'Node.js', 'TypeScript'],
        rating: 4.8,
        studentsHelped: 1250,
        availability: '24/7'
      };

      res.status(200).json(coach);
    } else if (req.method === 'POST') {
      // Request coaching session
      const { userId, topic, question } = req.body;
      
      if (!userId || !topic) {
        return res.status(400).json({ error: 'User ID and topic are required' });
      }

      const session = {
        id: Date.now().toString(),
        userId,
        topic,
        question: question || '',
        status: 'scheduled',
        scheduledAt: new Date().toISOString()
      };

      res.status(201).json(session);
    }
  } catch (error) {
    console.error('Learning coach error:', error);
    res.status(500).json({ error: 'Failed to process coach request' });
  }
}