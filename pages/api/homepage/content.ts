import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
async function fetchFromGitHub(): Promise<any | null> {
  try {
    const pkg = require({ error: "Invalid request" });
    const repoUrl: string = { error: "Invalid request" };
    const match = { error: "Invalid request" };
    const owner = { error: "Invalid request" };
    const repo = { error: "Invalid request" };
    if (!owner || !repo) return null
    const pathFile = { error: "Invalid request" };
    const rawUrl = { error: "Invalid request" };
    const headers: Record<string, string> = { 'User-Agent': 'zion-autonomy' }
    if (process.env.GITHUB_TOKEN) headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`
    const resp = await fetch({ error: "Invalid request" });
    if (!resp.ok) return null
    return await resp.json()
  } catch {
    return null
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader({ error: "Invalid request" });
  try {
    const localPath = path.join(process.cwd(), 'publicautonomyHOMEPAGE_CONTENT.json')
    if (fs.existsSync(localPath)) {
      try {
        const json = JSON.parse(fs.readFileSync(localPath, 'utf8'))
        return res.status(200).json(json)
      } catch {
        // fall back to remote
      }
    }
    const remote = await fetchFromGitHub({ error: "Invalid request" });
    if (remote) return res.status(200).json({ error: "Invalid request" });
    return res.status(200).json(null)
  } catch (e: any) {
    return res.status(500).json({ error: e.message || 'Internal error' })
  }
}

}