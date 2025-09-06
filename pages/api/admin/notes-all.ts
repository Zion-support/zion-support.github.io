<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = req.headers['x-admin'] === 'true';
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' });
  return res.status(200).json({ notes: getAllNotes() });
}
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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import type { NextApiRequest, NextApiResponse } from 'next',;
import { getAllNotes } from './notes',;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = req.headers['x-admin'] === 'true',
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' }),
  return res.status(200).json({ notes: getAllNotes() });
};
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllNotes } from './notes';

export default function handler(req: NextApiRequest, res: NextApiResponse) {

=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD

  const isAdmin = req.headers['x-admin'] === 'true'
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' })
  return res.status(200).json({ notes: getAllNotes() })
}

  try {
    const isAdmin = req.headers['x-admin'] === 'true';
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });

    if (req.method === 'GET') {
      const notes = getAllNotes();
      res.json({ notes });
    } else {
      res.setHeader('Allow', 'GET');
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
