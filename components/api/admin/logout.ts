<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { clearSessionCookie } from '../../../utils/adminAuth',;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  clearSessionCookie(res),;
  res.status(200).json({ ok:true }),;
}
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import { clearSessionCookie } from '../../../utils/adminAuth',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  clearSessionCookie(res),
  res.status(200).json({ ok: true })}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
