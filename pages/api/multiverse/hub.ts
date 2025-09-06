<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import { readState } from "../../../utils/sync/storage",
=======
import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { readState } from &quot;../../../utils/sync/storage&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = readState(),

  if (req.method === &quot;GET&quot;) {
    return res.status(200).json({
      route: &quot;/multiverse/hub&quot;,
      instanceId: state.config.instanceId,
      peers: state.config.peers,
      scope: state.config.scope,
      optIn: state.config.optIn,
      paused: state.config.paused,
      lastSyncedAt: state.lastSyncedAt})
  }

<<<<<<< HEAD
  return res.status(405).json({ error: "Method not allowed" })
=======
  return res.status(405).json({ error: &quot;Method not allowed&quot; });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState } from "../../../utils/sync/storage",;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const state = readState(),;
  if (req.method === "GET") {;
    return res.status(200).json({;
      route: "/multiverse/hub",;
      instanceId: state.config.instanceId,;
      peers: state.config.peers,;
      scope: state.config.scope,;
      optIn: state.config.optIn;
      paused: state.config.paused;
      lastSyncedAt: state.lastSyncedAt});
  }
;
  return res.status(405).json({ error: "Method not allowed" });
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}