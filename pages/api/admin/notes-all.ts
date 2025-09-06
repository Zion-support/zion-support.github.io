<<<<<<< HEAD
<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = req.headers['x-admin'] === 'true';
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' });
  return res.status(200).json({ notes: getAllNotes() });
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllNotes } from './notes';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = req.headers['x-admin'] === 'true';
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' });
  return res.status(200).json({ notes: getAllNotes() })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllNotes } from './notes';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = req.headers['x-admin'] === 'true';
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' });
  return res.status(200).json({ notes: getAllNotes() })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
