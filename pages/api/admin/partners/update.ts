import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    res.status(200).json({ message: 'Partner updated' });
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end('Method Not Allowed');
  }
}