import type { NextApiRequest, NextApiResponse } from 'next';

  res.status(200).json({ ok: true });export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  clearSessionCookie(res);

  res.status(200).json({ ok: true })

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  clearSessionCookie(res);

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
