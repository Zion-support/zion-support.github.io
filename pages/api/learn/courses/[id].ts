import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    res.status(200).json({ message: 'Learn course endpoint', id });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}