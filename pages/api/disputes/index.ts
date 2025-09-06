import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    if (req.method === 'GET') {
      // List disputes
      const disputes = [
        { id: '1', status: 'active', description: 'Sample dispute 1' },
        { id: '2', status: 'resolved', description: 'Sample dispute 2' }
      ];
      res.status(200).json(disputes);
    } else if (req.method === 'POST') {
      // Create dispute
      const { description } = req.body;
      
      if (!description) {
        return res.status(400).json({ error: 'Description is required' });
      }

      const dispute = {
        id: Date.now().toString(),
        status: 'active',
        description,
        createdAt: new Date().toISOString()
      };

      res.status(201).json(dispute);
    }
  } catch (error) {
    console.error('Disputes error:', error);
    res.status(500).json({ error: 'Failed to process disputes' });
  }
}