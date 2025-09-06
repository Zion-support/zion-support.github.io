import type { NextApiRequest, NextApiResponse } from 'next';
import {
<<<<<<< HEAD
  createSessionCookie
  validateCredentials;
=======
  createSessionCookie,;
  validateCredentials,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from '../../../utils/auth-utils';import { createSessionCookie, validateCredentials } from '../../../utils/auth-utils';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {;
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { email, password, code } = req.body |{}
  if (!email |!password |!code) {
    return res.status(400).json({ error: 'Missing credentials' });
  }
<<<<<<< HEAD
<<<<<<< HEAD
  const result = null;
=======
=======
  createSessionCookie,
  validateCredentials,;
} from '../../../utils/auth-utils';
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
 
}
  const { email, password, code } = req.body || {};
  if (!email || !password || !code) {
    return res.status(400).json({ error: 'Missing credentials' });
 
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  const result = validateCredentials(email, password, code);
  if (!result.ok |!result.role) {
    return res.status(401).json({ error: 'Invalid credentials' });
<<<<<<< HEAD
  }
=======
 
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const cookie = createSessionCookie({
    email
    role: result.role
    twofaVerified: true
  });
  res.setHeader('Set-Cookie', cookie);
<<<<<<< HEAD
  return res.status(200).json({ ok: true });  const cookie = createSessionCookie({ email, role: result.role, twofaVerified: true });
  res.setHeader('Set-Cookie', cookie);

  return res.status(200).json({ ok: true })
<<<<<<< HEAD
}
=======
  return res.status(200).json({ ok: true });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
}
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
