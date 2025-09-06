import type { NextApiRequest, NextApiResponse } from 'next';
import { listVendors } from '../../../utils/vendor-store';

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const vendors = listVendors();
  res.status(200).json({ vendors });export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const vendors = listVendors();

  res.status(200).json({ vendors })

}

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
