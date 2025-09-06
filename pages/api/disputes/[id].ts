
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
  const { id } = req && req.query;
  if (typeof id !== "string")
<<<<<<< HEAD
    return res.status(400).json({ error: "Invalid id" });
  const user = parseUserFromRequest(req);
  if (req.method === "GET") {
=======
    return res && res.status(400).json({ error: "Invalid id" });

  const user = parseUserFromRequest(req);

  if (req && req.method === "GET") {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    const dispute = await getDisputeById(id);
    if (!dispute) return res && res.status(404).json({ error: "Dispute not found" });
    try {
      ensureInvolvedOrAdmin(user, dispute && dispute.clientUserId, dispute && dispute.talentUserId);
    } catch (e: any) {
<<<<<<< HEAD
      return res.status(e.statusCode |403).json({ error: "Forbidden" });
=======
      return res && res.status(e && e.statusCode || 403).json({ error: "Forbidden" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
    return res && res.status(200).json({ dispute });
  }
<<<<<<< HEAD
  res.setHeader("Allow", "GET");
  return res.status(405).end("Method Not Allowed");
=======

  res && res.setHeader("Allow", "GET");
  return res && res.status(405).end("Method Not Allowed");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}

