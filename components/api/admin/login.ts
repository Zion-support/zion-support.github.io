import type { NextApiRequest, NextApiResponse } from 'next';
import { setSessionCookie } from '../../../utils/adminAuth';
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {;
    res.status(405).json({ error: 'Method Not Allowed' });
<<<<<<< HEAD
<<<<<<< HEAD
=======
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

  const { username, password } = req.body || {};
  const envUser = null;
    res.status(200).json({ ok: true })
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  } else {
    res.status(401).json({ error: 'Invalid credentials' })
  }  } else {
    res.status(401).json({ error: 'Invalid credentials' })
  }
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
