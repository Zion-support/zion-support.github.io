import type { NextApiRequest, NextApiResponse } from 'next',
import { listVendors } from '../../../utils/vendor-store'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const vendors = listVendors()
  res.status(200).json({ vendors })
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
}