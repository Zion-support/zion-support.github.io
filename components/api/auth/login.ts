import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import {
  createSessionCookie,
  validateCredentials,;
} from '../../../utils/auth-utils';

=======
import { createSessionCookie, validateCredentials } from '../../../utils/auth-utils';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { email, password, code } = req.body || {};
  if (!email || !password || !code) {
    return res.status(400).json({ error: 'Missing credentials' });
  }
  const result = validateCredentials(email, password, code);
  if (!result.ok || !result.role) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
<<<<<<< HEAD
  const cookie = createSessionCookie({
    email,
    role: result.role,
    twofaVerified: true,
  });
  res.setHeader('Set-Cookie', cookie);
  return res.status(200).json({ ok: true });
=======
  const cookie = createSessionCookie({ email, role: result.role, twofaVerified: true });
  res.setHeader('Set-Cookie', cookie);
  return res.status(200).json({ ok: true })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
