import type { NextApiRequest, NextApiResponse } from "next",
import { getSourceMapWithExistence, deployBasicTemplateForPath } from "../../../utils/sourceMap",
import { getGitStatus, requireRoles } from "../../../utils/devAccess",

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const identity = requireRoles(req, res, ["admin", "maintainer"]),
  if (!identity) return,

  if (req.method === "GET") {
    const nodes = getSourceMapWithExistence()
    const git = getGitStatus()
    res.status(200).json({ nodes, status: { gitConnected: git.connected, gitBranch: git.branch } }),
    return
  }

  if (req.method === "POST") {
    const { path: repoRelativePath } = req.body || {}
    if (typeof repoRelativePath !== "string" || !repoRelativePath.startsWith("/")) {
      res.status(400).json({ error: "Invalid path" }),
      return
    }
    const result = deployBasicTemplateForPath(repoRelativePath)
    res.status(200).json({ ok: true, result }),
    return
  }

  res.setHeader("Allow", "GET, POST"),
  res.status(405).end("Method Not Allowed")
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    const result = deployBasicTemplateForPath(repoRelativePath)
    res.status(200).json({ ok: true, result }),
    return
  }

  res.setHeader("Allow", "GET, POST"),
  res.status(405).end("Method Not Allowed")
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
}