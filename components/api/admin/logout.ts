<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { clearSessionCookie } from '../../../utils/adminAuth',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  clearSessionCookie(res),
  res.status(200).json({ ok: true })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_clearSessionCookie(res);
  res.status(200).json({ ok: true});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}