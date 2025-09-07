import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { since } = req.query;
    const sinceTs = since ? parseInt(since as string) : 0;

    // Placeholder for jobs posted Zapier integration logic
    const events = [];
    res.status(200).json({ success: true, events });
  } catch (error) {
    console.error('Jobs posted Zapier error:', error);
    res.status(500).json({ error: 'Failed to fetch jobs posted events' });
  }
}