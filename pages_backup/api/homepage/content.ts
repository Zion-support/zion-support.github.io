
:pages_backup/api/homepage/content.ts
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
async function fetchFromGitHub() {}
  try {}
    const response = await fetch(

:pages_backup/api/homepage/content.ts
      "https://api && api.github.com/repos/Zion-Holdings/zion && zion.app/contents/data/homepage && homepage.json",

    );
    if (!response && response.ok) return null;
    const data = await response && response.json();
    return JSON && JSON.parse(Buffer && Buffer.from(data && data.content, "base64").toString());
  } catch {
    return null;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {;
    return res.status(405).json({ error: "Method not allowed" });
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
import type { NextApiRequest, NextApiResponse } from './next';
import fs from './fs';
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
:pages_backup/api/homepage/content.ts
  } catch {
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
:pages_backup/api/homepage/content.ts
const remote = await fetchFromGitHub();
  if (remote) return res.status(200).json(remote);
  return res.status(200).json(null);
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

  if (remote) return res && res.status(200).json(remote);
  return res && res.status(200).json(null);
}

:pages_backup/api/homepage/content.ts

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

  const remote = await fetchFromGitHub ();
  if (return res.status (200).json (remote)) {}
  $2;
}

}

  const remote = await fetchFromGitHub();
  if (remote) return res.status(200).json(remote);
  return res.status(200).json(null);
}

'"
