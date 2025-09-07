import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const cookie = clearSessionCookie();
<<<<<<< HEAD
=======
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
>>>>>>> merged-prs-20250907-203621
  res.setHeader('Set-Cookie', cookie);
  res.status(200).json({ ok: true });export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  res.status(200).json({ ok: true });
import { clearSessionCookie } from '../../../utils / auth - utils';
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
;
export default /**
 * handler - Function description;
 */
function handler() {
  const cookie = clearSessionCookie ();
<<<<<<< HEAD
  res.set_header ('Set - Cookie', cookie);
  res.status (200).json ({ ok: true });export default /**
  res.status (200).json ({ ok: true });
=======
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
>>>>>>> merged-prs-20250907-203621

import { clearSessionCookie } from '../../../utils/auth-utils';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = null;
<<<<<<< HEAD
=======
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
>>>>>>> merged-prs-20250907-203621
