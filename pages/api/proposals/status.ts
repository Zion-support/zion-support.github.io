import type { NextApiRequest, NextApiResponse } from 'next';
import { updateProposalMeta } from '../../../utils/data/proposals';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status($1).json({$2}),
  try {
    const { id, status } = req.body || {},
    if (!id || !status) return res.status($1).json({$2}),
    const updated = updateProposalMeta(id, (m) => ({ ...m, status })),
    res.status(200).json({ meta: updated })
  } catch (error: any) {
    res.status(500).json({ error: error?.message || 'Failed to update status' })
  }
}