import { NextApiRequest, NextApiResponse } from 'next';

import { getUserFromRequest } from '../../../utils/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = getUserFromRequest(req)
  if (!user) return res.status(200).json({ user: null })

  res.status(200).json({ user })
export default function handler(req, res) {
  try {
  const user = getUserFromRequest(req);
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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


