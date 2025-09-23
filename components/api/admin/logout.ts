import type { NextApiRequest, NextApiResponse } from 'next';
import { clearSessionCookie } from '../../../utils/adminAuth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  clearSessionCookie(res);
  res.status(200).json({ ok: true });
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  clearSessionCookie(res);







>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
