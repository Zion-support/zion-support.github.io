<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { getDisputeById } from '[^']*';
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '[^']*';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });
  const user = null;
  return res.status(405).end('Method Not Allowed')
}
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { getDisputeById } from "../../../utils/fsdb";
import {
  parseUserFromRequest
  ensureInvolvedOrAdmin
} from "../../../utils/auth";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  const { id } = req.query;
  if (typeof id !== "string")
    return res.status(400).json({ error: "Invalid id" });
  const user = parseUserFromRequest(req);
  if (req.method === "GET") {
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { getDisputeById } from '../../../utils/fsdb';
import {
  parseUserFromRequest,
  ensureInvolvedOrAdmin,;
} from '../../../utils/auth';
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  if (typeof id !== 'string')
    return res.status(400).json({ error: 'Invalid id' });
  
}

const user = parseUserFromRequest(req);

  if (req.method === 'GET') {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    const dispute = await getDisputeById(id);
    if (!dispute) return res.status(404).json({ error: "Dispute not found" });
    try {
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
    } catch (e: any) {
<<<<<<< HEAD
      return res.status(e.statusCode |403).json({ error: "Forbidden" });
    }
    return res.status(200).json({ dispute });
  }
  res.setHeader("Allow", "GET");
  return res.status(405).end("Method Not Allowed");
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
   
}
    return res.status(200).json({ dispute });
 
}

  res.setHeader('Allow', 'GET');
  return res.status(405).end('Method Not Allowed');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
