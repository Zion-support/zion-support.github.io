
import { NextApiRequest, NextApiResponse } from 'next',;
import { ensureDemoUsers, generateUser, setUserCookie, upsertUser } from '../../../utils/auth',;
import { UserRole } from '../../../utils/messaging/types',;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { name, role } = req.body as { name: string, role: UserRole },
  if (!name || !role) return res.status(400).json({ error: 'Missing name or role' }),
  ensureDemoUsers(),
  const user = generateUser(name, role),
  upsertUser(user),
  setUserCookie(res, user),
res.status(200).json({ user });
};
import { NextApiRequest, NextApiResponse } from 'next';
import { ensureDemoUsers, generateUser, setUserCookie, upsertUser } from '../../../utils/auth';
import { UserRole } from '../../../utils/messaging/types';
import { NextApiRequest, NextApiResponse } from 'next';
main
import { ensureDemoUsers, generateUser, setUserCookie, upsertUser } from '../../../utils/auth',;
import { UserRole } from '../../../utils/messaging/types',;

import { NextApiRequest, NextApiResponse } from 'next';
main
import { ensureDemoUsers, generateUser, setUserCookie, upsertUser } from '../../../utils/auth',;
import { UserRole } from '../../../utils/messaging/types',;

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

export default function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { name, role } = req.body as { name: string, role: UserRole };
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  ensureDemoUsers();
  const user = generateUser(name, role);
  upsertUser(user);
  setUserCookie(res, user);
  res.status(200).json({ user });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

  res.status(200).json({ user })
};
};

};

import { NextApiRequest, NextApiResponse } from 'next';
import { ensureDemoUsers, generateUser, setUserCookie, upsertUser } from '../../utils/user';
import { UserRole } from '../../types/user';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { name, role } = req.body as { name: string, role: UserRole };
  if (!name || !role) return res.status(400).json({ error: 'Missing name or role' });

  ensureDemoUsers();
  const user = generateUser(name, role);
  setUserCookie(res, user);
res.status(200).json({ user });

}
