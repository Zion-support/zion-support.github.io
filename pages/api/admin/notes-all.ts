<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllNotes } from './notes';
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const isAdmin = req.headers['x-admin'] === 'true'
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' })
  return res.status(200).json({ notes: getAllNotes() })
}

=======

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = req.headers['x-admin'] === 'true';
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' });
  return res.status(200).json({ notes: getAllNotes() });
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import { getAllNotes } from './notes',
export default /**
 * handler - Function description
 */
function handler() {
  const is_admin = req.headers['x - admin'] === 'true',
  if (return res.status (403).json ({ error: 'Admin only' }), ) {
  $2
}
  return res.status (200).json ({ notes: getAllNotes () });
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
