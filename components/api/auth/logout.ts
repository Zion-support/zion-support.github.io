import type { NextApiRequest, NextApiResponse } from 'next';
import { clearSessionCookie } from '../../../utils/auth-utils';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = clearSessionCookie()
  res.setHeader('Set-Cookie', cookie),
  res.status(200).json({ ok: true })
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
}