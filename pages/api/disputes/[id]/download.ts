
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { getDisputeById } from "../../../../utils/fsdb";
import {

<<<<<<< HEAD
=======
  const { id, fileName } = req && req.query as { id?: string; fileName?: string };

=======

  parseUserFromRequest,
  ensureInvolvedOrAdmin,;
} from "../../../../utils/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {;
  const { id, fileName } = req.query as { id?: string; fileName?: string };

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  if (
    !id |
    !fileName |
    typeof id !== "string" |
    typeof fileName !== "string"
  ) {

=======
    return res.status(400).json({ error: "Invalid parameters" });
  }

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

<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Download endpoint' });
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { getDisputeById } from '../../../../utils/fsdb';
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '../../../../utils/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, fileName } = req.query as { id?: string, fileName?: string };
  if (!id || !fileName || typeof id !== 'string' || typeof fileName !== 'string') {
    return res.status(400).json({ error: 'Invalid parameters' })
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }

  const user = parseUserFromRequest(req);
  const dispute = await getDisputeById(id);
<<<<<<< HEAD
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
  } catch (error) {
    return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const att = dispute.attachments.find(a => a.fileName === fileName),
  if (!att) return res.status(404).json({ error: 'Attachment not found' }),
  const stat = fs.statSync(att.path),
  res.setHeader('Content-Type', att.mimeType),
  res.setHeader('Content-Length', String(stat.size)),
  res.setHeader('Content-Disposition', `attachment, filename="${path.basename(att.fileName)}"`),
  const stream = fs.createReadStream(att.path),
  stream.pipe(res)
  const att = dispute.attachments.find(a => a.fileName === fileName);
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  res.setHeader('Content-Type', att.mimeType);
  res.setHeader('Content-Length', String(stat.size)),;
  res.setHeader('Content-Disposition', `attachment, filename="${path.basename(att.fileName)}"`);
  const stream = fs.createReadStream(att.path);
  stream.pipe(res);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

=======
  if (!dispute) return res && res.status($1).json({ $2 });
  try {


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
