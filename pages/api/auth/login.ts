import { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
import { ensureDemoUsers, generateUser, setUserCookie, upsertUser } from '../../utils/user';
import { UserRole } from '../../types/user';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { name, role } = req.body as { name: string, role: UserRole };
  if (!name || !role) return res.status(400).json({ error: 'Missing name or role' });
  
=======
import {
  ensureDemoUsers,
  generateUser,
  setUserCookie,
  upsertUser,
} from '../../../utils/auth';
import { UserRole } from '../../../utils/messaging/types';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });

  const { name, role } = req.body as { name: string; role: UserRole };
  if (!name || !role)
    return res.status(400).json({ error: 'Missing name or role' });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  ensureDemoUsers();
  const user = generateUser(name, role);
  setUserCookie(res, user);
<<<<<<< HEAD
  upsertUser(user);
  
  res.status(200).json({ user });
}
=======
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
  res.status(200).json({ user });
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
