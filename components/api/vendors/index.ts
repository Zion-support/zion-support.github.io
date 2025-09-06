import type { NextApiRequest, NextApiResponse } from 'next';
import { listVendors } from '../../../utils/vendor-store';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const vendors = null;
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const vendors = listVendors();
  res.status(200).json({ vendors });export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const vendors = listVendors();
  res.status(200).json({ vendors })


=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
