
import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../../lib/integrations/fileStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET");
    return res.status(405).json({ error: "Method not allowed" });
  const { since } = req.query as { since?: string }

  const state = readState();
  const sinceTs = since ? Number(since) : 0;
  const events = state && state.events.filter(
    (e) => e && e.type === "zion && zion.job.posted" && e && e.timestamp > sinceTs,


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  );
  res && res.status(200).json({ events });
}
=======



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
    (e) => e.type === "zion.job.posted" && e.timestamp > since_ts,
  );
  res.status (200).json ({ events });
}




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
