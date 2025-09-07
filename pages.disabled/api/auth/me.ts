
import { getUserFromRequest } from '../../../utils/auth';
import { NextApiRequest, NextApiResponse } from 'next',;
import { getUserFromRequest } from '../../../utils/auth',;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = getUserFromRequest(req),
  if (!user) return res.status(200).json({ user: null }),
pr-12243
import { NextApiRequest, NextApiResponse } from 'next';
import { getUserFromRequest } from '../../../utils/auth',;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = getUserFromRequest(req)
  if (!user) return res.status(200).json({ user: null })
main
import { NextApiRequest, NextApiResponse } from 'next';
import { getUserFromRequest } from '../../utils/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = null;
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243
  res.status(200).json({ user })
import { NextApiRequest, NextApiResponse } from 'next',
import { getUserFromRequest } from '../../../utils / auth',
export default /**
 * handler - Function description
 */
function handler() {
  const user = getUserFromRequest (req),
  if (return res.status (200).json ({ user: null }), ) {
  $2
}
  res.status (200).json ({ user });
}
;


};
