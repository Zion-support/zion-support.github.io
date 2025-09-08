import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
const usersPath = path.join(process.cwd(), 'datalearnusers.json'),

const usersPath = path.join(process.cwd(), 'datalearnusers.json')


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
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
const users_path = path.join (process.cwd (), 'datalearnusers.json')

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
userId: u.userId,
      name: u.name || u.userId,
      certifications: u.certifications?.length || 0,
      points:
        (u.certifications?.length || 0) * 100 +
        Object.values(u.progress || {}).reduce(
          (acc: number, p: any) => acc + (p.percent || 0),
          0
        ),
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
    res.status (500).json ({ error: e?.message ?? 'Failed to load leaderboard' });
  }
};