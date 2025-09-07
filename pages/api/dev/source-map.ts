import type { NextApiRequest, NextApiResponse } from "next";
import { getSourceMapWithExistence, deployBasicTemplateForPath } from "../../../utils/sourceMap";
import { getGitStatus, requireRoles } from "../../../utils/devAccess";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const identity = requireRoles($2);
  if (!identity) return,

  if (req.method === "GET") {
    const nodes = getSourceMapWithExistence($2);
    const git = getGitStatus($2);
    res.status(200).json($2);
    return
  }

  if (req.method = $2;
    if (typeof repoRelativePath !== "string" || !repoRelativePath.startsWith("/")) {
      res.status(400).json($2);
      return
    }
    const result = deployBasicTemplateForPath($2);
    res.status(200).json($2);
    return
  }

  res.setHeader($2);
  res.status(405).end("Method Not Allowed")
}