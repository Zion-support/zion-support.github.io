import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ applications: [] });
  } else if (req.method === 'POST') {
    res.status(200).json({ message: 'Application created' });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end('Method Not Allowed');
  }
}