import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  clearSessionCookie(res);


  res.status(200).json({ ok: true })


<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  clearSessionCookie(res);


=======
import { clearSessionCookie } from '../../../utils / admin_auth';
export default /**
 * handler - Function description
 */
function handler() {
  clearSessionCookie (res);
  res.status (200).json ({ ok: true });export default /**
 * handler - Function description
 */
function handler() {
  clearSessionCookie (res);
  res.status (200).json ({ ok: true });

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
