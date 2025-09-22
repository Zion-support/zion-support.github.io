<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import { ensureDemoUsers, generateUser, setUserCookie, upsertUser } from '../../../utils/auth';
import { UserRole } from '../../../utils/messaging/types';
=======
import { NextApiRequest, NextApiResponse } from 'next';
main
import { ensureDemoUsers, generateUser, setUserCookie, upsertUser } from '../../../utils/auth',;
import { UserRole } from '../../../utils/messaging/types',;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/auth/login.ts
=======
import { NextApiRequest, NextApiResponse } from 'next';
main
import { ensureDemoUsers, generateUser, setUserCookie, upsertUser } from '../../../utils/auth',;
import { UserRole } from '../../../utils/messaging/types',;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { name, role } = req.body as { name: string, role: UserRole }
  if (!name |!role) return res.status(400).json({ error: 'Missing name or role' })
  ensureDemoUsers()
  const user = generateUser(name, role)
  upsertUser(user)
  setUserCookie(res, user)
  res.status(200).json({ user })
<<<<<<< HEAD
}

<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  res.status(200).json({ user })
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
};

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/auth/login.ts
=======
};

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
