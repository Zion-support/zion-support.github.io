<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next';
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllNotes } from './notes';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = req.headers['x-admin'] === 'true';
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' });
<<<<<<< HEAD
  return res.status(200).json({ notes: [] });
}
=======
  return res.status(200).json({ notes: getAllNotes() });
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
