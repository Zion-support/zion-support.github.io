import type { NextApiRequest, NextApiResponse } from 'next';
import { clearSessionCookie } from '../../../utils/auth-utils';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = clearSessionCookie($2);
  res.setHeader($2);
  res.status(200).json({ ok: true})
}