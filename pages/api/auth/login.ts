<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

import { ensureDemoUsers, generateUser, setUserCookie, upsertUser } from '../../../utils/auth';
import { UserRole } from '../../../utils/messaging/types';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { name, role } = req.body as { name: string, role: UserRole }
  if (!name |!role) return res.status(400).json({ error: 'Missing name or role' })
  ensureDemoUsers()
  const user = generateUser(name, role)
  upsertUser(user)
  setUserCookie(res, user)
  res.status(200).json({ user })
}

=======
import { ensureDemoUsers, generateUser, setUserCookie, upsertUser } from '../../../utils/auth';
import { UserRole } from '../../../utils/messaging/types';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { name, role } = req.body as { name: string, role: UserRole };
  if (!name || !role) return res.status(400).json({ error: 'Missing name or role' });
  ensureDemoUsers();
  const user = generateUser(name, role);
  upsertUser(user);
  setUserCookie(res, user);
  res.status(200).json({ user })
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
