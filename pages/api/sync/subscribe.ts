<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import { readState, writeState } from "../../../utils/sync/storage",
import { Peer } from "../../../utils/sync/types",
import { v4 as uuidv4 } from "uuid",
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),

  const state = readState(),
  const peer = req.body as Partial<Peer>,
  if (!peer.baseUrl) return res.status(400).json({ error: "baseUrl required" }),
=======
import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { readState, writeState } from &quot;../../../utils/sync/storage&quot;;
import { Peer } from &quot;../../../utils/sync/types&quot;;
import { v4 as uuidv4 } from &quot;uuid&quot;;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;POST&quot;) return res.status(405).json({ error: &quot;Method not allowed&quot; });

  const state = readState();
  const peer = req.body as Partial<Peer>;
  if (!peer.baseUrl) return res.status(400).json({ error: &quot;baseUrl required&quot; });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const id = peer.id || uuidv4(),
  const existing = state.config.peers.find((p) => p.baseUrl === peer.baseUrl),
  if (existing) {
<<<<<<< HEAD
    existing.scope = peer.scope || existing.scope,
    existing.paused = typeof peer.paused === "boolean" ? peer.paused : existing.paused
=======
    existing.scope = peer.scope || existing.scope;
    existing.paused = typeof peer.paused === &quot;boolean&quot; ? peer.paused : existing.paused;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  } else {
    state.config.peers.push({ id, baseUrl: peer.baseUrl, scope: peer.scope || state.config.scope, paused: false })
  }

  writeState(state),
  return res.status(200).json({ peers: state.config.peers })
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}