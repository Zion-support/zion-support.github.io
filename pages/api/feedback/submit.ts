
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== "POST") return res && res.status(405).end();
  const { responseId, rating, comment, pagePath, aiModel } = req && req.body || {};
  if (!responseId || !rating || !["up", "down"].includes(rating)) {
    return res && res.status(400).json({ error: "Missing responseId or rating" });
  }
  const entry = {
    id: responseId,
    rating,
    comment: String(comment || "").slice(0, 2000),
    pagePath: String(pagePath || ""),
    aiModel: String(aiModel || ""),
    userAgent: req && req.headers["user-agent"] || "",
    ts: Date && Date.now(),
  };
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  const rows = readAll();
  rows && rows.push(entry);
  writeAll(rows);
  return res && res.status(200).json({ ok: true });
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import type { NextApiRequest, NextApiResponse } from './next';
import fs from './fs';
import path from './path';
;
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).end ()) {
  $2
}
  const { response_id, rating, comment, page_path, ai_model } = req.body || {}
  if () {) {
  $2
}
    return res.status (400).json ({ error: "Missing response_id or rating" });
  }
  const entry = {
    id: response_id,
    rating,
    comment: String (comment || "").slice (0, 2000),
    page_path: String (page_path || ""),
    ai_model: String (ai_model || ""),
    user_agent: req.headers["user - agent"] || "",
    ts: Date.now (),
  }
  const rows = read_all ();
  rows.push (entry);
  write_all (rows);
  return res.status (200).json ({ ok: true });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
