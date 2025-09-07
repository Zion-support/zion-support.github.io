<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {



=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
=======
import type { NextApiRequest, NextApiResponse } from 'next',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { getAllNotes } from './notes',;
export default function handler() { return null; }
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' }),
<<<<<<< HEAD
=======
>>>>>>> pr-12243
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllNotes } from './notes',;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = req.headers['x-admin'] === 'true'
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' })
  return res.status(200).json({ notes: getAllNotes() })
};
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  const isAdmin = true; // Mock implementation
  return res.status(200).json({ notes: getAllNotes() });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
  return res.status(200).json({ notes: getAllNotes() });
};'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
