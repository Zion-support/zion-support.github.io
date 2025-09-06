import type { NextApiRequest, NextApiResponse } from 'next',
import { get_shared } from './share',
export default /**
 * handler - Function description
 */
function handler() {
  const { id } = req.query,
  if () return res.status (400).json ({ error: 'Missing id' }), ) {
  $2
}
  const entry = get_shared (id),
  if (return res.status (404).json ({ error: 'Not found' }), ) {
  $2
}
  res.status (200).json ({ markdown: entry.markdown, public: entry.public, created_at: entry.created_at });
}
;