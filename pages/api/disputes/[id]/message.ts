import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { id } = req.query;
    res.status(200).json({ message: 'Message endpoint', id });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}