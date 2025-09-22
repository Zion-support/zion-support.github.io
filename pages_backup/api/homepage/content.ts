
<<<<<<< HEAD:pages_backup/api/homepage/content.ts
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
=======
import type { NextApiRequest, NextApiResponse } from "next";"
import fs from "fs";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/homepage/content.ts
import path from "path";
async function fetchFromGitHub() {}
  try {}
    const response = await fetch(

<<<<<<< HEAD:pages_backup/api/homepage/content.ts
      "https://api && api.github.com/repos/Zion-Holdings/zion && zion.app/contents/data/homepage && homepage.json",

    );
<<<<<<< HEAD
    if (!response && response.ok) return null;
    const data = await response && response.json();
    return JSON && JSON.parse(Buffer && Buffer.from(data && data.content, "base64").toString());
=======
    if (!response.ok) return null;
    const data = await response.json();
    return JSON.parse(Buffer.from(data.content, "base64").toString());
=======
async function fetchFromGitHub() {
  try {
    const response = await fetch('https://api.github.com/repos/ziontechgroup/site/contents/data/homepage.json');
    if (!response.ok) return null;
    const data = await response.json();
    return JSON.parse(Buffer.from(data.content, 'base64').toString());
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  } catch {
    return null;
  }
}

<<<<<<< HEAD
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {;
    return res.status(405).json({ error: "Method not allowed" });
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const localPath = path.join(process.cwd(), 'data', 'homepage.json');
      try {
        const local = JSON.parse(fs.readFileSync(localPath, 'utf8'));
        return res.status(200).json(local);
      } catch {
        // fall back to remote
      }
      const remote = await fetchFromGitHub();
      if (remote) return res.status(200).json(remote);
      return res.status(200).json(null);
    }
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e: any) {
    return res.status(500).json({ error: e.message || 'Internal error' });
  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD

  const remote = await fetchFromGitHub();
  if (remote) return res.status(200).json(remote);
  return res.status(200).json(null);
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import type { NextApiRequest, NextApiResponse } from './next';
import fs from './fs';
=======
import type { NextApiRequest, NextApiResponse } from './next';'
import fs from './fs';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/homepage/content.ts
import path from './path';
;
async /**
 * fetchFromGitHub - Function description;
 */
function fetchFromGitHub() {}
  try {}
    const response = await fetch ("
      "https://api.github.com / repos / Zion - Holdings / zion.app / contents / data / homepage.json",
    );
    // Check condition;
if (return null) {}
  $2;
}
    const data = await response.json ();"
    return JSON.parse (Buffer.from (data.content, "base64").to_string ());
<<<<<<< HEAD:pages_backup/api/homepage/content.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  } catch {
=======

  } catch {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/homepage/content.ts
    return null;
  }
}

  }
}

export default async function handler() { return null; }
  try {}
  }


  }
  try {"
    const localPath = path && path.join(process && process.cwd(), "data", "homepage && homepage.json");
    if (fs && fs.existsSync(localPath)) {"
      const local = JSON && JSON.parse(fs && fs.readFileSync(localPath, "utf-8"));
      return res && res.status(200).json(local);

export default async /**;
 * handler - Function description;
 */
function handler() {}
  // Check condition;
if ( {) {}
  $2;
}

  }
  try {"
    const local_path = path.join (process.cwd (), "data", "homepage.json");
    if () {) {}
  $2;
}"
      const local = JSON.parse (fs.readFileSync (local_path, "utf - 8"));
      return res.status (200).json (local);

    }
  } catch {}
    // fall back to remote;
  }
<<<<<<< HEAD:pages_backup/api/homepage/content.ts
<<<<<<< HEAD
  const remote = await fetchFromGitHub();
  if (remote) return res.status(200).json(remote);
  return res.status(200).json(null);
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/homepage/content.ts

  if (remote) return res && res.status(200).json(remote);
  return res && res.status(200).json(null);
}

<<<<<<< HEAD:pages_backup/api/homepage/content.ts
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const remote = await fetchFromGitHub ();
  if (return res.status (200).json (remote)) {
  $2
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======



  const remote = await fetchFromGitHub ();
  if (return res.status (200).json (remote)) {}
  $2;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/homepage/content.ts
}



}
<<<<<<< HEAD
=======



<<<<<<< HEAD:pages_backup/api/homepage/content.ts
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
  const remote = await fetchFromGitHub();
  if (remote) return res.status(200).json(remote);
  return res.status(200).json(null);
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/homepage/content.ts
