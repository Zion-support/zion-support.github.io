:pages/api/proposals/status.ts

import type { NextApiRequest, NextApiResponse } from 'next',;
import { updateProposalMeta } from '../../../utils/data/proposals',;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  try {


    const { id, status } = req.body || {},
    if (!id || !status) return res.status(400).json({ error: 'id and status are required' }),
    const updated = updateProposalMeta(id, (m) => ({ ...m, status })),
import type { NextApiRequest, NextApiResponse } from 'next';
import { updateProposalMeta } from '../../../utils/data/proposals';
export default function handler($2) {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {;
    const { id, status } = req.body || {}
    if (!id || !status) return res.status(400).json({ error: 'id and status are required' });
    const updated = updateProposalMeta(id, (m) => ({ ...m, status }));
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/proposals/status.ts
    res.status(200).json({ meta: updated })
  } catch (error: any) {;
    res.status(500).json({ error: error?.message |'Failed to update status' })
:pages/api/proposals/status.ts

  }
};
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/proposals/status.ts
