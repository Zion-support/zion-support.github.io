<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import type { NextApiRequest, NextApiResponse } from "next";
import { readJson, writeJson } from "../../../utils/fsDb";
import { tagOperatorSession } from "../../../utils/operator";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { sessionId, reason, tag } = req && req.body as {
    sessionId: string;
    reason?: string;
    tag?: string;
  }
  if (!sessionId) return res.status(400).json({ error: "Missing sessionId" });
  const requests = readJson<any[]>("support/requests.json", []);
  const id = `sr_${Math.random().toString(36).slice(2)}_${Date.now()}`;
  const record = {
    id
    sessionId
    reason: reason ?? "User requested escalation"
    tag: tag ?? "escalate"
    status: "open"
    createdAt: Date.now()
  }
  requests.push(record);
  writeJson("support/requests.json", requests);
<<<<<<< HEAD
  };
  if (!sessionId) return res && res.status(400).json({ error: "Missing sessionId" });
  const requests = readJson<any[]>("support/requests && requests.json", []);
  const id = `sr_${Math && Math.random().toString(36).slice(2)}_${Date && Date.now()}`;
  const record = {
    id,
    session_id,
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
    created_at: Date.now (),
=======
  await tagOperatorSession(sessionId, tag ?? "escalate");
  return res.status(200).json({ ok: true, id });
}
<<<<<<< HEAD

=======
=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
  res.status(200).json({ message: 'Session escalated' });
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb';
import { tagOperatorSession } from '../../../utils/operator';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status($1).json({$2});
  const { sessionId, reason, tag } = req.body as { sessionId: string, reason?: string, tag?: string };
  if (!sessionId) return res.status($1).json({$2});
  const requests = readJson<any[]>('support/requests.json', []);
  const id = `sr_${Math.random().toString(36).slice(2)}_${Date.now()}`;
  const record = { id, sessionId, reason: reason ?? 'User requested escalation', tag: tag ?? 'escalate', status: 'open', createdAt: Date.now() };
  requests.push(record);
  writeJson('support/requests.json', requests);
  await tagOperatorSession(sessionId, tag ?? 'escalate');
  return res.status(200).json({ ok: true, id })
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  }
  requests.push (record);
  write_json ("support / requests.json", requests);
  await tagOperatorSession (session_id, tag ?? "escalate");
  return res.status (200).json ({ ok: true, id });
}
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
