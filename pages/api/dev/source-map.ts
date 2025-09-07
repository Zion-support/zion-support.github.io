import type { NextApiRequest, NextApiResponse } from "next";
import { getSourceMapWithExistence, deployBasicTemplateForPath } from "../../../utils/sourceMap";
import { getGitStatus, requireRoles } from "../../../utils/devAccess";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const identity = requireRoles(req, res, ["admin", "maintainer"]);
  if (!identity) return;

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { path: filePath } = req.query as { path?: string };
    if (!filePath) {
      return res.status(400).json({ error: 'Missing path parameter' });
    }

    const sourceMap = getSourceMapWithExistence(filePath);
    const gitStatus = getGitStatus();

    res.status(200).json({
      sourceMap,
      gitStatus
    });
  } catch (error) {
    console.error('Error getting source map:', error);
    res.status(500).json({ error: 'Failed to get source map' });
  }
}