import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import axios from &quot;axios&quot;;
import { readState, writeState, upsertEvent, getEntityId } from &quot;../../../utils/sync/storage&quot;;
import { verifySignature } from &quot;../../../utils/sync/signature&quot;;
import { computeMerkleRootFromVotes } from &quot;../../../utils/sync/merkle&quot;;
import { SyncEvent } from &quot;../../../utils/sync/types&quot;;

function isAllowedByScope(stateType: string, scope: string): boolean {
  if (scope === &quot;full&quot;) return true;
  if (scope === &quot;dao&quot;) return stateType === &quot;proposal&quot; || stateType === &quot;dao_endorsement&quot;;
  if (scope === &quot;marketplace&quot;) return stateType === &quot;token_transfer&quot; || stateType === &quot;talent_mobility&quot; || stateType === &quot;leaderboard_entry&quot;;
  return true;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;POST&quot;) return res.status(405).json({ error: &quot;Method not allowed&quot; });

  const state = readState();
  if (!state.config.optIn || state.config.paused) {
    return res.status(403).json({ error: &quot;Sync disabled for this instance&quot; });
  }

  const signature = req.headers[&quot;x-zion-signature&quot;]; 
  const payload = req.body;
  const signatureValid = verifySignature(payload, typeof signature === &quot;string&quot; ? signature : Array.isArray(signature) ? signature[0] : undefined);
  if (!signatureValid) {
    return res.status(401).json({ error: &quot;Invalid signature&quot; });
  }

  const event = payload as SyncEvent & { propagate?: boolean };
  if (!event || !event.type || !event.eventId) {
    return res.status(400).json({ error: &quot;Invalid event&quot; });
  }

  if (!isAllowedByScope(event.type, state.config.scope)) {
    return res.status(403).json({ error: &quot;Event type not allowed by current scope&quot; });
  }

  if (event.type === &quot;proposal&quot;) {
    const votes = (event as any).payload?.votes;
    const providedRoot = event.merkleRoot;
    if (!Array.isArray(votes) || !providedRoot) {
      return res.status(400).json({ error: &quot;Proposal events require votes[] and merkleRoot&quot; });
    }
    const computed = computeMerkleRootFromVotes(votes);
    if (computed !== providedRoot) {
      return res.status(400).json({ error: &quot;Merkle root mismatch&quot; });
    }
  }

  const entityId = getEntityId(event);
  const currentState = readState();
  upsertEvent(currentState, event);
  writeState(currentState);

  const alreadyPropagated = payload.propagate === false;

  if (!alreadyPropagated && currentState.config.peers.length > 0) {
    const headers: Record<string, string> = {};
    const localBody = { ...event, propagate: false };
    const baseSignature = require(&quot;../../../utils/sync/signature&quot;);
    const sig = baseSignature.signPayload(localBody);
    if (sig) headers[&quot;x-zion-signature&quot;] = sig;

    await Promise.all(
      currentState.config.peers
        .filter((p) => !p.paused)
        .map(async (peer) => {
          const url = new URL(&quot;/api/sync/publish&quot;, peer.baseUrl).toString();
          try {
            await axios.post(url, localBody, { headers, timeout: 5000 });
          } catch {
            // ignore peer failure
          }
        })
    );
  }

  return res.status(200).json({ status: &quot;accepted&quot;, entityId });
}