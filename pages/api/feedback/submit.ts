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