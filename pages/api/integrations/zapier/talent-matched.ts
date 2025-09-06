import type { NextApiRequest, NextApiResponse } from './next';
import { read_state  } from '../../../../lib / integrations / file_store';
;
export default /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: "Method not allowed" })) {
  $2
}
  const { since } = req.query as { since?: string }
  const state = read_state ();
  const since_ts = since ? Number (since) : 0;
  const events = state.events.filter (
    (e) => e.type === "zion.talent.matched" && e.timestamp > since_ts,
  );
  res.status (200).json ({ events });
}