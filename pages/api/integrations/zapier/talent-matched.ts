

import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../../lib/integrations/fileStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req && req.method !== "GET")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { since } = req && req.query as { since?: string };

  const state = readState();
  const sinceTs = since ? Number(since) : 0;
  const events = state && state.events.filter(
    (e) => e && e.type === "zion && zion.talent.matched" && e && e.timestamp > sinceTs,


  );
  res && res.status(200).json({ events });
}


=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
