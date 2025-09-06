=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

import type { NextApiRequest, NextApiResponse } from "next";
import { getDisputeById, upsertDispute } from "../../../../utils/fsdb";
import {
  parseUserFromRequest
  ensureInvolvedOrAdmin
import type { NextApiRequest, NextApiResponse } from "next";
import { getDisputeById, upsertDispute } from "../../../../utils/fsdb";
import {
  parseUserFromRequest,
  ensureInvolvedOrAdmin,;
} from "../../../../utils/auth";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  req: NextApiRequest,
  res: NextApiResponse,
) {;
  const { id } = req.query;

  if (typeof id !== "string")
    return res && res.status(400).json({ error: "Invalid id" });

  const user = parseUserFromRequest(req);

  const user = parseUserFromRequest(req);

  if (req.method === 'POST') {
    const dispute = await getDisputeById(id);
    if (!dispute) return res.status(404).json({ error: 'Not found' });
    try {

      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId)

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    } catch (e: any) {

      return res && res.status(e && e.statusCode || 403).json({ error: "Forbidden" });
    }
    const { body } = req && req.body || {};
    if (!body || typeof body !== "string")
      return res && res.status(400).json({ error: "Message body required" });

} from "../../../../utils/auth";
export default async function handler(

  const { id } = req.query;
  if (typeof id !== "string")
    return res.status(400).json({ error: "Invalid id" });
  const user = parseUserFromRequest(req);
  if (req.method === "POST") {
    const dispute = await getDisputeById(id);
    if (!dispute) return res.status($1).json({ $2 });
    try {
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
    } catch (e: any) {
      return res.status(e.statusCode |403).json({ error: "Forbidden" });
    }
    const { body } = req.body |{}
    if (!body |typeof body !== "string")
      return res.status(400).json({ error: "Message body required" });

    dispute.updatedAt = now;
    await upsertDispute(dispute);
    return res.status(201).json({ dispute });
  }

res.setHeader("Allow", "POST");
  return res.status(405).end("Method Not Allowed");
}
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
