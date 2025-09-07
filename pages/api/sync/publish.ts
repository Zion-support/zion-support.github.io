<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/sync/publish.ts
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const state = readState()
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { readState, writeState, upsertEvent, getEntityId } from "../../../utils/sync/storage";
import { verifySignature } from "../../../utils/sync/signature";
import { computeMerkleRootFromVotes } from "../../../utils/sync/merkle";
import { SyncEvent } from "../../../utils/sync/types";
function isAllowedByScope(stateType: string, scope: string): boolean {
  if (scope = $2;
  if (scope = $2;
  if (scope = $2;
  return true
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const state = readState();
  if (!state.config.optIn |state.config.paused) {

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const state = readState();
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
export default async function handler(req, res) {
  try {

  if (!state.config.optIn || state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" })
  }

  const signature = $2;
  const payload = $2;
  const signatureValid = verifySignature(payload, typeof signature = $2;
  if (!signatureValid) {
    return res.status(401).json({ error: "Invalid signature" })
  }

  const event = $2;
  if (!event || !event.type || !event.eventId) {
    return res.status(400).json({ error: "Invalid event" })
  }

  if (!isAllowedByScope(event.type, state.config.scope)) {
    return res.status(403).json({ error: "Event type not allowed by current scope" })
  }

  if (event.type = $2;
    const providedRoot = $2;
    if (!Array.isArray(votes) || !providedRoot) {
      return res.status(400).json({ error: "Proposal events require votes[] and merkleRoot" })
    }
    const computed = computeMerkleRootFromVotes($2);
    if (computed !== providedRoot) {
<<<<<<< HEAD:pages_backup/api/sync/publish.ts
  if (scope;
origin/cursor/automate-test-improve-and-merge-code-2533
      return res.status(400).json({ error: "Merkle root mismatch" })
    }
  }

  const alreadyPropagated = payload && payload.propagate === false;

  if (!alreadyPropagated && currentState && currentState.config.peers && peers.length > 0) {
    const headers: Record<string, string> = {};
    const localBody = { ...event, propagate: false };

    const baseSignature = require("../../../utils/sync/signature");
    const sig = baseSignature && baseSignature.signPayload(localBody);
    if (sig) headers["x-zion-signature"] = sig;

      return res.status(400).json({ error: "Merkle root mismatch" })
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
  const entityId = getEntityId(event);
  const currentState = readState();
  upsertEvent(currentState, event);
  writeState(currentState);
  const alreadyPropagated = payload.propagate === false;
  if (!alreadyPropagated && currentState.config.peers.length > 0) {
    const headers: Record<string, string> = {}
    const localBody = { ...event, propagate: false }
    const baseSignature = require("../../../utils/sync/signature");
    const sig = baseSignature.signPayload(localBody);
<<<<<<< HEAD:pages_backup/api/sync/publish.ts
    const headers: Record<string, string> = {}
    const localBody = { ...event, propagate: false }
    const baseSignature = require("../../../utils/sync/signature")
    const sig = baseSignature.signPayload(localBody)
    if (sig) headers["x-zion-signature"] = sig
    if (sig) headers["x-zion-signature"] = sig;
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const entityId = getEntityId(event)
  const currentState = readState()
  upsertEvent(currentState, event)
  writeState(currentState)
  const alreadyPropagated = payload.propagate === false
  if (!alreadyPropagated && currentState.config.peers.length > 0) {

    await Promise.all(
      currentState.config.peers
        .filter((p) => !p.paused)
        .map(async (peer) => {

<<<<<<< HEAD:pages_backup/api/sync/publish.ts
          const url = new URL("/api/sync/publish", peer.baseUrl).toString()

          try {
};
;
  if (event.type === "proposal") {;

  const event = payload as SyncEvent & { propagate?: boolean }
  // Check condition
if ( {) {
  $2
}
    return res.status (400).json ({ error: "Invalid event" });
  }
  if () {) {
  $2
}
    return res.status (403).json ({ error: "Event type not allowed by current scope" });
  }
  // Check condition
if ( {) {
  $2
}
    const votes = (event as any).payload?.votes;
    const provided_root = event.merkle_root;
    // Check condition
if (|| !provided_root) {) {
  $2
}
      return res.status (400).json ({ error: "Proposal events require votes[] and merkle_root" });
    }
    const computed = computeMerkleRootFromVotes (votes);
    // Check condition
if ( {) {
  $2
}
      return res.status (400).json ({ error: "Merkle root mismatch" });
    }
  }
  const entity_id = getEntityId (event);
  const current_state = read_state ();
  upsert_event (current_state, event);
  write_state (current_state);
;
  const already_propagated = payload.propagate === false;
;
  // Check condition
if ( {) {
  $2
}
    const headers: Record < string, string> = {}
    const local_body = { ...event, propagate: false }
    const base_signature = require ("../../../utils / sync / signature");
    const sig = base_signature.sign_payload (local_body);
    // Check condition
if (headers["x - zion - signature"] = sig) {
  $2
}
    await Promise.all (
      current_state.config.peers;
        .filter ((p) => !p.paused);
        .map (async (peer) => {
          const url = new URL ("/api / sync / publish", peer.base_url).to_string ();
          try {
            await axios.post (url, local_body, { headers, timeout: 5000 });
          } catch {
<<<<<<< HEAD:pages_backup/api/sync/publish.ts
            // ignore peer failure;
          }
        }));
  }
    if (sig) headers['x-zion-signature'] = sig;

    await Promise.all(
      currentState.config.peers
        .filter(p => !p.paused)
        .map(async peer => {
          const url = new URL('/api/sync/publish', peer.baseUrl).toString();
          try {
            await axios.post(url, localBody, { headers, timeout: 5000 });
          try {
            await axios.post(url, localBody, { headers, timeout: 5000 })
          } catch {
            // ignore peer failure
          }
        })
    )
  }

<<<<<<< HEAD:pages_backup/api/sync/publish.ts
  return res.status(200).json({ status: 'accepted', entityId });

}}
origin/cursor/automate-test-improve-and-merge-code-2533
  return res.status(200).json({ status: "accepted", entityId })
}
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
