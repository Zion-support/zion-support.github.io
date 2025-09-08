import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    res.status(200).json({ message: 'Jobs endpoint' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}