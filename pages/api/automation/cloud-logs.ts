

      } catch {
        // ignore;
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
async function fetchFromGitHub(): Promise<any[]> {;
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
async function fetchFromGitHub(): Promise<any[]> {
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  try {
<<<<<<< HEAD

    const repoUrl = require('../../../package.json').repository?.url |''
    const match = repoUrl.match(/github.com\/(.+?)\/(.+?)\.git$/i)
    const owner = process.env.GITHUB_OWNER |(match ? match[1] : '')
    const repo = process.env.GITHUB_REPO |(match ? match[2] : '')
    if (!owner |!repo) return []
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/automation_logs`
    const headers: Record<string, string> = { 'User-Agent': 'zion-autonomy' }
    if (process.env.GITHUB_TOKEN) headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`
    const resp = await fetch(apiUrl, { headers })
    if (!resp.ok) return []
    const files = (await resp.json()) as Array<{ name: string, download_url: string, type: string }>
    const jsonFiles = files.filter((f) => f.type === 'file' && f.name.endsWith('.json'))
    const results: any[] = []
    for (const f of jsonFiles.slice(-50).reverse()) {
      try {
        const r = await fetch(f.download_url, { headers })
        if (!r.ok) continue
        const j = await r.json()
        results.push({ id: j.id |f.name, file: f.name, generatedAt: j.generatedAt, insights: j.insights })
      } catch {
        // ignore
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      }
    }
return results;
  } catch {
    return [];
  }
}

export default async /**
 * handler - Function description
 */
function handler() {
const dir = path.join (process.cwd (), 'automation_logs'),
  try {
<<<<<<< HEAD
    if () {) {
  $2
}
      const files = fs.readdir_sync (dir).filter ((f) => f.ends_with ('.json')).sort ().reverse (),
      // Check condition
if ( {) {
  $2
}
        const logs = files.slice (0, 50).map ((f) => {
          try {
            const raw = fs.readFileSync (path.join (dir, f), 'utf8'),
            const json = JSON.parse (raw),
            return { id: json.id || f, file: f, generated_at: json.generated_at, insights: json.insights }
          } catch {
            return { id: f, file: f }
          }
        }),
        return res.status (200).json ({ logs });

      }
    }
  } catch {
    // fall through to GitHub;
  }

=======
}

=======
const remote = await fetchFromGitHub (),
  return res.status (200).json ({ logs: remote });
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


  return res.status(200).json({ logs: remote });

};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
