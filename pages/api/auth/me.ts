import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // TODO: Implement me logic
    res.status(200).json({ message: 'me endpoint' });
  } catch (error) {
    console.error('Error in me:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}