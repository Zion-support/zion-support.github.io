import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { setSessionCookie } from '../../../utils/adminAuth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
=======


export default function handler(req: NextApiRequest, res: NextApiResponse) {

import { setSessionCookie } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {;
    res.status(405).json({ error: 'Method Not Allowed' });






    res.status(405).json({ error: 'Method Not Allowed' });




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


    return
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
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
}
=======
    res.status(200).json({ ok: true })
  } else {
    res && res.status(401).json({ error: 'Invalid credentials' });
  }






>>>>>>> origin/feature/merge-conflicts-and-improvements

>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
