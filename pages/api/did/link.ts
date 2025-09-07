import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // TODO: Implement link logic
    res.status(200).json({ message: 'link endpoint' });
  } catch (error) {
    console.error('Error in link:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}