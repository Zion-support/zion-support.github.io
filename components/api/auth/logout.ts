<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { clearSessionCookie } from '../../../utils/auth-utils',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = clearSessionCookie(),
  res.setHeader('Set-Cookie', cookie),
  res.status(200).json({ ok: true })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _cookie = clearSessionCookie();
  res.setHeader('Set-Cookie', _cookie);
  res.status(200).json({ ok: true});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}