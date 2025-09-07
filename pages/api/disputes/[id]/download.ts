<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";"
import fs from "fs";"
import path from "path";"
import { getDisputeById } from "../../../../utils/fsdb";"
=======
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { getDisputeById } from "../../../../utils/fsdb";
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
import {
  }
  parseUserFromRequest,
  ensureInvolvedOrAdmin
} from "../../../../utils/auth";"

<<<<<<< HEAD
export default async function handler() {
  }
=======
  parseUserFromRequest

  ensureInvolvedOrAdmin;
} from "../../../../utils/auth";

export default async function handler(

  req: NextApiRequest
  res: NextApiResponse
) {;
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
  const { id, fileName } = req.query as { id?: string; fileName?: string };

  if (
    !id ||
    !fileName ||
    typeof id !== "string" ||"
    typeof fileName !== "string""
  ) {
    }
    return res.status(400).json({ "error": "Invalid parameters" });"
  }

  const user = parseUserFromRequest(req);
  const dispute = await getDisputeById(id);
  if (!dispute) return res.status($1).json({ { error: "Invalid request" } });
  try {
    }
    ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
  } catch ("e": any) {
    }
    return res.status(e.statusCode || 403).json({ "error": "Forbidden" });"
  }
  const att = dispute.attachments.find((a) => a.fileName === fileName);
  if (!att) return res.status($1).json({ { error: "Invalid request" } });
  const stat = fs.statSync(att.path);
  res.setHeader("Content-Type", att.mimeType);"
  res.setHeader("Content-Length", String(stat.size));"
  res.setHeader(
    "Content-Disposition","
    `attachment; filename="${path.basename(att.fileName)}"`,`
  );

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { getDisputeById } from '../../../../utils/fsdb';
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '../../../../utils/auth';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, fileName } = req.query as { id?: string, fileName?: string }
  if (!id || !fileName || typeof id !== 'string' || typeof fileName !== 'string') {
    return res.status(400).json({ error: 'Invalid parameters' })

  }
  const user = parseUserFromRequest({ error: "Invalid request" });
  const dispute = await getDisputeById({ error: "Invalid request" });
  if (!dispute) return res.status(404).json({ error: "Invalid request" });
  try {

<<<<<<< HEAD
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ download: 'available' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
}
}}}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
