import type { NextApiRequest, NextApiResponse } from 'next';
import {
  createSessionCookie,
  validateCredentials,;
} from '../../../utils/auth-utils';
origin/cursor/automate-test-improve-and-merge-code-2533
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'POST') {
    return res && res.status(405).json({ error: 'Method not allowed' });
  }
  }
const cookie = createSessionCookie({
    email,
    role: result.role,
    twofaVerified: true,
  });
  res.setHeader('Set-Cookie', cookie);
  return res.status(200).json({ ok: true });
  return res.status(200).json({ ok: true })
}
origin/cursor/automate-test-improve-and-merge-code-2533
