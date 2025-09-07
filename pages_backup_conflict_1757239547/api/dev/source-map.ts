import type { NextApiRequest, NextApiResponse } from "next";
import { getSourceMapWithExistence, deployBasicTemplateForPath } from "../../../utils/sourceMap";
import { getGitStatus, requireRoles } from "../../../utils/devAccess";

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
  }
}