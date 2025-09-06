<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  getSourceMapWithExistence,
  deployBasicTemplateForPath,;
} from '../../../utils/sourceMap';
import { getGitStatus, requireRoles } from '../../../utils/devAccess';

=======
import type { NextApiRequest, NextApiResponse } from "next";
import { getSourceMapWithExistence, deployBasicTemplateForPath } from "../../../utils/sourceMap";
import { getGitStatus, requireRoles } from "../../../utils/devAccess";
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const identity = requireRoles(req, res, ['admin', 'maintainer']);
  if (!identity) return;
<<<<<<< HEAD

  if (req.method === 'GET') {
    const nodes = getSourceMapWithExistence();
    const git = getGitStatus();
    res.status(200).json({
      nodes,
      status: { gitConnected: git.connected, gitBranch: git.branch },
    });
=======
  if (req.method === "GET") {
    const nodes = getSourceMapWithExistence();
    const git = getGitStatus();
    res.status(200).json({ nodes, status: { gitConnected: git.connected, gitBranch: git.branch } });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    return;
  }

  if (req.method === 'POST') {
    const { path: repoRelativePath } = req.body || {};
<<<<<<< HEAD
    if (
      typeof repoRelativePath !== 'string' ||
      !repoRelativePath.startsWith('/')
    ) {
      res.status(400).json({ error: 'Invalid path' });
=======
    if (typeof repoRelativePath !== "string" || !repoRelativePath.startsWith("/")) {
      res.status(400).json({ error: "Invalid path" });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      return;
    }
    const result = deployBasicTemplateForPath(repoRelativePath);
    res.status(200).json({ ok: true, result });
    return;
  }

<<<<<<< HEAD
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
=======
  res.setHeader("Allow", "GET, POST");
  res.status(405).end("Method Not Allowed")
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
