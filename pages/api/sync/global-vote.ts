import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { readState, writeState, upsertEvent } from &quot;../../../utils/sync/storage&quot;;
import { computeMerkleRootFromVotes } from &quot;../../../utils/sync/merkle&quot;;
import { signPayload } from &quot;../../../utils/sync/signature&quot;;
import axios from &quot;axios&quot;;
import { v4 as uuidv4 } from &quot;uuid&quot;;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;POST&quot;) return res.status(405).json({ error: &quot;Method not allowed&quot; });

  const state = readState();
  if (!state.config.optIn || state.config.paused) {
    return res.status(403).json({ error: &quot;Sync disabled for this instance&quot; });
  }

  const { proposalId, title, votes } = req.body as { proposalId: string; title: string; votes: { voterId: string; weight: number; choice: string }[] };
  if (!proposalId || !title || !Array.isArray(votes)) {
    return res.status(400).json({ error: &quot;proposalId, title, votes[] required&quot; });
  }

  const merkleRoot = computeMerkleRootFromVotes(votes);
  const version = (state.latestVersionByEntityId[proposalId] || 0) + 1;
  const event = {
    eventId: uuidv4(),
    type: &quot;proposal&quot; as const,
    payload: { id: proposalId, proposalId, title, votes },
    originInstanceId: state.config.instanceId,
    version,
    timestamp: Date.now(),
    merkleRoot};

  upsertEvent(state, event);
  writeState(state);

  const body = { ...event, propagate: false };
  const headers: Record<string, string> = {};
  const sig = signPayload(body);
  if (sig) headers[&quot;x-zion-signature&quot;] = sig;

  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {
        const url = new URL(&quot;/api/sync/publish&quot;, peer.baseUrl).toString();
        try {
          await axios.post(url, body, { headers, timeout: 5000 });
        } catch {
          // ignore
        }
      })
  );

  return res.status(200).json({ status: &quot;created&quot;, merkleRoot, version, eventId: event.eventId });
}