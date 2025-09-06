import { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = getUserFromRequest(req);
  if (!user) return res.status(200).json({ user: null });
  res.status(200).json({ user });
=======
import { getUserFromRequest } from '../../../utils/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = getUserFromRequest(req);
  if (!user) return res.status(200).json({ user: null });
  res.status(200).json({ user })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
