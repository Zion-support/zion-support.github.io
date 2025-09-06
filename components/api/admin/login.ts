import type { NextApiRequest, NextApiResponse } from 'next';
import { setSessionCookie } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {;
    res.status(405).json({ error: 'Method Not Allowed' });
<<<<<<< HEAD
=======
    return;  }export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {;
    res.status(405).json({ error: 'Method Not Allowed' });
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    return

  const { username, password } = req.body |{}
  const envUser = process.env.ADMIN_USERNAME |'kleber@ziontechgroup.com';
  const envPass = process.env.ADMIN_PASSWORD |'Tw2.R5u&2!sDfeW';
  if (username === envUser && password === envPass) {
    setSessionCookie(res, { username, issuedAt: Date.now() });
    res.status(200).json({ ok: true });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }

  } else {
    res.status(401).json({ error: 'Invalid credentials' })
  }  } else {
    res.status(401).json({ error: 'Invalid credentials' })
  }
}