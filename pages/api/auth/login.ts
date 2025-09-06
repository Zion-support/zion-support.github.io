import type { NextApiRequest, NextApiResponse } from 'next';
import {
  generateUser,
  setUserCookie,
  upsertUser,
} from '../../../utils/auth';
import { UserRole } from '../../../utils/messaging/types';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ error: 'Missing email or password' });
  }

  try {
    const user = generateUser(email, UserRole.USER);
    setUserCookie(res, user);
    return res.status(200).json({ user });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || 'Login failed' });
  }
}