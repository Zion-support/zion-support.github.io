import type { NextApiRequest, NextApiResponse } from 'next';
import { updateProposalMeta } from '../../../utils/data/proposals';
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { id, status } = req.body || {};
    if (!id || !status)
      return res.status(400).json({ error: 'id and status are required' });
    const updated = updateProposalMeta(id, m => ({ ...m, status }));
    res.status(200).json({ meta: updated });
  } catch (error: any) {
    res
      .status(500)
      .json({ error: error?.message || 'Failed to update status' });
  }
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status($1).json({$2});
  try {
    const { id, status } = req.body || {};
    if (!id || !status) return res.status($1).json({$2});
    const updated = updateProposalMeta(id, (m) => ({ ...m, status }));
    res.status(200).json({ meta: updated })
  } catch (error: any) {
    res.status(500).json({ error: error?.message || 'Failed to update status' })
  }
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
