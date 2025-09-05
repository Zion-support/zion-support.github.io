<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { setSessionCookie } from '../../../utils/adminAuth',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' }),
    return
  }

  const { username, password } = req.body || {},
  const envUser = process.env.ADMIN_USERNAME || 'kleber@ziontechgroup.com',
  const envPass = process.env.ADMIN_PASSWORD || 'Tw2.R5u&2!sDfeW',

  if (username === envUser && password === envPass) {
    setSessionCookie(res, { username, issuedAt: Date.now() }),
    res.status(200).json({ ok: true })
  } else {
    res.status(401).json({ error: 'Invalid credentials' })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed'});
    return;
  }

  const {_username, _password} = req.body || {};
  const _envUser = process.env.ADMIN_USERNAME || 'kleber@ziontechgroup.com';
  const _envPass = process.env.ADMIN_PASSWORD || 'Tw2.R5u&2!sDfeW';

  if (username === envUser && password === envPass) {_setSessionCookie(res, _{ username, _issuedAt: Date.now()});
    res.status(200).json({_ok: true});
  } else {_res.status(401).json({ error: 'Invalid credentials'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}