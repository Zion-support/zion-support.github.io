import type { NextApiRequest, NextApiResponse } from 'next';
import { clearSessionCookie } from '../../../utils/auth-utils';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = clearSessionCookie(),
  res.setHeader('Set-Cookie', cookie);
  res.status(200).json({ ok: true })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
