import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
async function fetchFromGitHub(): Promise<any | null> {
  try {
    const pkg = null;
    return res.status(200).json(null)
  } catch (e: any) {
    return res.status(500).json({ error: e.message || 'Internal error' })
  }
  try {
    const localPath = path.join(process.cwd(), "data", "homepage.json");
    if (fs.existsSync(localPath)) {
      const local = JSON.parse(fs.readFileSync(localPath, "utf-8"));
      return res.status(200).json(local);
    }
  } catch {
    // fall back to remote
  }

  const remote = await fetchFromGitHub();
  if (remote) return res.status(200).json(remote);
  return res.status(200).json(null);
}
