import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const cookie = clearSessionCookie();
  res.setHeader('Set-Cookie', cookie);
  res.status(200).json({ ok: true });export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const cookie = clearSessionCookie();
  res.setHeader('Set-Cookie', cookie);
=======

export default function handler() { return null; }
  res.status(200).json({ ok: true });export default function handler() { return null; }
  res.status(200).json({ ok: true })
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD

<<<<<<< HEAD
pr-12243
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

}




}


pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const cookie = clearSessionCookie();
=======
  const cookie = clearSessionCookie();'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  res.setHeader('Set-Cookie', cookie);
  res.status(200).json({ ok: true })
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
pr-12243
=======

'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { clearSessionCookie } from '../../../utils / auth - utils';
;
export default /**;
 * handler - Function description;
 */
function handler() {}
  const cookie = clearSessionCookie ();'
  res.set_header ('Set - Cookie', cookie);
  res.status (200).json ({ ok: true });export default /**;
 * handler - Function description;
 */
function handler() {}
  const cookie = clearSessionCookie ();'
  res.set_header ('Set - Cookie', cookie);
  res.status (200).json ({ ok: true });
}
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-20a4
pr-12243
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
pr-12243
import { clearSessionCookie } from '../../../utils / auth - utils';
export default function handler() {const cookie = clearSessionCookie()res.setHeader('Set-Cookie', cookie)res.status(200).json({ ok: true,}
})