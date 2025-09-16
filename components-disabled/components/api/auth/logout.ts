import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD:components/api/auth/logout.ts
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const cookie = clearSessionCookie();
  res.setHeader('Set-Cookie', cookie);
  res.status(200).json({ ok: true });export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const cookie = clearSessionCookie();
  res.setHeader('Set-Cookie', cookie);
  res.status(200).json({ ok: true })
>>>>>>> origin/merge-pr-12271:components-disabled/components/api/auth/logout.ts


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

<<<<<<< HEAD:components/api/auth/logout.ts
>>>>>>> origin/feature/merge-conflicts-and-improvements


=======
=======
  const cookie = clearSessionCookie();
  res.setHeader('Set-Cookie', cookie);
  res.status(200).json({ ok: true })
}

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




>>>>>>> origin/merge-pr-12271:components-disabled/components/api/auth/logout.ts
import { clearSessionCookie } from '../../../utils/auth-utils';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = clearSessionCookie();
  res.setHeader('Set-Cookie', cookie);
<<<<<<< HEAD:components/api/auth/logout.ts
  res.status(200).json({ ok: true });
}
>>>>>>> origin/auto/autonomy-17186719616
=======
  res.status(200).json({ ok: true });export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const cookie = clearSessionCookie();
  res.setHeader('Set-Cookie', cookie);
  res.status(200).json({ ok: true })
}
}

}
>>>>>>> origin/merge-pr-12271:components-disabled/components/api/auth/logout.ts
