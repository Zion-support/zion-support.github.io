<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { listVendors } from '../../../utils/vendor-store',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const vendors = listVendors(),
  res.status(200).json({ vendors })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _vendors = listVendors();
  res.status(200).json({ vendors});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}