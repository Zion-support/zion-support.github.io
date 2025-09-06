import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { userId, file } = req.body;
    
    if (!userId || !file) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }
    
    // File upload logic would go here
    res.status(200).json({ message: 'File uploaded' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}