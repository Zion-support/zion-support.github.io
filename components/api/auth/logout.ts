import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const cookie = clearSessionCookie();
  res.setHeader('Set-Cookie', cookie);
  res.status(200).json({ ok: true });export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const cookie = clearSessionCookie();
  res.setHeader('Set-Cookie', cookie);
  res.status(200).json({ ok: true })

  const cookie = clearSessionCookie();
  res.setHeader('Set-Cookie', cookie);
  res.status(200).json({ ok: true })
}

import { clearSessionCookie } from '../../../utils / auth - utils';
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
