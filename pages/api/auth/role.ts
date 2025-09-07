<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { getUserFromRequest } from '../../../utils/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
=======


;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a

  try {
    const user = getUserFromRequest(req);
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    res.status(200).json({ role: user.role });
  } catch (error) {
    console.error('Error getting user role:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}