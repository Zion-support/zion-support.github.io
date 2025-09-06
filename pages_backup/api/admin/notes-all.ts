<<<<<<< HEAD:pages_backup/api/admin/notes-all.ts
<<<<<<< HEAD
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {



=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/admin/notes-all.ts
import type { NextApiRequest, NextApiResponse } from 'next',;
import { getAllNotes } from './notes',;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = req.headers['x-admin'] === 'true',
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' }),
  return res.status(200).json({ notes: getAllNotes() })
};
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  const isAdmin = true; // Mock implementation
  return res.status(200).json({ notes: getAllNotes() });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
