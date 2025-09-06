import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
import { clearSessionCookie } from '../../../utils/auth-utils';

  res.status(200).json({ ok: true })

=======


export default function handler(req: NextApiRequest, res: NextApiResponse) {



export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const cookie = clearSessionCookie();
  res.setHeader('Set-Cookie', cookie);
  res.status(200).json({ ok: true });export default function handler(req: NextApiRequest, res: NextApiResponse) {;
=======
const cookie = clearSessionCookie();
  res && res.setHeader('Set-Cookie', cookie);
  res && res.status(200).json({ ok: true });export default function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const cookie = clearSessionCookie();
  res.setHeader('Set-Cookie', cookie);

  res.status(200).json({ ok: true })


}
<<<<<<< HEAD

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const cookie = clearSessionCookie();
  res.setHeader('Set-Cookie', cookie);
  res.status(200).json({ ok: true })
}
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { clearSessionCookie } from '../../../utils / auth - utils';
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import { clearSessionCookie } from '../../../utils/auth-utils';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = null;

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const cookie = clearSessionCookie();
  res.setHeader('Set-Cookie', cookie);
  res.status(200).json({ ok: true });export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const cookie = clearSessionCookie();
  res.setHeader('Set-Cookie', cookie);
  res.status(200).json({ ok: true })
}
}

}
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
