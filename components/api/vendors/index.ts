<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { listVendors } from '../../../utils/vendor-store',;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  const vendors = listVendors(),;
  res.status(200).json({ vendors }),;
}
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import { listVendors } from '../../../utils/vendor-store',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const vendors = listVendors(),
  res.status(200).json({ vendors })}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
