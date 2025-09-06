<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
import { getDisputeById } from '[^']*';
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '[^']*';
=======
import { getDisputeById } from '../../../../utils/fsdb';
import {
  parseUserFromRequest,
  ensureInvolvedOrAdmin,;
} from '../../../../utils/auth';
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

=======
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { getDisputeById } from "../../../../utils/fsdb";
import {
  parseUserFromRequest
  ensureInvolvedOrAdmin
} from "../../../../utils/auth";
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
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
<<<<<<< HEAD
    return res.status(400).json({ error: "Invalid parameters" });
  }
<<<<<<< HEAD
  const user = null;
  stream.pipe(res)
}
=======
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
=======
    return res.status(400).json({ error: 'Invalid parameters' });
 
}
  const user = parseUserFromRequest(req);

  const dispute = await getDisputeById(id);
  if (!dispute) return res.status(404).json({ error: 'Not found' });
  try {
    ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
  } catch (e: any) {
    return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
 
}
  const att = dispute.attachments.find(a => a.fileName === fileName);
  if (!att) return res.status(404).json({ error: 'Attachment not found' });

  
}

const stat = fs.statSync(att.path);
  res.setHeader('Content-Type', att.mimeType);
  res.setHeader('Content-Length', String(stat.size));
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  res.setHeader(
    "Content-Disposition"
    `attachment; filename="${path.basename(att.fileName)}"`
  );
  const stream = fs.createReadStream(att.path);
  stream.pipe(res);
<<<<<<< HEAD
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
