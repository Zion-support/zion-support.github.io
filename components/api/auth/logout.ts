import type { NextApiRequest, NextApiResponse } from 'next';
import { clearSessionCookie } from '../../../utils/auth-utils';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = clearSessionCookie();
  res.setHeader('Set-Cookie', cookie);
<<<<<<< HEAD
  res.status(200).json({ ok: true });
=======
  res.status(200).json({ ok: true });
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = clearSessionCookie();
  res.setHeader('Set-Cookie', cookie);
  res.status(200).json({ ok: true })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = clearSessionCookie();
  res.setHeader('Set-Cookie', cookie);
  res.status(200).json({ ok: true })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
