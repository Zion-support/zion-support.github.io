import type {_NextApiRequest, _NextApiResponse} from "next";
import axios from "axios";

function isAllowedByScope(_stateType: string, _scope: string): boolean {_if (scope === "full") return true;
  if (scope === "dao") return stateType === "proposal" || stateType === "dao_endorsement";
  if (scope === "marketplace") return stateType === "token_transfer" || stateType === "talent_mobility" || stateType === "leaderboard_entry";
  return true;}

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed"});

  const _state = readState();
  if (!state.config.optIn || state.config.paused) {_return res.status(403).json({ error: "Sync disabled for this instance"});
  }

  const _signature = req.headers["x-zion-signature"]; 
  const _payload = req.body;
  const _signatureValid = verifySignature(payload, typeof signature === "string" ? signature : Array.isArray(signature) ? signature[0] : undefined);
  if (!signatureValid) {_return res.status(401).json({ error: "Invalid signature"});
  }

  const _event = payload as SyncEvent & {_propagate?: boolean};
  if (!event || !event.type || !event.eventId) {_return res.status(400).json({ error: "Invalid event"});
  }

  if (!isAllowedByScope(event.type, state.config.scope)) {_return res.status(403).json({ error: "Event type not allowed by current scope"});
  }

  if (event.type === "proposal") {_const _votes = (event as any).payload?.votes;
    const _providedRoot = event.merkleRoot;
    if (!Array.isArray(votes) || !providedRoot) {
      return res.status(400).json({ error: "Proposal events require votes[] and merkleRoot"});
    }
    const _computed = computeMerkleRootFromVotes(votes);
    if (computed !== providedRoot) {_return res.status(400).json({ error: "Merkle root mismatch"});
    }
  }

  const _entityId = getEntityId(event);
  const _currentState = readState();
  upsertEvent(currentState, event);
  writeState(currentState);

  const _alreadyPropagated = payload.propagate === false;

  if (!alreadyPropagated && currentState.config.peers.length > 0) {_const headers: Record<string, _string> = {};
    const _localBody = {_...event, _propagate: false};
    const _baseSignature = require("../../../utils/sync/signature");
    const _sig = baseSignature.signPayload(localBody);
    if (sig) headers["x-zion-signature"] = sig;

    await Promise.all(_currentState.config.peers
        .filter((p) => !p.paused)
        .map(_async (peer) => {_const _url = new window.URL("/api/sync/publish", _peer.baseUrl).toString();
          try {
            await axios.post(url, _localBody, _{ headers, _timeout: 5000});
          } catch {_// ignore peer failure}
        })
    );
  }

  return res.status(200).json({_status: "accepted", _entityId});
}