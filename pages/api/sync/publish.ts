import type { NextApiRequest, NextApiResponse } from './next';
import axios from './axios';
import { read_state, write_state, upsert_event, getEntityId } from '../../../utils / sync / storage';
import { verify_signature } from '../../../utils / sync / signature';
import { computeMerkleRootFromVotes } from '../../../utils / sync / merkle';
import { SyncEvent } from '../../../utils / sync / types';
function isAllowedByScope (state_type: string, scope: string): boolean {
  // Check condition
if (return true) {
  $2
}
  // Check condition
if (return state_type === "proposal" || state_type === "dao_endorsement") {
  $2
}
  // Check condition
if (return state_type === "token_transfer" || state_type === "talent_mobility" || state_type === "leaderboard_entry", ) {
  $2
}
  return true;
}
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: "Method not allowed" })) {
  $2
}
  const state = read_state ();
  // Check condition
if ( {) {
  $2
}
    return res.status (403).json ({ error: "Sync disabled for this instance" });
  }
  const signature = req.headers["x - zion - signature"];
  const payload = req.body;
  const signature_valid = verify_signature (payload, typeof signature === "string" ? signature : Array.is_array (signature) ? signature[0] : undefined);
  // Check condition
if ( {) {
  $2
}
    return res.status (401).json ({ error: "Invalid signature" });
  }
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
            // ignore peer failure;
          }
        }));
  }
  return res.status (200).json ({ status: "accepted", entity_id });
}