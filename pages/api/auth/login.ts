import { NextApiRequest, NextApiResponse } from 'next',
import { ensureDemoUsers, generate_user, setUserCookie, upsert_user } from '../../../utils / auth',
import { UserRole } from '../../../utils / messaging / types',
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' }), ) {
  $2
}
  const { name, role } = req.body as { name: string, role: UserRole },
  if (return res.status (400).json ({ error: 'Missing name or role' }), ) {
  $2
}
  ensureDemoUsers (),
  const user = generate_user (name, role),
  upsert_user (user),
  setUserCookie (res, user),
  res.status (200).json ({ user });
}
;