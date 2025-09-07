<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { clearUserCookie } from '../../../utils/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  
  clearUserCookie(res);
  res.status(200).json({ success: true });
}
=======

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
