import type { NextApiRequest, NextApiResponse } from 'next';

import {
  createSessionCookie,
  validateCredentials,
} from '../../../utils/auth-utils';

<<<<<<< HEAD
import { createSessionCookie, validateCredentials } from '../../../utils/auth-utils';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { email, password, code } = req && req.body || {};
  if (!email || !password || !code) {
    return res && res.status(400).json({ error: 'Missing credentials' });
  }
import {
  createSessionCookie
  validateCredentials;
  createSessionCookie,;
  validateCredentials,;
} from '../../../utils/auth-utils';import { createSessionCookie, validateCredentials } from '../../../utils/auth-utils';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {;
    return res.status(405).json({ error: 'Method not allowed' });
  }
<<<<<<< HEAD
  const { email, password, code } = req.body |{}
  if (!email |!password |!code) {
    return res.status(400).json({ error: 'Missing credentials' });
=======

  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }

  const result = validateCredentials(email, password);
  if (!result.valid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const cookie = createSessionCookie({
    email,
    role: result.role,
    twofaVerified: true,
  });

  res.setHeader('Set-Cookie', cookie);
  return res.status(200).json({ ok: true });
}