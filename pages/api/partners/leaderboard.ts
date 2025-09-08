import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      return res.status(200).json({
        leaders: []
      });
    }
    
    res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}