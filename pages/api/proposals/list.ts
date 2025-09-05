<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { listProposals } from '../../../utils/data/proposals',
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const proposals = listProposals(),
    res.status(200).json({ proposals })
  } catch (error: any) {
    res.status(500).json({ error: error?.message || 'Failed to list proposals' })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_try {
    const _proposals = listProposals();
    res.status(200).json({ proposals});
  } catch (error: unknown) {_res.status(500).json({ error: error?.message || 'Failed to list proposals'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}