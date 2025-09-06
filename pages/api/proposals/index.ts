import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    if (req.method === 'GET') {
      // Return list of proposals
      const proposals = [
        {
          id: 'proposal-1',
          title: 'Website Redesign Project',
          description: 'Complete website redesign and development',
          status: 'draft',
          author: 'John Doe',
          createdAt: '2024-01-15',
          updatedAt: '2024-01-20'
        },
        {
          id: 'proposal-2',
          title: 'Mobile App Development',
          description: 'iOS and Android app development',
          status: 'review',
          author: 'Jane Smith',
          createdAt: '2024-01-10',
          updatedAt: '2024-01-18'
        }
      ];

      res.status(200).json({
        success: true,
        proposals
      });
    } else if (req.method === 'POST') {
      // Create new proposal
      const { title, description, author } = req.body;
      
      if (!title || !description || !author) {
        return res.status(400).json({ error: 'Title, description, and author required' });
      }

      const proposal = {
        id: `proposal-${Date.now()}`,
        title,
        description,
        author,
        status: 'draft',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      res.status(201).json({
        success: true,
        proposal
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Request failed' });
  }
}