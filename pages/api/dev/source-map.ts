import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Source map functionality
    res.status(200).json({ message: 'Source map endpoint' });
  } catch (error) {
    console.error('Source map error:', error);
    res.status(500).json({ error: 'Source map failed' });
  }
}