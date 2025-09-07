<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {
  createSessionCookie,
  validateCredentials,
} from '../../../utils/auth-utils';
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password } = req.body || {};
  
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }

  try {
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
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}