import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      res.status(200).json({ message: 'Changelog endpoint' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
    return;
  }
  
  res.setHeader('Allow', ['GET']);
  res.status(405).end('Method Not Allowed');
}