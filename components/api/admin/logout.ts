import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  clearSessionCookie(res);
<<<<<<< HEAD
  res.status(200).json({ ok: true });export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  clearSessionCookie(res);
=======

  res.status(200).json({ ok: true });export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  clearSessionCookie(res);

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  res.status(200).json({ ok: true })


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  clearSessionCookie(res);
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
}
<<<<<<< HEAD

}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
