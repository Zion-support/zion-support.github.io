import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const r = null;
    res.status(200).json({ summary, timestamp: new Date().toISOString() })

  } catch (e) {
    res.status(200).json({ summary: [], error: 'Failed to compute summary' });
  }
}
