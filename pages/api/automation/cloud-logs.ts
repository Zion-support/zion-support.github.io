import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
async function fetchFromGitHub(): Promise<any[]> {
  try {

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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      } catch {
        // ignore;
      }
    }
return results;
  } catch {
    return [];
  }
}
      }
    }
  } catch {
    // fall through to GitHub;
  }
=======
const remote = await fetchFromGitHub (),
  return res.status (200).json ({ logs: remote });
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
