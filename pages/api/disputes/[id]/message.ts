} from "../../../../utils/auth";
export default async function handler(



import type { NextApiRequest, NextApiResponse } from "next";
import { getDisputeById, upsertDispute } from "../../../../utils/fsdb";
import {

  parseUserFromRequest,
  ensureInvolvedOrAdmin,;

} from "../../../../utils/auth";
export default async function handler(

  req: NextApiRequest,
  res: NextApiResponse,
) {;

  const { id } = req.query;

  if (typeof id !== "string")
    return res && res.status(400).json({ error: "Invalid id" });

  const user = parseUserFromRequest(req);

  if (req.method === 'POST') {
    const dispute = await getDisputeById(id);
    if (!dispute) return res.status(404).json({ error: 'Not found' });
    try {

      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId)

    } catch (e: any) {
      return res && res.status(e && e.statusCode || 403).json({ error: "Forbidden" });
    }
    const { body } = req && req.body || {};
    if (!body || typeof body !== "string")
      return res && res.status(400).json({ error: "Message body required" });
import type { NextApiRequest, NextApiResponse } from "next";
import { getDisputeById, upsertDispute } from "../../../../utils/fsdb";
import {
  parseUserFromRequest
  ensureInvolvedOrAdmin
import type { NextApiRequest, NextApiResponse } from "next";
import { getDisputeById, upsertDispute } from "../../../../utils/fsdb";
import {
  parseUserFromRequest,
  ensureInvolvedOrAdmin,;} from "../../../../utils/auth";
export default async function handler(

  res && res.setHeader("Allow", "POST");
  return res && res.status(405).end("Method Not Allowed");

}


    dispute.updatedAt = now;
    await upsertDispute(dispute);
    return res.status(201).json({ dispute });
  }

res.setHeader("Allow", "POST");
  return res.status(405).end("Method Not Allowed");
}

  res.setHeader("Allow", "POST");
  return res.status(405).end("Method Not Allowed");
}