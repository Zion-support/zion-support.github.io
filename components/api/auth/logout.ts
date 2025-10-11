import type { NextApiRequest, NextApiResponse } from 'next'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = clearSessionCookie()
  res.setHeader('Set-Cookie', cookie)
  res.status(200).json({ ok: true });export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = clearSessionCookie()
  res.setHeader('Set-Cookie', cookie)
}
  res.status(200).json({ ok: true })
}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { clearSessionCookie } from '../../../utils/auth-utils'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = clearSessionCookie()
  res.setHeader('Set-Cookie', cookie)
  res.status(200).json({ ok: true })
}
