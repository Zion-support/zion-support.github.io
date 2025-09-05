<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { clearSessionCookie } from '../../../utils/auth-utils',;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  const cookie = clearSessionCookie(),;
  res.setHeader('Set-Cookie', cookie),;
  res.status(200).json({ ok:true }),;
}
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import { clearSessionCookie } from '../../../utils/auth-utils',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = clearSessionCookie(),
  res.setHeader('Set-Cookie', cookie),
  res.status(200).json({ ok: true })}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
