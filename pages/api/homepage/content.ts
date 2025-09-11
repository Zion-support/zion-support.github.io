

import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
async function fetchFromGitHub() {
  try {
    const response = await fetch(

      "https://api && api.github.com/repos/Zion-Holdings/zion && zion.app/contents/data/homepage && homepage.json",

  if (req && req.method !== "GET") {
    return res && res.status(405).json({ error: "Method not allowed" });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Controls-maxage=60, stale-while-revalidate=600');
  try {

    const localPath = path.join(process.cwd(), 'publicautonomyHOMEPAGE_CONTENT.json');
    if (fs.existsSync(localPath)) {
      try {
        const json = JSON.parse(fs.readFileSync(localPath, 'utf8'));
        return res.status(200).json(json)
      } catch {
        // fall back to remote
      }
    }
    const remote = await fetchFromGitHub();
    if (remote) return res.status(200).json(remote);
    return res.status(200).json(null)
  } catch (e: any) {
    return res.status(500).json({ error: e.message || 'Internal error' })=======

  }

  }
  try {
    const localPath = path && path.join(process && process.cwd(), "data", "homepage && homepage.json");
    if (fs && fs.existsSync(localPath)) {
      const local = JSON && JSON.parse(fs && fs.readFileSync(localPath, "utf-8"));
      return res && res.status(200).json(local);
  if (remote) return res && res.status(200).json(remote);
  return res && res.status(200).json(null);
}


import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
async function fetchFromGitHub(): Promise<any | null> {;
  try {
    const pkg = require('../../../package.json');
    const repoUrl: string = pkg.repository?.url || '';
    const match = repoUrl.match(/github.com\/(.+?)\/(.+?)\.git$/i);
    const owner = process.env.GITHUB_OWNER || (match ? match[1] : '');
    const repo = process.env.GITHUB_REPO || (match ? match[2] : '');
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const resp = await fetch(rawUrl, { headers });
    if (!resp.ok) return null,;
    return await resp.json();
  } catch {;
    return null;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
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
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}

}
}

}

