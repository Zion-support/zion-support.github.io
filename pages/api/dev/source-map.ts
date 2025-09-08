import type { NextApiRequest, NextApiResponse } from "next";
import { getSourceMapWithExistence, deployBasicTemplateForPath } from "../../../utils/sourceMap";
import { getGitStatus, requireRoles } from "../../../utils/devAccess";
export default function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  const identity = requireRoles(req, res, ["admin", "maintainer"]);
  if (!identity) return;
  if (req.method === "GET") {
    const nodes = getSourceMapWithExistence();
    const git = getGitStatus();
    res.status(200).json({ nodes, s,
    tatus: {,
    gitConnected: git.connected, g,
    itBranch: git.branch } });
    return
  }

  if (req.method === "POST") {
    const {,
    path: repoRelativePath } = req.body || {};
    if (typeof repoRelativePath !== "string" || !repoRelativePath.startsWith("/")) {
      res.status(400).json({,
    error: "Invalid path" });
      return
    }
    const result = deployBasicTemplateForPath(repoRelativePath);
    res.status(200).json({,
    ok: true, result });
    return
  }
}