import type {_NextApiRequest, _NextApiResponse} from "next";

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed"});

  const _state = readState();
  const _peer = req.body as Partial<Peer>;
  if (!peer.baseUrl) return res.status(400).json({_error: "baseUrl required"});

  const _id = peer.id || uuidv4();
  const _existing = state.config.peers.find(_(p) => p.baseUrl === peer.baseUrl);
  if (existing) {_existing.scope = peer.scope || existing.scope;
    existing.paused = typeof peer.paused === "boolean" ? peer.paused : existing.paused;} else {_state.config.peers.push({ id, _baseUrl: peer.baseUrl, _scope: peer.scope || state.config.scope, _paused: false});
  }

  writeState(state);
  return res.status(200).json({_peers: state.config.peers});
}