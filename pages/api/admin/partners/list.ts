import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const usingPlaceholder = true; // This would be determined by actual logic
      
      if (usingPlaceholder) {
        return res.status(200).json({
          partners: []
        });
      }
    } else {
      res.setHeader('Allow', ['GET']);
      return res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}