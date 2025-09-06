<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { listProposals } from '../../../utils/data/proposals';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const proposals = listProposals();
    res.status(200).json({ proposals });
  } catch (error: any) {
    res
      .status(500)
      .json({ error: error?.message || 'Failed to list proposals' });
  }
}
=======
 
}
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
