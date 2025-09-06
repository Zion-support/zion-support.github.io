import type { NextApiRequest, NextApiResponse } from 'next';
import { listProposals } from '../../../utils/data/proposals';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const proposals = listProposals();
    res.status(200).json({ proposals })
  } catch (error: any) {
    res.status(500).json({ error: error?.message || 'Failed to list proposals' })
  }
<<<<<<< HEAD
=======
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const proposals = listProposals();
    res.status(200).json({ proposals })
  } catch (error: any) {
    res.status(500).json({ error: error?.message || 'Failed to list proposals' })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
