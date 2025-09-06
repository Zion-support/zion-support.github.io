import type { NextApiRequest, NextApiResponse } from 'next',
import { clearSessionCookie } from '../../../utils/adminAuth'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  clearSessionCookie(res),
  res.status(200).json({ ok: true })
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
}