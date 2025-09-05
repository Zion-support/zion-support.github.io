import type { NextApiRequest, NextApiResponse } from "next",
import { readState } from "../../../utils/sync/storage",export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = readState(),
import type {_NextApiRequest, _NextApiResponse} from "next";

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _state = readState();

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

  return res.status(405).json({ error: "Method not allowed" })      route: "/multiverse/hub", _instanceId: state.config.instanceId, _peers: state.config.peers, _scope: state.config.scope, _optIn: state.config.optIn, _paused: state.config.paused, _lastSyncedAt: state.lastSyncedAt});
  }

  return res.status(405).json({_error: "Method not allowed"});
}