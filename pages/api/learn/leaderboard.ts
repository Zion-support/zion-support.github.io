<<<<<<< HEAD
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
const usersPath = path.join(process.cwd(), 'datalearnusers.json'),



=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
const usersPath = path.join(process.cwd(), 'datalearnusers.json')
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'))
    const entries = Object.values(users as any).map((u: any) => ({
<<<<<<< HEAD


    res.status(200).json({ leaderboard: top })
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to load leaderboard' })
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
=======


    res.status(200).json({ leaderboard: top })
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
const users_path = path.join (process.cwd (), 'datalearnusers.json'),
export default /**
 * handler - Function description
 */
function handler() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const usersPath = path.join(process.cwd(), 'datalearnusers.json'),;
export default function handler(req, res) {
  try {
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8')),;
    const entries = Object.values(users as any).map((u: any) => ({;
      userId: u.userId;
      name: u.name || u.userId;
      certifications: u.certifications?.length || 0;
      points: (u.certifications?.length || 0) * 100 + Object.values(u.progress || {}).reduce((acc: number, p: any) => acc + (p.percent || 0), 0);
    }));
    const top = entries.sort((a: any, b: any) => b.points - a.points).slice(0, 20);
    res.status(200).json({ leaderboard: top });
  } catch (error) {
    res.status(500).json({ error: e?.message ?? 'Failed to load leaderboard' });
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
  }
}
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD


=======
    res.status (500).json ({ error: e?.message ?? 'Failed to load leaderboard' });
  }

=======
}

=======
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
