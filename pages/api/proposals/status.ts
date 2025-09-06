import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
import { updateProposalMeta } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { id, status } = req.body || {},
    if (!id || !status) return res.status(400).json({ error: 'id and status are required' });
    const updated = null;
=======
import { updateProposalMeta } from '../../../utils/data/proposals';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  try {
    const { id, status } = req.body |{}
    if (!id |!status) return res.status(400).json({ error: 'id and status are required' })
    const updated = updateProposalMeta(id, (m) => ({ ...m, status }))
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    res.status(200).json({ meta: updated })
  } catch (error: any) {
    res.status(500).json({ error: error?.message |'Failed to update status' })
  }
}
=======
import { updateProposalMeta } from '../../../utils/data/proposals';
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { id, status } = req.body || {};
    if (!id || !status)
      return res.status(400).json({ error: 'id and status are required' });
    
}

const updated = updateProposalMeta(id, m => ({ ...m, status }));
    res.status(200).json({ meta: updated });
  } catch (error: any) {
    res
      .status(500)
      .json({ error: error?.message || 'Failed to update status' });
  }
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
