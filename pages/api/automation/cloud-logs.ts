<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


=======
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
async function fetchFromGitHub(): Promise<any[]> {
  try {
    const repoUrl = require('../../../package.json').repository?.url || '',
    const match = repoUrl.match(/github.com\/(.+?)\/(.+?)\.git$/i),
    const owner = process.env.GITHUB_OWNER || (match ? match[1] : ''),
    const repo = process.env.GITHUB_REPO || (match ? match[2] : ''),
    if (!owner || !repo) return [],
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/automation_logs`,
    const headers: Record<string, string> = { 'User-Agent': 'zion-autonomy' },
    if (process.env.GITHUB_TOKEN) headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`,
    const resp = await fetch(apiUrl, { headers }),
    if (!resp.ok) return [],
    const files = (await resp.json()) as Array<{ name: string, download_url: string, type: string }>,
    const jsonFiles = files.filter((f) => f.type === 'file' && f.name.endsWith('.json')),
    const results: any[] = [],
    for (const f of jsonFiles.slice(-50).reverse()) {
      try {
        const r = await fetch(f.download_url, { headers }),
        if (!r.ok) continue,
        const j = await r.json(),
        results.push({ id: j.id || f.name, file: f.name, generatedAt: j.generatedAt, insights: j.insights })
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
async function fetchFromGitHub(): Promise<any[]> {
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  try {
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  try {

    const repoUrl = require('../../../package.json').repository?.url || '';
    const match = repoUrl.match(/github.com\/(.+?)\/(.+?)\.git$/i);
    const owner = process.env.GITHUB_OWNER || (match ? match[1] : '');
    const repo = process.env.GITHUB_REPO || (match ? match[2] : '');
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const resp = await fetch(apiUrl, { headers });
    if (!resp.ok) return [];
    const files = (await resp.json()) as Array<{ name: string, download_url: string, type: string }>,;
    const jsonFiles = files.filter((f) => f.type === 'file' && f.name.endsWith('.json'));
    const results: any[] = [];
    for (const f of jsonFiles.slice(-50).reverse()) {;
      try {
        const r = await fetch(f.download_url, { headers });
        if (!r.ok) continue,;
        const j = await r.json();
        results.push({ id: j.id || f.name, file: f.name, generatedAt: j.generatedAt, insights: j.insights });
      } catch {;
        // ignore;
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
    return results;
  } catch {;
    return [];
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
;
export default async function handler(req, res) {
  try {
  const dir = path.join(process.cwd(), 'automation_logs'),;
  try {
    if (fs.existsSync(dir)) {;
      const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json')).sort().reverse();
      if (files.length > 0) {;
        const logs = files.slice(0, 50).map((f) => {;
          try {
            const raw = fs.readFileSync(path.join(dir, f), 'utf8'),;
            const json = JSON.parse(raw);
            return { id: json.id || f, file: f, generatedAt: json.generatedAt, insights: json.insights   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          } catch {;
            return { id: f, file: f   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        });
        return res.status(200).json({ logs });
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
  } catch {;
    // fall through to GitHub;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  const remote = await fetchFromGitHub();
  return res.status(200).json({ logs: remote });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

  const remote = await fetchFromGitHub();

  return res.status(200).json({ logs: remote });
  try {

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

      } catch {
<<<<<<< HEAD
        // ignore;
=======
        // ignore
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      }
    }
    return results
  } catch {
    return [];
  }
}
<<<<<<< HEAD

export default async /**
 * handler - Function description
 */
function handler() {
const dir = path.join (process.cwd (), 'automation_logs'),
  try {
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
    // fall through to GitHub
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
const remote = await fetchFromGitHub()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const dir = path.join(process.cwd(), 'automation_logs'),
  try {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json')).sort().reverse(),
      if (files.length > 0) {
        const logs = files.slice(0, 50).map((f) => {
          try {
<<<<<<< HEAD
            const raw = fs.readFileSync(path.join(dir, f), 'utf8'),;
            const json = JSON.parse(raw);
            return { id: json.id || f, file: f, generatedAt: json.generatedAt, insights: json.insights   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          } catch {;
            return { id: f, file: f   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        });
        return res.status(200).json({ logs });
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
  } catch {;
    // fall through to GitHub;
  }

  const remote = await fetchFromGitHub();
  return res.status(200).json({ logs: remote });
}
}
};
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======

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
=======
            const raw = fs.readFileSync(path.join(dir, f), 'utf8'),
            const json = JSON.parse(raw),
            return { id: json.id || f, file: f, generatedAt: json.generatedAt, insights: json.insights }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
          } catch {
            return { id: f, file: f }
          }
        }),
        return res.status(200).json({ logs })
      }
    }
  } catch {
    // fall through to GitHub;
  }

<<<<<<< HEAD
=======
}

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
const remote = await fetchFromGitHub (),
  return res.status (200).json ({ logs: remote });
}
;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


  return res.status(200).json({ logs: remote });

};

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  const remote = await fetchFromGitHub(),
  return res.status(200).json({ logs: remote })
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
