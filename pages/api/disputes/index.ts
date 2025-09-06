import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Mock disputes list
      const disputes = [
        {
          id: '1',
          status: 'open',
          description: 'Sample dispute 1',
          createdAt: new Date().toISOString()
        },
        {
          id: '2',
          status: 'resolved',
          description: 'Sample dispute 2',
          createdAt: new Date().toISOString()
        }
      ];

      res.status(200).json({
        success: true,
        disputes
      });
    } catch (error: any) {
      res.status(500).json({
        error: error?.message || 'Failed to retrieve disputes'
      });
    }
  } else if (req.method === 'POST') {
    try {
      const { description, reporterId } = req.body;

      if (!description || !reporterId) {
        return res.status(400).json({ error: 'Description and reporterId are required' });
      }

      // Mock dispute creation
      const newDispute = {
        id: Date.now().toString(),
        status: 'open',
        description,
        reporterId,
        createdAt: new Date().toISOString()
      };

      res.status(201).json({
        success: true,
        dispute: newDispute
      });
    } catch (error: any) {
      res.status(500).json({
        error: error?.message || 'Failed to create dispute'
      });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end('Method Not Allowed');
  }
}