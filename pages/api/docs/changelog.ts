import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const changelog = {
        version: '1.0.0',
        changes: [
          'Initial release',
          'Added dispute management',
          'Added DID functionality'
        ],
        date: new Date().toISOString()
      };
      
      res.status(200).json(changelog);
    } catch (error) {
      console.error('Changelog error:', error);
      res.status(500).json({ error: 'Failed to get changelog' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end('Method Not Allowed');
  }
}