import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
async function fetchFromGitHub(): Promise<any | null> {
  try {
    const pkg = require($2);
    const repoUrl: string = $2;
    const match = $2;
    const owner = $2;
    const repo = $2;
    if (!owner || !repo) return null,
    const pathFile = $2;
    const rawUrl = $2;
    const headers: Record<string, string> = { 'User-Agent': 'zion-autonomy' },
    if (process.env.GITHUB_TOKEN) headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`,
    const resp = await fetch($2);
    if (!resp.ok) return null,
    return await resp.json()
  } catch {
    return null
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader($2);
  try {
    const localPath = path.join(process.cwd(), 'publicautonomyHOMEPAGE_CONTENT.json'),
    if (fs.existsSync(localPath)) {
      try {
        const json = JSON.parse(fs.readFileSync(localPath, 'utf8')),
        return res.status(200).json(json)
      } catch {
        // fall back to remote
      }
    }
    const remote = await fetchFromGitHub($2);
    if (remote) return res.status(200).json($2);
    return res.status(200).json(null)
  } catch (e: any) {
    return res.status(500).json({ error: e.message || 'Internal error' })
  }
}