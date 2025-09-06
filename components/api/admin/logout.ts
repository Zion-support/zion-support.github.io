import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  clearSessionCookie(res);

  res.status(200).json({ ok: true });export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  clearSessionCookie(res);

  res.status(200).json({ ok: true })


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  clearSessionCookie(res);


<<<<<<< HEAD
=======
=======
  res && res.status(200).json({ ok: true });export default function handler(req: NextApiRequest, res: NextApiResponse) {
  clearSessionCookie(res);
  res && res.status(200).json({ ok: true })
}
  res.status(200).json({ ok: true })
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======


import { clearSessionCookie } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  clearSessionCookie(res);
  res.status(200).json({ ok: true });export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  clearSessionCookie(res);
  res.status(200).json({ ok: true })
}
}

}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
