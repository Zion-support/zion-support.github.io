import type { NextApiRequest, NextApiResponse } from 'next';
import { clearSessionCookie } from '../../../utils/adminAuth';
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  clearSessionCookie(res);
  res.status(200).json({ ok: true })
}
=======
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  clearSessionCookie(res);
  res.status(200).json({ ok: true });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
