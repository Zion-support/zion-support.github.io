<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { getSourceMapWithExistence, deployBasicTemplateForPath } from "../../../utils/sourceMap";
import { getGitStatus, requireRoles } from "../../../utils/devAccess";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const identity = null;
=======
  const identity = requireRoles(req, res, ["admin", "maintainer"])
  if (!identity) return
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  res.status(405).end("Method Not Allowed")
}
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  getSourceMapWithExistence,
  deployBasicTemplateForPath,;
} from '../../../utils/sourceMap';
import { getGitStatus, requireRoles } from '../../../utils/devAccess';
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const identity = requireRoles(req, res, ['admin', 'maintainer']);
  if (!identity) return;

  if (req.method === 'GET') {
    const nodes = getSourceMapWithExistence();
    const git = getGitStatus();
    res.status(200).json({
      nodes,
      status: { gitConnected: git.connected, gitBranch: git.branch },
    });
    return;
  }

  if (req.method === 'POST') {
    const { path: repoRelativePath } = req.body || {};
    if (
      typeof repoRelativePath !== 'string' ||
      !repoRelativePath.startsWith('/')
    ) {
      res.status(400).json({ error: 'Invalid path' });
      return;
    }
    const result = deployBasicTemplateForPath(repoRelativePath);
    res.status(200).json({ ok: true, result });
    return;
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
