import type { NextApiRequest, NextApiResponse } from 'next',
import { getAllNotes } from './notes'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = req.headers['x-admin'] === 'true'
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' }),
  return res.status(200).json({ notes: getAllNotes() })
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
}