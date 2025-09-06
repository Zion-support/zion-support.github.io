<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Source map endpoint' });
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import { getSourceMapWithExistence, deployBasicTemplateForPath } from "../../../utils/sourceMap",
import { getGitStatus, requireRoles } from "../../../utils/devAccess",
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from "next"
import { getSourceMapWithExistence, deployBasicTemplateForPath } from "../../../utils/sourceMap"
import { getGitStatus, requireRoles } from "../../../utils/devAccess"

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const identity = requireRoles(req, res, ["admin", "maintainer"]),
  if (!identity) return,

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const identity = requireRoles(req, res, ["admin", "maintainer"]),
  if (!identity) return,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
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

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
<<<<<<< HEAD


}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======
<<<<<<< HEAD


=======
    if () {) {
  $2
}
      res.status (400).json ({ error: "Invalid path" }),
      return;
    }
    const result = deployBasicTemplateForPath (repoRelativePath),
    res.status (200).json ({ ok: true, result }),
    return;
  }
  res.set_header ("Allow", "GET, POST"),
  res.status (405).end ("Method Not Allowed");
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
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  if (req.method === "POST") {
    const { path: repoRelativePath } = req.body || {},
    if (typeof repoRelativePath !== "string" || !repoRelativePath.startsWith("/")) {
      res.status(400).json({ error: "Invalid path" }),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return
    }
    const result = deployBasicTemplateForPath(repoRelativePath),
    res.status(200).json({ ok: true, result }),
    return
  }

  res.setHeader("Allow", "GET, POST"),
  res.status(405).end("Method Not Allowed");
};
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
=======
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
}
}


<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
