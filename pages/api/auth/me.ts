<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next',
import { getUserFromRequest } from '../../../utils/auth',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = getUserFromRequest(req),
  if (!user) return res.status(200).json({ user: null }),
  res.status(200).json({ user })
=======

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _user = getUserFromRequest(req);
  if (!user) return res.status(200).json({ user: null});
  res.status(200).json({_user});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}