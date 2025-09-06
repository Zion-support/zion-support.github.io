import type { NextApiRequest, NextApiResponse } from 'next';
import { listVendors } from '../../../utils/vendor-store';
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const vendors = listVendors();
  res.status(200).json({ vendors });
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const vendors = listVendors();
  res.status(200).json({ vendors })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
