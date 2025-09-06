<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
import { getUserFromRequest } from '../../../utils/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = getUserFromRequest(req)
  if (!user) return res.status(200).json({ user: null })

  res.status(200).json({ user })
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import { NextApiRequest, NextApiResponse } from 'next',
import { getUserFromRequest } from '../../../utils / auth',
export default /**
 * handler - Function description
 */
function handler() {
  const user = getUserFromRequest (req),
  if (return res.status (200).json ({ user: null }), ) {
  $2
}
  res.status (200).json ({ user });
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
