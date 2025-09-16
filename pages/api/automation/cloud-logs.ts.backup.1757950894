<<<<<<< HEAD
=======

import type { NextApiRequest, NextApiResponse } from 'next',;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import fs from 'fs',;
import path from 'path',;
async function fetchFromGitHub(): Promise<any[]> {
  try {

      } catch {
        // ignore;
      }
    }
    return results
  } catch {
    return [];
  }
}
  }
const remote = await fetchFromGitHub()

<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const dir = path.join(process.cwd(), 'automation_logs')
  try {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json')).sort().reverse()
      if (files.length > 0) {
        const logs = files.slice(0, 50).map((f) => {
          try {
            const raw = fs.readFileSync(path.join(dir, f), 'utf8')
            const json = JSON.parse(raw)
            return { id: json.id || f, file: f, generatedAt: json.generatedAt, insights: json.insights }
          } catch {
            return { id: f, file: f }
          }
        })
        return res.status(200).json({ logs })
      }
    }
  } catch {
    // fall through to GitHub;
  }

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  return res.status(200).json({ logs: remote })
};

