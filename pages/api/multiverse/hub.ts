import type { NextApiRequest, NextApiResponse } from "next",
import { readState } from "../../../utils/sync/storage"
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = readState()
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = readState()
import type {_NextApiRequest, _NextApiResponse} from "next";
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _state = readState();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

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

>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
}