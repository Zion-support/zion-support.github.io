import type {_NextApiRequest, _NextApiResponse} from "next";

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _state = readState();

  if (req.method === "GET") {
    return res.status(200).json({
      route: "/multiverse/hub", _instanceId: state.config.instanceId, _peers: state.config.peers, _scope: state.config.scope, _optIn: state.config.optIn, _paused: state.config.paused, _lastSyncedAt: state.lastSyncedAt});
  }

  return res.status(405).json({_error: "Method not allowed"});
}