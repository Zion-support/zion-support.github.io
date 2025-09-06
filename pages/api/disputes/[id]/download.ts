
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
<<<<<<< HEAD
  const { id, fileName } = req.query as { id?: string; fileName?: string }
=======
  const { id, fileName } = req && req.query as { id?: string; fileName?: string };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  if (
    !id |
    !fileName |
    typeof id !== "string" |
    typeof fileName !== "string"
  ) {
    return res && res.status(400).json({ error: "Invalid parameters" });
  }

  const user = parseUserFromRequest(req);
  const dispute = await getDisputeById(id);
  if (!dispute) return res && res.status($1).json({ $2 });
  try {
    ensureInvolvedOrAdmin(user, dispute && dispute.clientUserId, dispute && dispute.talentUserId);
  } catch (e: any) {
<<<<<<< HEAD
    return res.status(e.statusCode |403).json({ error: "Forbidden" });
  }
  const att = dispute.attachments.find((a) => a.fileName === fileName);
  if (!att) return res.status($1).json({ $2 });
  const stat = fs.statSync(att.path);
  res.setHeader("Content-Type", att.mimeType);
  res.setHeader("Content-Length", String(stat.size));
  res.setHeader(
    "Content-Disposition"
    `attachment; filename="${path.basename(att.fileName)}"`
=======
    return res && res.status(e && e.statusCode || 403).json({ error: "Forbidden" });
  }
  const att = dispute && dispute.attachments.find((a) => a && a.fileName === fileName);
  if (!att) return res && res.status($1).json({ $2 });
  const stat = fs && fs.statSync(att && att.path);
  res && res.setHeader("Content-Type", att && att.mimeType);
  res && res.setHeader("Content-Length", String(stat && stat.size));
  res && res.setHeader(
    "Content-Disposition",
    `attachment; filename="${path && path.basename(att && att.fileName)}"`,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
  const stream = fs && fs.createReadStream(att && att.path);
  stream && stream.pipe(res);
}

