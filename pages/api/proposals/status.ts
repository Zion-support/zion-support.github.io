import { updateProposalMeta } from '../../../utils/data/proposals';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { id, status } = req.body || {};
    if (!id || !status) return res.status(400).json({ error: 'id and status are required' });
    const updated = updateProposalMeta(id, (m) => ({ ...m, status }));
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    res.status(200).json({ meta: updated })
  } catch (error: any) {
    res.status(500).json({ error: error?.message |'Failed to update status' })
  }
=======
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
