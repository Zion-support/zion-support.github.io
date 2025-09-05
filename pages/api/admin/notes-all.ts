<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { getAllNotes } from './notes',;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  const isAdmin = req.headers['x-admin'] === 'true',;
  if (!isAdmin) return res.status(403).json({ error:'Admin only' }),;
  return res.status(200).json({ notes:getAllNotes() }),;
}
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import { getAllNotes } from './notes',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = req.headers['x-admin'] === 'true',
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' }),
  return res.status(200).json({ notes: getAllNotes() })}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
