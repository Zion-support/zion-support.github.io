import type { NextApiRequest, NextApiResponse } from "next";
import { getSourceMapWithExistence, deployBasicTemplateForPath } from "../../../utils/sourceMap";
import { getGitStatus, requireRoles } from "../../../utils/devAccess";
<<<<<<< HEAD:pages/api/dev/source-map.ts

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const identity = requireRoles(req, res, ["admin", "maintainer"]);
  if (!identity) return;

  if (req.method === 'GET') {
    try {
      const gitStatus = getGitStatus();
      const sourceMap = getSourceMapWithExistence();
      res.status(200).json({ gitStatus, sourceMap });
    } catch (error) {
      res.status(500).json({ error: 'Failed to get source map' });
    }
  } else if (req.method === 'POST') {
    try {
      const { path } = req.body;
      if (!path) {
        return res.status(400).json({ error: 'Path required' });
      }
      const result = deployBasicTemplateForPath(path);
      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ error: 'Failed to deploy template' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const identity = requireRoles(req, res, ["admin", "maintainer"])
  if (!identity) return
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const identity = requireRoles(req, res, ["admin", "maintainer"]),
  if (!identity) return,
  if (req.method === "GET") {
    const nodes = getSourceMapWithExistence()
    const git = getGitStatus()
    res.status(200).json({ nodes, status: { gitConnected: git.connected, gitBranch: git.branch } })
    return
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
  if (req.method === "POST") {
    const { path: repoRelativePath } = req.body |{}
    if (typeof repoRelativePath !== "string" |!repoRelativePath.startsWith("/")) {
      res.status(400).json({ error: "Invalid path" })
      return
    }
    const result = deployBasicTemplateForPath(repoRelativePath)
    res.status(200).json({ ok: true, result })
    return
  }
  res.setHeader("Allow", "GET, POST")

  res.status(405).end("Method Not Allowed")
}
      return;
import type { NextApiRequest, NextApiResponse } from "next";
import { getSourceMapWithExistence, deployBasicTemplateForPath } from "../../../utils/sourceMap";
import { getGitStatus, requireRoles } from "../../../utils/devAccess";
export default function handler(req, res) {
  try {
  const identity = requireRoles(req, res, ["admin", "maintainer"]);
  if (!identity) return,;
  if (req.method === "GET") {;
    const nodes = getSourceMapWithExistence();
    const git = getGitStatus();
    res.status(200).json({ nodes, status: { gitConnected: git.connected, gitBranch: git.branch } });
    return;
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
  if (req.method === "POST") {;
    const { path: repoRelativePath } = req.body || {};
    if (typeof repoRelativePath !== "string" || !repoRelativePath.startsWith("/")) {;
      res.status(400).json({ error: "Invalid path" });
      return;
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
    const result = deployBasicTemplateForPath(repoRelativePath);
    res.status(200).json({ ok: true, result });
    return;
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
  res.setHeader("Allow", "GET, POST"),
  res.status(405).end("Method Not Allowed")
;
  res.setHeader("Allow", "GET, POST");
  res.status(405).end("Method Not Allowed");
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
>>>>>>> bcac19d12791e22762b61b5dda2306d7f19fe60c:pages_backup_conflict_1757239547/api/dev/source-map.ts
  }
}