<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
async function fetchFromGitHub() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/Zion-Holdings/zion.app/contents/data/homepage.json"
    );
    if (!response.ok) return null;
    const data = await response.json();
    return JSON.parse(Buffer.from(data.content, "base64").toString());
  } catch {
    return null;
  }
}
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
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
<<<<<<< HEAD
=======
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
