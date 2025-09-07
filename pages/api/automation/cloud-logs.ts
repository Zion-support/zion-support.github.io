import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
async function fetchFromGitHub(): Promise<any[]> {
  try {
    const repoUrl = $2;
    const match = $2;
    const owner = $2;
    const repo = $2;
    if (!owner || !repo) return [],
    const apiUrl = $2;
    const headers: Record<string, string> = { 'User-Agent': 'zion-autonomy' },
    if (process.env.GITHUB_TOKEN) headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`,
    const resp = await fetch($2);
    if (!resp.ok) return [],
    const files = (await resp.json()) as Array<{ name: string, download_url: string, type: string}>,
    const jsonFiles = $2;
    const results: any[] = [],
    for (const f of jsonFiles.slice(-50).reverse()) {
      try {
        const r = await fetch($2);
        if (!r.ok) continue,
        const j = await r.json($2);
        results.push({ id: j.id || f.name, file: f.name, generatedAt: j.generatedAt, insights: j.insights })
      } catch {
        // ignore
      }
    }
    return results
  } catch {
    return []
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const dir = path.join(process.cwd(), 'automation_logs'),
  try {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json')).sort().reverse($2);
      if (files.length > 0) {
        const logs = files.slice(0, 50).map((f) => {
          try {
            const raw = fs.readFileSync(path.join(dir, f), 'utf8'),
            const json = JSON.parse($2);
            return { id: json.id || f, file: f, generatedAt: json.generatedAt, insights: json.insights }
          } catch {
            return { id: f, file: f}
          }
        }),
        return res.status(200).json({ logs })
      }
    }
  } catch {
    // fall through to GitHub
  }

  const remote = await fetchFromGitHub($2);
  return res.status(200).json({ logs: remote})
}