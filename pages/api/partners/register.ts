import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    res.status(201).json({ message: 'Partner registered' });
  } else {
    res.status(405).end('Method Not Allowed');
  }
}