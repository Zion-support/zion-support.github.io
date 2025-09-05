import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { readState, writeState } from &quot;../../../utils/sync/storage&quot;;
import { InstanceConfig, Peer, SyncScope } from &quot;../../../utils/sync/types&quot;;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = readState();

  if (req.method === &quot;GET&quot;) {
    return res.status(200).json({ config: state.config });
  }

  if (req.method === &quot;POST&quot;) {
    const { optIn, paused, scope, peers, instanceId } = req.body as Partial<InstanceConfig> & {
      peers?: Peer[];
      scope?: SyncScope;
      instanceId?: string;
    };

    if (scope && ![&quot;full&quot;, &quot;dao&quot;, &quot;marketplace&quot;].includes(scope)) {
      return res.status(400).json({ error: &quot;Invalid scope&quot; });
    }

    if (Array.isArray(peers)) {
      state.config.peers = peers.filter((p) => typeof p.baseUrl === &quot;string&quot; && p.baseUrl.length > 0);
    }
    if (typeof optIn === &quot;boolean&quot;) state.config.optIn = optIn;
    if (typeof paused === &quot;boolean&quot;) state.config.paused = paused;
    if (scope) state.config.scope = scope;
    if (instanceId && typeof instanceId === &quot;string&quot;) state.config.instanceId = instanceId;

    writeState(state);
    return res.status(200).json({ config: state.config });
  }

  return res.status(405).json({ error: &quot;Method not allowed&quot; });
}