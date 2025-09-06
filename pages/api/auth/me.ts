import { NextApiRequest, NextApiResponse } from 'next';
import { getUserFromRequest } from '../../../utils/auth';
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = getUserFromRequest(req);
  if (!user) return res.status(200).json({ user: null });
  res.status(200).json({ user });
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = getUserFromRequest(req);
  if (!user) return res.status($1).json({$2});
  res.status(200).json({ user })
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
}