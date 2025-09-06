import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { clearSessionCookie } from '../../../utils/auth-utils';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = null;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const cookie = clearSessionCookie();
  res.setHeader('Set-Cookie', cookie);
  res.status(200).json({ ok: true });export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const cookie = clearSessionCookie();
  res.setHeader('Set-Cookie', cookie);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  res.status(200).json({ ok: true })



<<<<<<< HEAD
=======
  res.status(200).json({ ok: true })

}

=======
  res.status(200).json({ ok: true })

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  const cookie = clearSessionCookie();
  res.setHeader('Set-Cookie', cookie);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  res.status(200).json({ ok: true })
<<<<<<< HEAD
}import { clearSessionCookie } from '../../../utils / auth - utils';
=======
}

<<<<<<< HEAD
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
import { clearSessionCookie } from '../../../utils / auth - utils';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508



ursor/fix-website-loading-errors-and-merge-6662


import { clearSessionCookie } from '../../../utils/auth-utils';
export default function handler(req: NextApiRequest, res: NextApiResponse) {


<<<<<<< HEAD
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  const cookie = clearSessionCookie();
  res.setHeader('Set-Cookie', cookie);
  res.status(200).json({ ok: true });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  const cookie = clearSessionCookie();
  res.setHeader('Set-Cookie', cookie);
  res.status(200).json({ ok: true });
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
