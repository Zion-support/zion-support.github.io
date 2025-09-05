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
=======
import type {_NextApiRequest, _NextApiResponse} from "next";

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _state = readState();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (req.method === &quot;GET&quot;) {
    return res.status(200).json({
<<<<<<< HEAD
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
      route: "/multiverse/hub", _instanceId: state.config.instanceId, _peers: state.config.peers, _scope: state.config.scope, _optIn: state.config.optIn, _paused: state.config.paused, _lastSyncedAt: state.lastSyncedAt});
  }

  return res.status(405).json({_error: "Method not allowed"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}