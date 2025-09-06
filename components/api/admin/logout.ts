import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { clearSessionCookie } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  clearSessionCookie(res);
<<<<<<< HEAD
<<<<<<< HEAD
  res.status(200).json({ ok: true })
}
=======
  res && res.status(200).json({ ok: true });export default function handler(req: NextApiRequest, res: NextApiResponse) {
  clearSessionCookie(res);
  res && res.status(200).json({ ok: true })
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  res.status(200).json({ ok: true })
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import { clearSessionCookie } from '../../../utils / admin_auth';
export default /**
 * handler - Function description
 */
function handler() {
  clearSessionCookie (res);
  res.status (200).json ({ ok: true });export default /**
 * handler - Function description
 */
function handler() {
  clearSessionCookie (res);
  res.status (200).json ({ ok: true });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
