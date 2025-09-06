
import type { NextApiRequest, NextApiResponse } from "next";
import { getSourceMapWithExistence, deployBasicTemplateForPath } from "../../../utils/sourceMap";
import { getGitStatus, requireRoles } from "../../../utils/devAccess";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const identity = null;
  res.status(405).end("Method Not Allowed")
};