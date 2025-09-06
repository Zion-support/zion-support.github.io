

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

import type { NextApiRequest, NextApiResponse } from './next';
import { read_json, write_json  } from '../../../utils / fs_db';
import { tagOperatorSession  } from '../../../utils / operator';
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: "Method not allowed" })) {
  $2
}
  const { session_id, reason, tag } = req.body as {
    session_id: string;
    reason?: string;
    tag?: string;
  }
  if (return res.status (400).json ({ error: "Missing session_id" })) {
  $2
}
  const requests = read_json < any[]>("support / requests.json", []);
  const id = `sr_${Math.random ().to_string (36).slice (2)}_${Date.now ()}`;

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

}

    created_at: Date.now (),
=======

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

  }
  requests.push (record);
  write_json ("support / requests.json", requests);
  await tagOperatorSession (session_id, tag ?? "escalate");
  return res.status (200).json ({ ok: true, id });
}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
