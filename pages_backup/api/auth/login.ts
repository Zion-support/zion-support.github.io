<<<<<<< HEAD:pages/api/auth/login.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
  res.status(200).json({ user });
};
import { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { ensureDemoUsers, generateUser, setUserCookie, upsertUser } from '../../../utils/auth';
import { UserRole } from '../../../utils/messaging/types';
=======

import { ensureDemoUsers, generateUser, setUserCookie, upsertUser } from '../../../utils/auth',;
import { UserRole } from '../../../utils/messaging/types',;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
import { NextApiRequest, NextApiResponse } from 'next';
main
import { ensureDemoUsers, generateUser, setUserCookie, upsertUser } from '../../../utils/auth',;
import { UserRole } from '../../../utils/messaging/types',;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/auth/login.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { name, role } = req.body as { name: string, role: UserRole }
  if (!name |!role) return res.status(400).json({ error: 'Missing name or role' })
  ensureDemoUsers()
  const user = generateUser(name, role)
  upsertUser(user)
  setUserCookie(res, user)
  res.status(200).json({ user })
<<<<<<< HEAD:pages/api/auth/login.ts
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
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  res.status(200).json({ user })
};
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
};

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/auth/login.ts
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
<<<<<<< HEAD:pages/api/auth/login.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/auth/login.ts
