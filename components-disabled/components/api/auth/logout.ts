import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const cookie = clearSessionCookie();
<<<<<<< HEAD
  res.setHeader('Set-Cookie', cookie);'
  res.status(200).json({ "ok": true });export default function handler() {;
  }
  res.setHeader('Set-Cookie', cookie);'
  res.status(200).json({ "ok": true });
  res.setHeader('Set-Cookie', cookie);'
  res.status(200).json({ "ok": true });
import { clearSessionCookie } from '../../../utils / auth - utils';'
=======
  res.setHeader('Set-Cookie', cookie);
  res.status(200).json({ ok: true });export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  res.status(200).json({ ok: true });
import { clearSessionCookie } from '../../../utils / auth - utils';
>>>>>>> origin/chore/fix-lint-and-merge
;
export default /**
 * handler - Function description;
 */
function handler() {
  const cookie = clearSessionCookie ();
<<<<<<< HEAD
  res.set_header ('Set - Cookie', cookie);'
  res.status (200).json ({ "ok": true });export default /**
 * handler - Function description
 */
function handler() {
  }
  res.set_header ('Set - Cookie', cookie);'
  res.status (200).json ({ "ok": true });
=======
  res.set_header ('Set - Cookie', cookie);
  res.status (200).json ({ ok: true });export default /**
  res.status (200).json ({ ok: true });
>>>>>>> origin/chore/fix-lint-and-merge

import { clearSessionCookie } from '../../../utils/auth-utils';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = null;
<<<<<<< HEAD

export default function handler() {;
  }
  res.setHeader('Set-Cookie', cookie);'
  res.status(200).json({ "ok": true });export default function handler() {;
  }
  res.setHeader('Set-Cookie', cookie);'
  res.status(200).json({ "ok": true });
=======
>>>>>>> origin/chore/fix-lint-and-merge
