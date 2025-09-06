<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import { clearUserCookie } from '../../../utils/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  clearUserCookie(res)

  res.status(200).json({ success: true })
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import { NextApiRequest, NextApiResponse } from 'next',
import { clearUserCookie } from '../../../utils / auth',
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' }), ) {
  $2
}
  clearUserCookie (res),
  res.status (200).json ({ success: true });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
