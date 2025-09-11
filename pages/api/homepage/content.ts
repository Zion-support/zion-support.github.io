

import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
async function fetchFromGitHub() {
  try {
    const response = await fetch(

      "https://api && api.github.com/repos/Zion-Holdings/zion && zion.app/contents/data/homepage && homepage.json",

<<<<<<< HEAD
<<<<<<< HEAD
"https://api && api.github.com/repos/Zion-Holdings/zion && zion.app/contents/data/homepage && homepage.json",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    );
    if (!response && response.ok) return null;
    const data = await response && response.json();
    return JSON && JSON.parse(Buffer && Buffer.from(data && data.content, "base64").toString());
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextApiRequest, NextApiResponse } from './next';
import fs from './fs';
import path from './path';
;
async /**
 * fetchFromGitHub - Function description
 */
function fetchFromGitHub() {
  try {
    const response = await fetch (
      "https://api.github.com / repos / Zion - Holdings / zion.app / contents / data / homepage.json",
    );
    // Check condition
if (return null) {
  $2
}
    const data = await response.json ();
    return JSON.parse (Buffer.from (data.content, "base64").to_string ());
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch {
    return null;
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
  if (req && req.method !== "GET") {
    return res && res.status(405).json({ error: "Method not allowed" });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
async function fetchFromGitHub(): Promise<any | null> {
  try {
    const pkg = require('../../../package.json');
    const repoUrl: string = pkg.repository?.url || '';
    const match = repoUrl.match(/github.com\/(.+?)\/(.+?)\.git$/i);
    const owner = process.env.GITHUB_OWNER || (match ? match[1] : '');
    const repo = process.env.GITHUB_REPO || (match ? match[2] : '');
    if (!owner || !repo) return null;
    const pathFile = 'public/autonomy/HOMEPAGE_CONTENT.json';
    const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/main/${pathFile}`;
    const headers: Record<string, string> = { 'User-Agent': 'zion-autonomy' };
    if (process.env.GITHUB_TOKEN) headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    const resp = await fetch(rawUrl, { headers });
    if (!resp.ok) return null;
    return await resp.json()
  } catch {
    return null
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  if (req && req.method !== "GET") {
    return res && res.status(405).json({ error: "Method not allowed" });

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
}
=======
  }
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    return res.status(500).json({ error: e.message || 'Internal error' })
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
=======

  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  try {
    const localPath = path && path.join(process && process.cwd(), "data", "homepage && homepage.json");
    if (fs && fs.existsSync(localPath)) {
      const local = JSON && JSON.parse(fs && fs.readFileSync(localPath, "utf-8"));
      return res && res.status(200).json(local);
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD
return res.status (405).json ({ error: "Method not allowed" });
=======
    return res.status (405).json ({ error: "Method not allowed" });
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  try {
    const local_path = path.join (process.cwd (), "data", "homepage.json");
    if () {) {
  $2
}
      const local = JSON.parse (fs.readFileSync (local_path, "utf - 8"));
      return res.status (200).json (local);
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  } catch {
    // fall back to remote;
  }
<<<<<<< HEAD
<<<<<<< HEAD
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
;
export default async function handler(req, res) {
  try {
  res.setHeader('Cache-Controls-maxage=60, stale-while-revalidate=600');
  try {
    const localPath = path.join(process.cwd(), 'publicautonomyHOMEPAGE_CONTENT.json'),;
    if (fs.existsSync(localPath)) {;
      try {
        const json = JSON.parse(fs.readFileSync(localPath, 'utf8')),;
        return res.status(200).json(json);
      } catch {;
        // fall back to remote;
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
    const remote = await fetchFromGitHub();
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  if (remote) return res && res.status(200).json(remote);
  return res && res.status(200).json(null);
}

<<<<<<< HEAD
<<<<<<< HEAD
if (remote) return res && res.status(200).json(remote);
  return res && res.status(200).json(null);
}
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const remote = await fetchFromGitHub ();
  if (return res.status (200).json (remote)) {
  $2
}
<<<<<<< HEAD
  return res.status (200).json (null);
}
<<<<<<< HEAD

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export default async function handler(req, res) {
  try {
  res.setHeader('Cache-Controls-maxage=60, stale-while-revalidate=600');
  try {
    const localPath = path.join(process.cwd(), 'publicautonomyHOMEPAGE_CONTENT.json'),;
    if (fs.existsSync(localPath)) {;
      try {
        const json = JSON.parse(fs.readFileSync(localPath, 'utf8')),;
        return res.status(200).json(json);
      } catch {;
        // fall back to remote;
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
    const remote = await fetchFromGitHub();
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
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

}
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

}

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
