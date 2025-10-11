import type { NextApiRequest, NextApiResponse  } from 'next'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = clearSessionCookie()
  res.setHeader('Set-Cookie', cookie)
  res.status(200).json({ ok: true });export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = clearSessionCookie()
  res.setHeader('Set-Cookie', cookie)
}
  res.status(200).json({ ok: true })
}
<<<<<<< HEAD
import {  clearSessionCookie   } from '../../../utils/auth-utils'
=======
import { clearSessionCookie } from '../../../utils/auth-utils'
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = clearSessionCookie()
  res.setHeader('Set-Cookie', cookie)
  res.status(200).json({ ok: true })
}
