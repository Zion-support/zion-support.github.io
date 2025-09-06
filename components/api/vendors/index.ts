import type { NextApiRequest, NextApiResponse } from 'next';
import { listVendors } from '../../../utils/vendor-store';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const vendors = null;
  res.status(200).json({ vendors })
<<<<<<< HEAD
}
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
