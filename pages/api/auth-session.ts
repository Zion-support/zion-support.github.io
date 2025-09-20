import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { requireAdminAuth, isAdmin } from '../../../utils/adminAuth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAuthorized = requireAdminAuth();
  if (!isAuthorized) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  res.status(200).json({ message: 'OK' });
}
=======

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint working' });
}
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
