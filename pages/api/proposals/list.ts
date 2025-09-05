<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { listProposals } from '../../../utils/data/proposals',;
;
export default function handler(_req:NextApiRequest, res:NextApiResponse) {;
  try {;
    const proposals = listProposals(),;
    res.status(200).json({ proposals }),;
  } catch (error:any) {;
    res.status(500).json({ error:error?.message || 'Failed to list proposals' }),;
  }
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import { listProposals } from '../../../utils/data/proposals',
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const proposals = listProposals(),
    res.status(200).json({ proposals })
  } catch (error: any) {
    res.status(500).json({ error: error?.message || 'Failed to list proposals' })  }
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}