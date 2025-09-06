import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  clearSessionCookie(res);

<<<<<<< HEAD
<<<<<<< HEAD
  res.status(200).json({ ok: true })

=======
  res.status(200).json({ ok: true });export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  clearSessionCookie(res);

  res.status(200).json({ ok: true })


=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  clearSessionCookie(res);


=======
=======
  res && res.status(200).json({ ok: true });export default function handler(req: NextApiRequest, res: NextApiResponse) {
  clearSessionCookie(res);
  res && res.status(200).json({ ok: true })
}
  res.status(200).json({ ok: true })
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import { clearSessionCookie } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  clearSessionCookie(res);
<<<<<<< HEAD
=======
  res.status(200).json({ ok: true });export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  clearSessionCookie(res);
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  res.status(200).json({ ok: true })
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD

}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
