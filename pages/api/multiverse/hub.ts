import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { readState } from &quot;../../../utils/sync/storage&quot;;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = readState();

  if (req.method === &quot;GET&quot;) {
    return res.status(200).json({
      route: &quot;/multiverse/hub&quot;,
      instanceId: state.config.instanceId,
      peers: state.config.peers,
      scope: state.config.scope,
      optIn: state.config.optIn,
      paused: state.config.paused,
      lastSyncedAt: state.lastSyncedAt});
  }

  return res.status(405).json({ error: &quot;Method not allowed&quot; });
}