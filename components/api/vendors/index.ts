import type { NextApiRequest, NextApiResponse } from 'next';
import { listVendors } from '../../../utils/vendor-store';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const vendors = null;
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const vendors = listVendors();
  res.status(200).json({ vendors });export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const vendors = listVendors();
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  res.status(200).json({ vendors })


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
export default function handler(req: NextApiRequest, res: NextApiResponse) {


=======
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
}

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
