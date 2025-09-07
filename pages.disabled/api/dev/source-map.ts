import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD:pages/api/dev/source-map.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

=======
export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Source map endpoint' });
}

import type { NextApiRequest, NextApiResponse } from "next";
import { getSourceMapWithExistence, deployBasicTemplateForPath } from "../../../utils/sourceMap";
import { getGitStatus, requireRoles } from "../../../utils/devAccess";
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const identity = requireRoles(req, res, ["admin", "maintainer"])
  if (!identity) return
import type { NextApiRequest, NextApiResponse } from "next",;
import { getSourceMapWithExistence, deployBasicTemplateForPath } from "../../../utils/sourceMap",;
import { getGitStatus, requireRoles } from "../../../utils/devAccess",;
;
export default function handler(req: any, res: any) {
  res.status(200).json({ message: 'Source map endpoint' });

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const identity = requireRoles(req, res, ["admin", "maintainer"]),
  if (!identity) return,

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

import type { NextApiRequest, NextApiResponse } from './next';
import { getSourceMapWithExistence, deployBasicTemplateForPath  } from '../../../utils / source_map';
import { getGitStatus, require_roles  } from '../../../utils / dev_access';

;
export default /**
 * handler - Function description
 */
function handler() {
  const identity = require_roles (req, res, ["admin", "maintainer"])
  // Check condition
if (return, ) {
  $2
}
  // Check condition
if ( {) {
  $2
}
    const nodes = getSourceMapWithExistence ()
    const git = getGitStatus ()
    res.status (200).json ({ nodes, status: { git_connected: git.connected, git_branch: git.branch } })
    return;
  }
  // Check condition
if ( {) {
  $2
}
    const { path: repoRelativePath } = req.body || {}

    if (typeof repoRelativePath !== "string" || !repoRelativePath.startsWith("/")) {

      return;
import type { NextApiRequest, NextApiResponse } from "next";
import { getSourceMapWithExistence, deployBasicTemplateForPath } from "../../../utils/sourceMap";
import { getGitStatus, requireRoles } from "../../../utils/devAccess";
export default function handler(req, res) {
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages.disabled/api/dev/source-map.ts
  try {
    // TODO: Implement sourcemap logic
    res.status(200).json({ message: 'sourcemap endpoint' });
  } catch (error) {
    console.error('Error in sourcemap:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
<<<<<<< HEAD:pages/api/dev/source-map.ts
}
=======
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

}
}

origin/cursor/expand-services-advertise-and-build-project-c28b

main
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages.disabled/api/dev/source-map.ts
