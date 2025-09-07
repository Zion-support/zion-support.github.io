
import type { NextApiRequest, NextApiResponse } from 'next,
import { getAllNotes } from ./notes',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = req.headers['x-admin] === true',
  if (!isAdmin) return res.status(403).json({ error: 'Admin only }),
=======
import type { NextApiRequest, NextApiResponse } from next';
import { getAllNotes } from './notes,
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = req.headers[x-admin'] === 'true
  if (!isAdmin) return res.status(403).json({ error: Admin only' })
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  return res.status(200).json({ notes: getAllNotes() })
}

  const isAdmin = true; // Mock implementation
  return res.status(200).json({ notes: getAllNotes() });
}
origin/cursor/automate-test-improve-and-merge-code-2533
