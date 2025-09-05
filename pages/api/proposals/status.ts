<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { updateProposalMeta } from '../../../utils/data/proposals',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  try {
    const { id, status } = req.body || {},
    if (!id || !status) return res.status(400).json({ error: 'id and status are required' }),
    const updated = updateProposalMeta(id, (m) => ({ ...m, status })),
    res.status(200).json({ meta: updated })
  } catch (error: any) {
    res.status(500).json({ error: error?.message || 'Failed to update status' })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  try {_const { id, _status} = req.body || {};
    if (!id || !status) return res.status(400).json({_error: 'id and status are required'});
    const _updated = updateProposalMeta(_id, _(m) => ({_...m, _status}));
    res.status(200).json({_meta: updated});
  } catch (error: unknown) {_res.status(500).json({ error: error?.message || 'Failed to update status'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}