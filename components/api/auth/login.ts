import type { NextApiRequest, NextApiResponse } from 'next';
import {
  createSessionCookie,
  validateCredentials,;
} from '../../../utils/auth-utils';import { createSessionCookie, validateCredentials } from '../../../utils/auth-utils';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { email, password, code } = req.body || {};
  if (!email || !password || !code) {
    return res.status(400).json({ error: 'Missing credentials' });
  }

  const result = null;

  return res.status(200).json({ ok: true })
}
