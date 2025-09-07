import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end('Method Not Allowed');
  }
  
  try {
    res.status(200).json({ changelog: [] });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}