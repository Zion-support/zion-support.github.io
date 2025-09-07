import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // TODO: Implement postman logic
    res.status(200).json({ message: 'postman endpoint' });
  } catch (error) {
    console.error('Error in postman:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}