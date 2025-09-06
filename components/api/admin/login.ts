import type { NextApiRequest, NextApiResponse } from 'next';
import { setSessionCookie } from '../../../utils/adminAuth';
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  const { username, password } = req.body || {};
  const envUser = process.env.ADMIN_USERNAME || 'kleber@ziontechgroup.com';
  const envPass = process.env.ADMIN_PASSWORD || 'Tw2.R5u&2!sDfeW';

  if (username === envUser && password === envPass) {
    setSessionCookie(res, { username, issuedAt: Date.now() });
<<<<<<< HEAD
    res.status(200).json({ ok: true });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
=======
    res.status(200).json({ ok: true })
  } else {
    res.status(401).json({ error: 'Invalid credentials' })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
