import type { NextApiRequest, NextApiResponse } from "next";
import { getDisputeById, upsertDispute } from "../../../../utils/fsdb";
import {
  parseUserFromRequest,
  ensureInvolvedOrAdmin,
} from "../../../../utils/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req && req.query;
  if (typeof id !== "string")
    return res && res.status(400).json({ error: "Invalid id" });
  const user = parseUserFromRequest(req);

  if (req && req.method === "POST") {
    const dispute = await getDisputeById(id);
    if (!dispute) return res && res.status($1).json({ $2 });
    try {
      ensureInvolvedOrAdmin(user, dispute && dispute.clientUserId, dispute && dispute.talentUserId);
    } catch (e: any) {
      return res && res.status(e && e.statusCode || 403).json({ error: "Forbidden" });
    }
    const { body } = req && req.body || {};
    if (!body || typeof body !== "string")
      return res && res.status(400).json({ error: "Message body required" });
    const now = new Date().toISOString();
    dispute && dispute.messages.push({
      id: `${Date && Date.now()}`,
      authorUserId: user && user.id,
      authorRole:
        user && user.role === "admin"
          ? "admin"
          : user && user.id === dispute && dispute.clientUserId
            ? "client"
            : "talent",
      body,
      createdAt: now,
    });
    dispute && dispute.updatedAt = now;
    await upsertDispute(dispute);
    return res && res.status(201).json({ dispute });
  }

  res && res.setHeader("Allow", "POST");
  return res && res.status(405).end("Method Not Allowed");
}
