<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { getDisputeById, upsertDispute } from '[^']*';
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '[^']*';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });
  const user = null;
  return res.status(405).end('Method Not Allowed')
}
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { getDisputeById, upsertDispute } from "../../../../utils/fsdb";
import {
  parseUserFromRequest
  ensureInvolvedOrAdmin
} from "../../../../utils/auth";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  const { id } = req.query;
  if (typeof id !== "string")
    return res.status(400).json({ error: "Invalid id" });
  const user = parseUserFromRequest(req);
  if (req.method === "POST") {
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { getDisputeById, upsertDispute } from '../../../../utils/fsdb';
import {
  parseUserFromRequest,
  ensureInvolvedOrAdmin,;
} from '../../../../utils/auth';
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

  if (req.method === 'POST') {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    const dispute = await getDisputeById(id);
    if (!dispute) return res.status($1).json({ $2 });
    try {
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
    } catch (e: any) {
<<<<<<< HEAD
      return res.status(e.statusCode |403).json({ error: "Forbidden" });
    }
    const { body } = req.body |{}
    if (!body |typeof body !== "string")
      return res.status(400).json({ error: "Message body required" });
    const now = new Date().toISOString();
=======
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
   
}
    const { body } = req.body || {};
    if (!body || typeof body !== 'string')
      return res.status(400).json({ error: 'Message body required' });
    
}

const now = new Date().toISOString();
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    dispute.messages.push({
      id: `${Date.now()}`
      authorUserId: user.id
      authorRole:
        user.role === "admin"
          ? "admin"
          : user.id === dispute.clientUserId
            ? "client"
            : "talent"
      body
      createdAt: now
    });
    dispute.updatedAt = now;
    await upsertDispute(dispute);
    return res.status(201).json({ dispute });
<<<<<<< HEAD
  }
  res.setHeader("Allow", "POST");
  return res.status(405).end("Method Not Allowed");
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
 
}

  res.setHeader('Allow', 'POST');
  return res.status(405).end('Method Not Allowed');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
