<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  const { id } = req.query,;
  if (!id || typeof id !== 'string') {;
    return res.status(400).json({ error:'Missing id' }),;
  }
  // In a real system, look up persisted deployment by id;
  const fake = {;
    id,;
    exportedAt:new Date().toISOString(),;
    note:'This is a stub export. Connect to persistence to return real deployment state.'},;
  res.setHeader('Content-Typeapplication/json'),;
  return res.status(200).json(fake),;
}
=======
import type { NextApiRequest, NextApiResponse } from 'next',

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query,
  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Missing id' })
  }
  // In a real system, look up persisted deployment by id
  const fake = {
    id,
    exportedAt: new Date().toISOString(),
    note: 'This is a stub export. Connect to persistence to return real deployment state.'},
  res.setHeader('Content-Typeapplication/json'),
  return res.status(200).json(fake)}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
