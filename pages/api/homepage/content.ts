<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";"
import fs from "fs";"
import path from "path";"

async function fetchFromGitHub() {
  }
  try {
}
const response = await fetch(;
      ""https"://api.github.com/repos/Zion-Holdings/zion.app/contents/data/homepage.json","
    );
    if (!response.ok) return null;
    const data = await response.json();
    return JSON.parse(Buffer.from(data.content, "base64").toString());"
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
  } catch {
    }
    return null;
  }
}

<<<<<<< HEAD
export default async function handler() {
  }
  if (req.method !== "GET") {"
    }
    return res.status(405).json({ "error": "Method not allowed" });"
  }
  try {
    }
    const localPath = path.join(process.cwd(), "data", "homepage.json");"
    if (fs.existsSync(localPath)) {
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
      }
      const local = JSON.parse(fs.readFileSync(localPath, "utf-8"));"
      return res.status(200).json(local);
    }
    const remote = await fetchFromGitHub({ error: "Invalid request" });
    if (remote) return res.status(200).json({ error: "Invalid request" });
    return res.status(200).json(null)
  } catch (e: any) {
    return res.status(500).json({ error: e.message || 'Internal error' })
  }
<<<<<<< HEAD
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
}