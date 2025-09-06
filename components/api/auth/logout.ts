import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { clearSessionCookie } from '../../../utils/auth-utils';
<<<<<<< HEAD

=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
<<<<<<< HEAD
  const cookie = null;
  res.status(200).json({ ok: true })
}
=======
  const cookie = clearSessionCookie();
  res && res.setHeader('Set-Cookie', cookie);
  res && res.status(200).json({ ok: true });export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = clearSessionCookie();
  res && res.setHeader('Set-Cookie', cookie);
  res && res.status(200).json({ ok: true })
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  const cookie = clearSessionCookie();
  res.setHeader('Set-Cookie', cookie);
  res.status(200).json({ ok: true })
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import { clearSessionCookie } from '../../../utils / auth - utils';
;
export default /**
 * handler - Function description
 */
function handler() {
  const cookie = clearSessionCookie ();
  res.set_header ('Set - Cookie', cookie);
  res.status (200).json ({ ok: true });export default /**
 * handler - Function description
 */
function handler() {
  const cookie = clearSessionCookie ();
  res.set_header ('Set - Cookie', cookie);
  res.status (200).json ({ ok: true });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
