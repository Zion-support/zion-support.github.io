=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const identity = requireRoles(req, res, ["admin", "maintainer"]),
  if (!identity) return,
  if (req.method === "GET") {
    const nodes = getSourceMapWithExistence()
    const git = getGitStatus()
    res.status(200).json({ nodes, status: { gitConnected: git.connected, gitBranch: git.branch } })
    return
  }

}
  const identity = requireRoles(req, res, ["admin", "maintainer"])
  if (!identity) return
import type { NextApiRequest, NextApiResponse } from "next",;
import { getSourceMapWithExistence, deployBasicTemplateForPath } from "../../../utils/sourceMap",;
import { getGitStatus, requireRoles } from "../../../utils/devAccess",;
;
export default function handler(req: any, res: any) {
  res.status(200).json({ message: 'Source map endpoint' });
import type { NextApiRequest, NextApiResponse } from "next",
import { getSourceMapWithExistence, deployBasicTemplateForPath } from "../../../utils/sourceMap",
import { getGitStatus, requireRoles } from "../../../utils/devAccess",
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
=======  if (req.method === "POST") {
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
  res.setHeader("Allow", "GET, POST"),
  res.status(405).end("Method Not Allowed");
};
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
  }
}
}
=======
=======>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import type { NextApiRequest, NextApiResponse } from './next';,
import { getSourceMapWithExistence, deployBasicTemplateForPath  } from '../../../utils / source_map';,
import { getGitStatus, require_roles  } from '../../../utils / dev_access';,
;
export default /**
 * handler - Function description
 */
function handler() {
  const identity = require_roles (req, res, ["admin", "maintainer"]),
  // Check condition
if (return, ) {
  $2
}
  // Check condition
if ( {) {
  $2
}
    const nodes = getSourceMapWithExistence (),
    const git = getGitStatus (),
    res.status (200).json ({ nodes, status: { git_connected: git.connected, git_branch: git.branch } }),
    return;
  }
  // Check condition
if ( {) {
  $2
}
    const { path: repoRelativePath } = req.body || {},

    if (typeof repoRelativePath !== "string" || !repoRelativePath.startsWith("/")) {
      res.status(400).json({ error: "Invalid path" }),


<<<<<<< HEAD=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
