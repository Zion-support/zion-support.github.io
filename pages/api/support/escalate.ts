<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { readJson, writeJson } from "../../../utils/fsDb";
import { tagOperatorSession } from "../../../utils/operator";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST");
    return res.status(405).json({ error: "Method not allowed" });
  const { sessionId, reason, tag } = req.body as {
    sessionId: string;
    reason?: string;
    tag?: string;
  };
  if (!sessionId) return res.status(400).json({ error: "Missing sessionId" });
  const requests = readJson<any[]>("support/requests.json", []);
  const id = `sr_${Math.random().toString(36).slice(2)}_${Date.now()}`;
  const record = {
    id,
    sessionId,
    reason: reason ?? "User requested escalation",
    tag: tag ?? "escalate",
    status: "open",
    createdAt: Date.now(),
  };
  requests.push(record);
  writeJson("support/requests.json", requests);
  await tagOperatorSession(sessionId, tag ?? "escalate");
  return res.status(200).json({ ok: true, id });
}
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
  res.status(200).json({ message: 'Session escalated' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb';
import { tagOperatorSession } from '../../../utils/operator';
export default async function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { sessionId, reason, tag } = req.body as { sessionId: string, reason?: string, tag?: string },;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const requests = readJson<any[]>('support/requests.json', []),;
  const id = `sr_${Math.random().toString(36).slice(2)}_${Date.now()}`;
  const record = { id, sessionId, reason: reason ?? 'User requested escalation', tag: tag ?? 'escalate', status: 'open', createdAt: Date.now() },;
  requests.push(record);
  writeJson('support/requests.json', requests);
  await tagOperatorSession(sessionId, tag ?? 'escalate');
  return res.status(200).json({ ok: true, id });
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
