import type {_NextApiRequest, _NextApiResponse} from "next";

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _state = readState();

  if (req.method === "GET") {
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
}