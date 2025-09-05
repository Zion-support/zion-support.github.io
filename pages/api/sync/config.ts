<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import { readState, writeState } from "../../../utils/sync/storage",
import { InstanceConfig, Peer, SyncScope } from "../../../utils/sync/types",
=======
import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { readState, writeState } from &quot;../../../utils/sync/storage&quot;;
import { InstanceConfig, Peer, SyncScope } from &quot;../../../utils/sync/types&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = readState(),
=======
import type {_NextApiRequest, _NextApiResponse} from "next";

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _state = readState();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

<<<<<<< HEAD
  if (req.method === "GET") {
<<<<<<< HEAD
    return res.status(200).json({ config: state.config })
=======
  if (req.method === &quot;GET&quot;) {
    return res.status(200).json({ config: state.config });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }

  if (req.method === &quot;POST&quot;) {
    const { optIn, paused, scope, peers, instanceId } = req.body as Partial<InstanceConfig> & {
      peers?: Peer[],
      scope?: SyncScope,
      instanceId?: string
    },

<<<<<<< HEAD
    if (scope && !["full", "dao", "marketplace"].includes(scope)) {
      return res.status(400).json({ error: "Invalid scope" })
    }

    if (Array.isArray(peers)) {
      state.config.peers = peers.filter((p) => typeof p.baseUrl === "string" && p.baseUrl.length > 0)
    }
    if (typeof optIn === "boolean") state.config.optIn = optIn,
    if (typeof paused === "boolean") state.config.paused = paused,
    if (scope) state.config.scope = scope,
    if (instanceId && typeof instanceId === "string") state.config.instanceId = instanceId,
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

    writeState(state),
    return res.status(200).json({ config: state.config })
  }

<<<<<<< HEAD
  return res.status(405).json({ error: "Method not allowed" })
=======
  return res.status(405).json({ error: &quot;Method not allowed&quot; });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
    return res.status(200).json({ config: state.config});
  }

  if (req.method === "POST") {_const { optIn, _paused, _scope, _peers, _instanceId} = req.body as Partial<InstanceConfig> & {_peers?: Peer[];
      scope?: SyncScope;
      instanceId?: string;};

    if (scope && !["full", "dao", "marketplace"].includes(scope)) {_return res.status(400).json({ error: "Invalid scope"});
    }

    if (Array.isArray(peers)) {_state.config.peers = peers.filter(_(p) => typeof p.baseUrl === "string" && p.baseUrl.length > 0);}
    if (typeof optIn === "boolean") state.config.optIn = optIn;
    if (typeof paused === "boolean") state.config.paused = paused;
    if (scope) state.config.scope = scope;
    if (instanceId && typeof instanceId === "string") state.config.instanceId = instanceId;

    writeState(state);
    return res.status(200).json({_config: state.config});
  }

  return res.status(405).json({_error: "Method not allowed"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}