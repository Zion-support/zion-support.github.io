<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
async function fetchFromGitHub(): Promise<any[]> {
  try {
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

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
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
async function fetchFromGitHub (): Promise < any[]> {
  try {
    const repo_url = require ('../../../package.json').repository?.url || '',
    const match = repo_url.match (/github.com\/(.+?)\/(.+?)\.git$/i),
    const owner = process.env.GITHUB_OWNER || (match ? match[1] : ''),
    const repo = process.env.GITHUB_REPO || (match ? match[2] : ''),
    // Check condition
if (return [], ) {
  $2
}
    const api_url = `https://api.github.com / repos/${owner}/${repo}/contents / automation_logs`,
    const headers: Record < string, string> = { 'User - Agent': 'zion - autonomy' },
    // Check condition
if (headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`, ) {
  $2
}
    const resp = await fetch (api_url, { headers }),
    // Check condition
if (return [], ) {
  $2
}
    const files = (await resp.json ()) as Array<{ name: string, download_url: string, type: string }>,
    const json_files = files.filter ((f) => f.type === 'file' && f.name.ends_with ('.json')),
    const results: any[] = [],
    for (const f of json_files.slice (-50).reverse ()) {
      try {
        const r = await fetch (f.download_url, { headers }),
        // Check condition
if (continue, ) {
  $2
}
        const inner_index = await r.json (),
        results.push ({ id: j.id || f.name, file: f.name, generated_at: j.generated_at, insights: j.insights });
      } catch {
        // ignore;
      }
    }
return results;
  } catch {
    return [];
  }
}
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
            return { id: json.id |f, file: f, generatedAt: json.generatedAt, insights: json.insights }
          } catch {
            return { id: f, file: f }
          }
        })
        return res.status(200).json({ logs })
      }
    }
  } catch {
    // fall through to GitHub
  }
const remote = await fetchFromGitHub()

<<<<<<< HEAD
  return res.status(200).json({ logs: remote })
=======
=======
const remote = await fetchFromGitHub(),
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
async function fetchFromGitHub(): Promise<any[]> {;
  try {
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
  }
const remote = await fetchFromGitHub()

<<<<<<< HEAD
  return res.status(200).json({ logs: remote })
=======
  const remote = await fetchFromGitHub();
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  return res.status(200).json({ logs: remote });
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}
const remote = await fetchFromGitHub (),
  return res.status (200).json ({ logs: remote });
}
;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


  return res.status(200).json({ logs: remote });

};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
