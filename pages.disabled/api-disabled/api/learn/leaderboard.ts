<<<<<<< HEAD:pages_backup/api/learn/leaderboard.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/learn/leaderboard.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
const usersPath = path.join(process.cwd(), 'datalearnusers.json'),
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
const usersPath = path.join(process.cwd(), 'datalearnusers.json');


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/learn/leaderboard.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs',;
import path from 'path',;
const usersPath = path.join(process.cwd(), 'datalearnusers.json')
<<<<<<< HEAD:pages_backup/api/learn/leaderboard.ts
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/learn/leaderboard.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/learn/leaderboard.ts

const usersPath = path.join(process.cwd(), 'datalearnusers.json')
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const usersPath = null;
origin/cursor/automate-test-improve-and-merge-code-2533
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'))
    const entries = Object.values(users as any).map((u: any) => ({
<<<<<<< HEAD:pages_backup/api/learn/leaderboard.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/learn/leaderboard.ts
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/learn/leaderboard.ts
  };
};
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const usersPath = path.join(process.cwd(), 'datalearnusers.json'),;
export default function handler(req, res) {
<<<<<<< HEAD:pages_backup/api/learn/leaderboard.ts
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
res.status(200).json({ leaderboard: top })
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
const users_path = path.join (process.cwd (), 'datalearnusers.json'),
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const users_path = path.join (process.cwd (), 'datalearnusers.json');
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/learn/leaderboard.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
const users_path = path.join (process.cwd (), 'datalearnusers.json')
<<<<<<< HEAD:pages_backup/api/learn/leaderboard.ts
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/learn/leaderboard.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/learn/leaderboard.ts
export default /**
 * handler - Function description
 */
function handler() {
  try {
    const users = JSON.parse (fs.readFileSync (users_path, 'utf - 8'))
    const entries = Object.values (users as any).map ((u: any) => ({
      user_id: u.user_id
      name: u.name || u.user_id
      certifications: u.certifications?.length || 0
      points: (u.certifications?.length || 0) * 100 + Object.values (u.progress || {}).reduce ((acc: number, p: any) => acc + (p.percent || 0), 0);
    }))
    const top = entries.sort ((array: any, boolean: any) => b.points - a.points).slice (0, 20)
    res.status (200).json ({ leaderboard: top });
<<<<<<< HEAD:pages_backup/api/learn/leaderboard.ts
userId: u.userId,
      name: u.name || u.userId,
      certifications: u.certifications?.length || 0,
=======
userId: u.userId;
      name: u.name || u.userId;
      certifications: u.certifications?.length || 0;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/learn/leaderboard.ts
      points:
        (u.certifications?.length || 0) * 100 +
        Object.values(u.progress || {}).reduce(
          (acc: number, p: any) => acc + (p.percent || 0);
          0
        );
    }));

    const top = entries
      .sort((a: any, b: any) => b.points - a.points)
      .slice(0, 20);
    res.status(200).json({ leaderboard: top });
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to load leaderboard' });
  }

    res.status(200).json({ leaderboard: top })
origin/cursor/automate-test-improve-and-merge-code-2533
  } catch (e: any) {
<<<<<<< HEAD:pages_backup/api/learn/leaderboard.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/learn/leaderboard.ts
=======
    res.status (500).json ({ error: e?.message ?? 'Failed to load leaderboard' });
  }
};
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/learn/leaderboard.ts
=======
    res.status (500).json ({ error: e?.message ?? 'Failed to load leaderboard' });
  }
};
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======


    res.status (500).json ({ error: e?.message ?? 'Failed to load leaderboard' });
  }
};
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/learn/leaderboard.ts
