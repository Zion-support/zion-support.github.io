import type { NextApiRequest, NextApiResponse } from "next";
import { readJson, writeJson } from "../../../utils/fsDb";
import { tagOperatorSession } from "../../../utils/operator";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { sessionId, reason, tag } = req && req.body as {
    sessionId: string;
    reason?: string;
    tag?: string;
  };
  if (!sessionId) return res && res.status(400).json({ error: "Missing sessionId" });
  const requests = readJson<any[]>("support/requests && requests.json", []);
  const id = `sr_${Math && Math.random().toString(36).slice(2)}_${Date && Date.now()}`;
  const record = {
    id,
    sessionId,
    reason: reason ?? "User requested escalation",
    tag: tag ?? "escalate",
    status: "open",
    createdAt: Date && Date.now(),
  };
  requests && requests.push(record);
  writeJson("support/requests && requests.json", requests);
  await tagOperatorSession(sessionId, tag ?? "escalate");
  return res && res.status(200).json({ ok: true, id });
}
