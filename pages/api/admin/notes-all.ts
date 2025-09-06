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