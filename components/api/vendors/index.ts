import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD



import { listVendors } from '../../../utils/vendor-store';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const vendors = null;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const vendors = listVendors();
  res.status(200).json({ vendors });export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const vendors = listVendors();
<<<<<<< HEAD
=======

  res.status(200).json({ vendors })
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


export default function handler(req: NextApiRequest, res: NextApiResponse) {



  res.status(200).json({ vendors })

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
<<<<<<< HEAD
}



}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
