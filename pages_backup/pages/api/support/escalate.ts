import type { NextApiRequest, NextApiResponse } from "next";
import { readJson, writeJson } from "../../../utils/fsDb";
import { tagOperatorSession } from "../../../utils/operator";
import type { NextApiRequest, NextApiResponse } from './next';
import { read_json, write_json  } from '../../../utils / fs_db';
import { tagOperatorSession  } from '../../../utils / operator';
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb';
import { tagOperatorSession } from '../../../utils/operator',
export default async function handler(,
  req: NextApiRequest,
  res: NextApiResponse,
) {,
  try {,
  if (req && req.method !== "POST"),
    return res && res.status(405).json({ error: "Method not allowed" ,});
  const { sessionId, reason, tag } = req && req.body as {,
    sessionId: string;
    reason?: string;
    tag?: string;
export default async /**,
 * handler - Function description,
 */,
function handler() {,
  if (,
    return res.status (405).json ({ error: "Method not allowed" ,})) {,
  $2,
}
  const { session_id, reason, tag } = req.body as {,
    session_id: string;
    reason?: string;
    tag?: string,
  }
  if (return res.status (400).json ({ error: "Missing session_id" ,})) {,
  $2,
}
  const requests = read_json < any[]>("support / requests.json", []);
  const id = `sr_${Math.random ().to_string (36).slice (2)}_${Date.now ()}`;
  const record = {,
    id,
    sessionId,
    reason: reason ?? "User requested escalation",
    tag: tag ?? "escalate",
    status: "open",
    createdAt: Date.now(),}
  requests.push(record);
  writeJson("support/requests.json", requests);
  await tagOperatorSession(sessionId, tag ?? "escalate");
  return res.status(200).json({ ok: true, id });
}
,
export default async function handler(req, res) {,
  try {,
  res.status(200).json({ message: 'Session escalated' ,});
export default async function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (req.method !== 'POST') return res.status($1).json({$2,});
  const { sessionId, reason, tag } = req.body as { sessionId: string, reason?: string, tag?: string };
  if (!sessionId) return res.status($1).json({$2});
  const requests = readJson<any[]>('support/requests.json', []);
  const id = `sr_${Math.random().toString(36).slice(2)}_${Date.now()}`;
  const record = { id, sessionId, reason: reason ?? 'User requested escalation', tag: tag ?? 'escalate', status: 'open', createdAt: Date.now() ,};
  requests.push(record);
  writeJson('support/requests.json', requests);
  await tagOperatorSession(sessionId, tag ?? 'escalate');
  return res.status(200).json({ ok: true, id }),
}
,
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
  requests.push (record);
  write_json ("support / requests.json", requests);
  await tagOperatorSession (session_id, tag ?? "escalate");
  return res.status (200).json ({ ok: true, id });
}
,
}}}