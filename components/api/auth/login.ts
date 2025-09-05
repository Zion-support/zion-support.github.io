<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { createSessionCookie, validateCredentials } from '../../../utils/auth-utils',;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  if (req.method !== 'POST') {;
    return res.status(405).json({ error:'Method not allowed' }),;
  }
  const { email, password, code } = req.body || {},;
  if (!email || !password || !code) {;
    return res.status(400).json({ error:'Missing credentials' }),;
  }
  const result = validateCredentials(email, password, code),;
  if (!result.ok || !result.role) {;
    return res.status(401).json({ error:'Invalid credentials' }),;
  }
  const cookie = createSessionCookie({ email, role:result.role, twofaVerified:true }),;
  res.setHeader('Set-Cookie', cookie),;
  return res.status(200).json({ ok:true }),;
}
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import { createSessionCookie, validateCredentials } from '../../../utils/auth-utils',

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const { email, password, code } = req.body || {},
  if (!email || !password || !code) {
    return res.status(400).json({ error: 'Missing credentials' })
  }
  const result = validateCredentials(email, password, code),
  if (!result.ok || !result.role) {
    return res.status(401).json({ error: 'Invalid credentials' })
  }
  const cookie = createSessionCookie({ email, role: result.role, twofaVerified: true }),
  res.setHeader('Set-Cookie', cookie),
  return res.status(200).json({ ok: true })}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
