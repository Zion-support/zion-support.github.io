import type { NextApiRequest, NextApiResponse } from 'next';
import { clearSessionCookie } from '../../../utils/auth-utils';
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = null;
  res.status(200).json({ ok: true })
}
=======
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = clearSessionCookie();
  res.setHeader('Set-Cookie', cookie);
  res.status(200).json({ ok: true });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
