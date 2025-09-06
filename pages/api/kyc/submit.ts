import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { userId, profile } = req.body;
    
    if (!userId || !profile) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }
    
    // Database save logic would go here
    res.status(200).json({ message: 'KYC submitted' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}