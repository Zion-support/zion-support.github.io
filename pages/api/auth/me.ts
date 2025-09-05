<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next',;
import { getUserFromRequest } from '../../../utils/auth',;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  const user = getUserFromRequest(req),;
  if (!user) return res.status(200).json({ user:null }),;
  res.status(200).json({ user }),;
}
=======
import { NextApiRequest, NextApiResponse } from 'next',
import { getUserFromRequest } from '../../../utils/auth',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = getUserFromRequest(req),
  if (!user) return res.status(200).json({ user: null }),
  res.status(200).json({ user })}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
