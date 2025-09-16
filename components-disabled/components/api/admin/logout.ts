import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


<<<<<<< HEAD:components/api/admin/logout.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  clearSessionCookie(res);

=======
  res.status(200).json({ ok: true })


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  clearSessionCookie(res);

  res.status(200).json({ ok: true })
}

  res.status(200).json({ ok: true })
}
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
>>>>>>> origin/merge-pr-12271:components-disabled/components/api/admin/logout.ts






>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



=======
import { clearSessionCookie } from '../../../utils/adminAuth';
<<<<<<< HEAD:components/api/admin/logout.ts
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  clearSessionCookie(res);
  res.status(200).json({ ok: true });export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  clearSessionCookie(res);
  res.status(200).json({ ok: true })
}
}
>>>>>>> origin/merge-pr-12271:components-disabled/components/api/admin/logout.ts

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  clearSessionCookie(res);
  res.status(200).json({ ok: true });
}
<<<<<<< HEAD:components/api/admin/logout.ts
>>>>>>> origin/auto/autonomy-17186719616
=======
>>>>>>> origin/merge-pr-12271:components-disabled/components/api/admin/logout.ts
