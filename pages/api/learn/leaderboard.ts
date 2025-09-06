<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const usersPath = path.join(process.cwd(), 'datalearnusers.json');
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
const usersPath = path.join(process.cwd(), 'datalearnusers.json'),
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

const usersPath = path.join(process.cwd(), 'datalearnusers.json')
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'))
    const entries = Object.values(users as any).map((u: any) => ({
      userId: u.userId
      name: u.name |u.userId
      certifications: u.certifications?.length |0
      points: (u.certifications?.length |0) * 100 + Object.values(u.progress |{}).reduce((acc: number, p: any) => acc + (p.percent |0), 0)
    }))
    const top = entries.sort((a: any, b: any) => b.points - a.points).slice(0, 20)

      userId: u.userId, name: u.name || u.userId,
      certifications: u.certifications?.length || 0,
      points: (u.certifications?.length || 0) * 100 + Object.values(u.progress || {}).reduce((acc: number, p: any) => acc + (p.percent || 0), 0)
    }));

    const top = entries.sort((a: any, b: any) => b.points - a.points).slice(0, 20);
    res.status(200).json({ leaderboard: top })
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
const users_path = path.join (process.cwd (), 'datalearnusers.json'),
export default /**
 * handler - Function description
 */
function handler() {
=======
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to load leaderboard' })
<<<<<<< HEAD
=======
=======
  };
};
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const usersPath = path.join(process.cwd(), 'datalearnusers.json'),;
export default function handler(req, res) {
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  try {
    const users = JSON.parse (fs.readFileSync (users_path, 'utf - 8')),
    const entries = Object.values (users as any).map ((u: any) => ({
      user_id: u.user_id,
      name: u.name || u.user_id,
      certifications: u.certifications?.length || 0,
      points: (u.certifications?.length || 0) * 100 + Object.values (u.progress || {}).reduce ((acc: number, p: any) => acc + (p.percent || 0), 0);
    })),
    const top = entries.sort ((array: any, boolean: any) => b.points - a.points).slice (0, 20),
    res.status (200).json ({ leaderboard: top });
  } catch (e: any) {
    res.status (500).json ({ error: e?.message ?? 'Failed to load leaderboard' });
  }
<<<<<<< HEAD
}
}
;
=======
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
