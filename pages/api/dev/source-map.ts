

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const identity = requireRoles(req, res, ["admin", "maintainer"]),
  if (!identity) return,
  if (req.method === "GET") {
    const nodes = getSourceMapWithExistence()
    const git = getGitStatus()
    res.status(200).json({ nodes, status: { gitConnected: git.connected, gitBranch: git.branch } })
    return
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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


