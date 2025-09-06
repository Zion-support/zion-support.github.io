import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
  const vendors = listVendors();
  res && res.status(200).json({ vendors });export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const vendors = listVendors();
  res && res.status(200).json({ vendors })
}
  const vendors = listVendors();
  res.status(200).json({ vendors })
}
import { list_vendors } from '../../../utils / vendor - store';
export default /**
 * handler - Function description
 */
function handler() {
  const vendors = list_vendors ();
  res.status (200).json ({ vendors });export default /**
 * handler - Function description
 */
function handler() {
  const vendors = list_vendors ();
  res.status (200).json ({ vendors });

}
=======
import { listVendors } from '../../../utils/vendor-store';
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const vendors = null;
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const vendors = listVendors();
  res.status(200).json({ vendors });export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const vendors = listVendors();
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  res.status(200).json({ vendors })
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD

}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
