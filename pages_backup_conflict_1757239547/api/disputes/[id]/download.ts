<<<<<<< HEAD:pages/api/disputes/[id]/download.ts
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { getDisputeById } from '[^']*';
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '[^']*';

>>>>>>> bcac19d12791e22762b61b5dda2306d7f19fe60c:pages_backup_conflict_1757239547/api/disputes/[id]/download.ts
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { getDisputeById } from "../../../../utils/fsdb";
import {
<<<<<<< HEAD:pages/api/disputes/[id]/download.ts
  parseUserFromRequest,
=======
  parseUserFromRequest
>>>>>>> bcac19d12791e22762b61b5dda2306d7f19fe60c:pages_backup_conflict_1757239547/api/disputes/[id]/download.ts
  ensureInvolvedOrAdmin
} from "../../../../utils/auth";

export default async function handler(
<<<<<<< HEAD:pages/api/disputes/[id]/download.ts
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, fileName } = req.query as { id?: string; fileName?: string };

=======
  req: NextApiRequest
  res: NextApiResponse
) {
  const { id, fileName } = req.query as { id?: string; fileName?: string }
>>>>>>> bcac19d12791e22762b61b5dda2306d7f19fe60c:pages_backup_conflict_1757239547/api/disputes/[id]/download.ts
  if (
    !id ||
    !fileName ||
    typeof id !== "string" ||
    typeof fileName !== "string"
  ) {
<<<<<<< HEAD:pages/api/disputes/[id]/download.ts
    return res.status(400).json({ error: 'Invalid parameters' });
=======
    return res.status(400).json({ error: "Invalid parameters" });
>>>>>>> bcac19d12791e22762b61b5dda2306d7f19fe60c:pages_backup_conflict_1757239547/api/disputes/[id]/download.ts
  }

  const user = parseUserFromRequest(req);
  const dispute = await getDisputeById(id);
  if (!dispute) return res.status(404).json({ error: 'Dispute not found' });
  
  try {
    ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
  } catch (e: any) {
    return res.status(e.statusCode || 403).json({ error: "Forbidden" });
  }
  
  const att = dispute.attachments.find((a) => a.fileName === fileName);
  if (!att) return res.status(404).json({ error: 'Attachment not found' });
  
  const stat = fs.statSync(att.path);
  res.setHeader("Content-Type", att.mimeType);
  res.setHeader("Content-Length", String(stat.size));
  res.setHeader(
    "Content-Disposition",
    `attachment; filename="${path.basename(att.fileName)}"`
  );
<<<<<<< HEAD:pages/api/disputes/[id]/download.ts
  
=======
>>>>>>> bcac19d12791e22762b61b5dda2306d7f19fe60c:pages_backup_conflict_1757239547/api/disputes/[id]/download.ts
  const stream = fs.createReadStream(att.path);
  stream.pipe(res);
}