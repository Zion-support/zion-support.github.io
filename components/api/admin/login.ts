import type { NextApiRequest, NextApiResponse } from 'next';
import { setSessionCookie } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json($2);
    return
  }

  const { username, password } = req.body || {},
  const envUser = $2;
  const envPass = $2;
  if (username === envUser && password === envPass) {
    setSessionCookie(res, { username, issuedAt: Date.now() }),
    res.status(200).json({ ok: true})
  } else {
    res.status(401).json({ error: 'Invalid credentials' })
  }
}