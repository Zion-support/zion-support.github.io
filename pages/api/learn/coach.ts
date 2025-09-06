import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Mock coach data
      const coaches = [
        {
          id: '1',
          name: 'Sarah Johnson',
          expertise: ['React', 'TypeScript', 'Node.js'],
          rating: 4.9,
          availability: 'available'
        },
        {
          id: '2',
          name: 'Mike Chen',
          expertise: ['Python', 'Machine Learning', 'Data Science'],
          rating: 4.8,
          availability: 'busy'
        }
      ];

      res.status(200).json({
        success: true,
        coaches
      });
    } catch (error: any) {
      res.status(500).json({
        error: error?.message || 'Failed to retrieve coaches'
      });
    }
  } else if (req.method === 'POST') {
    try {
      const { studentId, coachId, message } = req.body;

      if (!studentId || !coachId) {
        return res.status(400).json({ error: 'Student ID and coach ID are required' });
      }

      // Mock coach session creation
      const session = {
        id: Date.now().toString(),
        studentId,
        coachId,
        message: message || '',
        status: 'scheduled',
        createdAt: new Date().toISOString()
      };

      res.status(201).json({
        success: true,
        session
      });
    } catch (error: any) {
      res.status(500).json({
        error: error?.message || 'Failed to create coach session'
      });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end('Method Not Allowed');
  }
}