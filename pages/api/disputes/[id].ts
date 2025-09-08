import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { id } = req.query;
    res.status(200).json({ message: 'Dispute endpoint', id });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}