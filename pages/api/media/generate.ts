import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json({ message: 'Media generate endpoint' });
  } catch (error) {
    // fall through to template
    res.status(500).json({ error: 'Internal server error' });
  }
}