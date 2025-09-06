import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

async function fetchFromGitHub() {
  try {
    const response = await fetch('https://api.github.com/repos/ziontechgroup/site/contents/data/homepage.json');
    if (!response.ok) return null;
    const data = await response.json();
    return JSON.parse(Buffer.from(data.content, 'base64').toString());
  } catch {
    return null;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    // Try to read from local file first
    try {
      const localPath = path.join(process.cwd(), 'data', 'homepage.json');
      const localContent = fs.readFileSync(localPath, 'utf-8');
      return res.status(200).json(JSON.parse(localContent));
    } catch {
      // fall back to remote
    }

    const remote = await fetchFromGitHub();
    if (remote) return res.status(200).json(remote);
    return res.status(200).json(null);
  } catch (e: any) {
    return res.status(500).json({ error: e.message || 'Internal error' });
  }
}