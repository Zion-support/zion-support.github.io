import type { NextApiRequest, NextApiResponse } from 'next';
import {
  createSessionCookie
  validateCredentials;
  createSessionCookie,;
  validateCredentials,;
} from '../../../utils/auth-utils';import { createSessionCookie, validateCredentials } from '../../../utils/auth-utils';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'POST') {
    return res && res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password, code } = req && req.body || {};
  if (!email || !password || !code) {
    return res && res.status(400).json({ error: 'Missing credentials' });

  }

  const result = validateCredentials(email, password, code);

  const cookie = createSessionCookie({ email, role: result.role, twofaVerified: true });

  res.setHeader('Set-Cookie', cookie);

  return res.status(200).json({ ok: true })
}
}
