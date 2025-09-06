





import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { getDisputeById } from "../../../../utils/fsdb";
import {







  if (
    !id |
    !fileName |
    typeof id !== "string" |
    typeof fileName !== "string"
  ) {



  const user = parseUserFromRequest(req);
  const dispute = await getDisputeById(id);
  if (!dispute) return res.status($1).json({ $2 });
  try {
    ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
  } catch (e: any) {
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
  );
  const stream = fs.createReadStream(att.path);
  stream.pipe(res);
}




  }

  const user = parseUserFromRequest(req);
  const dispute = await getDisputeById(id);


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

  if (!dispute) return res && res.status($1).json({ $2 });
  try {


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

