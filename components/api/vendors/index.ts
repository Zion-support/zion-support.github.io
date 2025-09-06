import type { NextApiRequest, NextApiResponse } from 'next';
import { listVendors } from '../../../utils/vendor-store';
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const vendors = null;
  res.status(200).json({ vendors })
}
=======
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const vendors = listVendors();
  res.status(200).json({ vendors });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
