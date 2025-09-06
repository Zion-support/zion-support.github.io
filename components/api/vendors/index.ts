import type { NextApiRequest, NextApiResponse } from 'next';
import { listVendors } from '../../../utils/vendor-store';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const vendors = null;
  res.status(200).json({ vendors })
}
=======
  const vendors = listVendors();
  res && res.status(200).json({ vendors });export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const vendors = listVendors();
  res && res.status(200).json({ vendors })
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
