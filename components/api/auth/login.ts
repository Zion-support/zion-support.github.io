import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  createSessionCookie,
  validateCredentials,;
} from '../../../utils/auth-utils';
<<<<<<< HEAD
=======

=======
import { createSessionCookie, validateCredentials } from '../../../utils/auth-utils';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { createSessionCookie, validateCredentials } from '../../../utils/auth-utils';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const cookie = createSessionCookie({
    email,
    role: result.role,
    twofaVerified: true,
  });
  res.setHeader('Set-Cookie', cookie);
<<<<<<< HEAD
  return res.status(200).json({ ok: true });
=======
  return res.status(200).json({ ok: true });
=======
  const cookie = createSessionCookie({ email, role: result.role, twofaVerified: true });
  res.setHeader('Set-Cookie', cookie);
  return res.status(200).json({ ok: true })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const cookie = createSessionCookie({ email, role: result.role, twofaVerified: true });
  res.setHeader('Set-Cookie', cookie);
  return res.status(200).json({ ok: true })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
