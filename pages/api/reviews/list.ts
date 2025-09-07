import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Placeholder for reviews list logic
    const reviews = [];
    res.status(200).json({ success: true, reviews });
  } catch (error) {
    console.error('Reviews list error:', error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
}