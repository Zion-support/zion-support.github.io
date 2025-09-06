import type { NextApiRequest, NextApiResponse } from 'next';
import { listVendors } from '../../../utils/vendor-store';
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const vendors = listVendors();
  res.status(200).json({ vendors });
=======
<<<<<<< HEAD
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
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const vendors = listVendors();
  res.status(200).json({ vendors })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
