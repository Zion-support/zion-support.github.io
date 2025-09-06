import { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
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
  
=======
import { ensureDemoUsers, generateUser, setUserCookie, upsertUser } from '../../../utils/auth';
import { UserRole } from '../../../utils/messaging/types';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { name, role } = req.body as { name: string, role: UserRole };
  if (!name || !role) return res.status(400).json({ error: 'Missing name or role' });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  ensureDemoUsers();
  const user = generateUser(name, role);
  upsertUser(user);
  setUserCookie(res, user);
<<<<<<< HEAD
  res.status(200).json({ user });
=======
  res.status(200).json({ user })
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
}