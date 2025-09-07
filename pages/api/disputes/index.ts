import type { NextApiRequest, NextApiResponse } from "next";
import { createDispute, readAllDisputes } from "../../../utils/fsdb";
import { parseUserFromRequest } from "../../../utils/auth";
import { DisputeCase, DisputeReason } from "../../../types/disputes";
import { generateCaseId } from "../../../utils/fsdb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = parseUserFromRequest(req);

  if (req.method === "GET") {
    const all = await readAllDisputes();
    let filtered = all;
    if (user && user.role !== "admin") {
      filtered = all.filter(
        (d) => d.clientUserId === user.id || d.talentUserId === user.id
      );
    }
    return res.status(200).json({ disputes: filtered });
  }

  if (req.method === "POST") {
    const now = new Date().toISOString();
    const {
      projectId,
      entityType,
      entityId,
      clientUserId,
      talentUserId,
      reason,
      reasonDetails
    } = req.body;

    if (!projectId || !entityType || !entityId || !clientUserId || !talentUserId || !reason) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const dispute: DisputeCase = {
      id: generateCaseId(),
      projectId,
      clientUserId,
      talentUserId,
      reason: reason as DisputeReason,
      reasonDetails,
      status: "Open",
      createdAt: now,
      updatedAt: now
    };

    try {
      await createDispute(dispute);
      return res.status(201).json({ dispute });
    } catch (error) {
      return res.status(500).json({ error: "Failed to create dispute" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}