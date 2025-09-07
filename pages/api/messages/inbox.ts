import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Placeholder for inbox logic
    const conversations = [];
    res.status(200).json({ success: true, conversations });
  } catch (error) {
    console.error('Inbox error:', error);
    res.status(500).json({ error: 'Failed to fetch inbox' });
  }
}