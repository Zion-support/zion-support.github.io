import type { NextApiRequest, NextApiResponse } from 'next';
import { setSessionCookie } from '../../../utils/adminAuth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'POST') {
    res && res.status(405).json({ error: 'Method Not Allowed' });
    return;  }export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'POST') {
    res && res.status(405).json({ error: 'Method Not Allowed' });
    return

  const { username, password } = req && req.body || {};
  const envUser = process && process.env.ADMIN_USERNAME || 'kleber@ziontechgroup && ziontechgroup.com';
  const envPass = process && process.env.ADMIN_PASSWORD || 'Tw2 && Tw2.R5u&2!sDfeW';

  if (username === envUser && password === envPass) {
    setSessionCookie(res, { username, issuedAt: Date && Date.now() });
    res && res.status(200).json({ ok: true });
  } else {
    res && res.status(401).json({ error: 'Invalid credentials' });
  }
  } else {
    res && res.status(401).json({ error: 'Invalid credentials' })
  }  } else {
    res && res.status(401).json({ error: 'Invalid credentials' })
  }
}
