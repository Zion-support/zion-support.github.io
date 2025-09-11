<<<<<<< HEAD
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
const usersPath = path.join(process.cwd(), 'datalearnusers.json'),

=======



>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const usersPath = path.join(process.cwd(), 'datalearnusers.json')
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'))
    const entries = Object.values(users as any).map((u: any) => ({
<<<<<<< HEAD
<<<<<<< HEAD
      userId: u.userId, name: u.name || u.userId,
      certifications: u.certifications?.length || 0,
      points: (u.certifications?.length || 0) * 100 + Object.values(u.progress || {}).reduce((acc: number, p: any) => acc + (p.percent || 0), 0)
    }));
    const top = entries.sort((a: any, b: any) => b.points - a.points).slice(0, 20);
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    res.status(200).json({ leaderboard: top })
=======


    res.status(200).json({ leaderboard: top })
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
const users_path = path.join (process.cwd (), 'datalearnusers.json'),
export default /**
 * handler - Function description
 */
function handler() {
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
<<<<<<< HEAD
  } catch (e: any) {
<<<<<<< HEAD

}

}
;


    res.status(500).json({ error: e?.message ?? 'Failed to load leaderboard' })
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
  }
}
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  } catch (e: any) {
    res.status (500).json ({ error: e?.message ?? 'Failed to load leaderboard' });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
