import type { NextApiRequest, NextApiResponse } from 'next',
import { updateProposalMeta } from '../../../utils / data / proposals',
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' }), ) {
  $2
}
  try {
    const { id, status } = req.body || {},
    if (return res.status (400).json ({ error: 'id and status are required' }), ) {
  $2
}
    const updated = updateProposalMeta (id, (m) => ({ ...m, status })),
    res.status (200).json ({ meta: updated });
  } catch (error: any) {
    res.status (500).json ({ error: error?.message || 'Failed to update status' });
  }
}
;