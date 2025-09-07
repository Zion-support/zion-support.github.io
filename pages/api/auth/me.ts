import type { NextApiRequest, NextApiResponse } from 'next';
import { getUserFromRequest } from '../../../utils/auth';

<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = getUserFromRequest(req);
  if (!user) return res.status(200).json({ user: null });

  res.status(200).json({ user });
}
=======
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
