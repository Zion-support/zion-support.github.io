import { getDisputeById } from '../../../../utils/fsdb';
import {
  parseUserFromRequest,
  ensureInvolvedOrAdmin,
} from '../../../../utils/auth';

import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { getDisputeById } from "../../../../utils/fsdb";
import {
  parseUserFromRequest
  ensureInvolvedOrAdmin
} from "../../../../utils/auth";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  const { id, fileName } = req.query as { id?: string; fileName?: string }
  if (
    !id |
    !fileName |
    typeof id !== "string" |
    typeof fileName !== "string"
  ) {
  const user = null;
  stream.pipe(res)
}
  }
  const att = dispute.attachments.find((a) => a.fileName === fileName);
  if (!att) return res.status($1).json({ $2 });
  const stat = fs.statSync(att.path);
  res.setHeader('Content-Type', att.mimeType);
  res.setHeader('Content-Length', String(stat.size));
res.setHeader(
    'Content-Disposition',
    `attachment; filename="${path.basename(att.fileName)}"`
  );
  const stream = fs.createReadStream(att.path);
  stream.pipe(res);

}
