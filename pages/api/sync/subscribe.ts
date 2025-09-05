import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { readState, writeState } from &quot;../../../utils/sync/storage&quot;;
import { Peer } from &quot;../../../utils/sync/types&quot;;
import { v4 as uuidv4 } from &quot;uuid&quot;;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;POST&quot;) return res.status(405).json({ error: &quot;Method not allowed&quot; });

  const state = readState();
  const peer = req.body as Partial<Peer>;
  if (!peer.baseUrl) return res.status(400).json({ error: &quot;baseUrl required&quot; });

  const id = peer.id || uuidv4();
  const existing = state.config.peers.find((p) => p.baseUrl === peer.baseUrl);
  if (existing) {
    existing.scope = peer.scope || existing.scope;
    existing.paused = typeof peer.paused === &quot;boolean&quot; ? peer.paused : existing.paused;
  } else {
    state.config.peers.push({ id, baseUrl: peer.baseUrl, scope: peer.scope || state.config.scope, paused: false });
  }

  writeState(state);
  return res.status(200).json({ peers: state.config.peers });
}