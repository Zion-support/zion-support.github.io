
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

import { readState, writeState, upsertEvent, getEntityId } from "../../../utils/sync/storage";
import { verifySignature } from "../../../utils/sync/signature";
import { computeMerkleRootFromVotes } from "../../../utils/sync/merkle";
import { SyncEvent } from "../../../utils/sync/types";
function isAllowedByScope(stateType: string, scope: string): boolean {

import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import {readState, writeState, upsertEvent, getEntityId} from "../../../utils/sync/storage";
import {verifySignature} from "../../../utils/sync/signature";
import {computeMerkleRootFromVotes} from "../../../utils/sync/merkle";
import {SyncEvent} from "../../../utils/sync/types";

import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
  res.status(200).json({ message: 'Event published' });
import type { NextApiRequest, NextApiResponse } from "next",
import axios from "axios",
import { readState, writeState, upsertEvent, getEntityId } from "../../../utils/sync/storage",
import { verifySignature } from "../../../utils/sync/signature",
import { computeMerkleRootFromVotes } from "../../../utils/sync/merkle",
import { SyncEvent } from "../../../utils/sync/types",


function isAllowedByScope(stateType: string, scope: string): boolean {
  if (scope === "full") return true,
  if (scope === "dao") return stateType === "proposal" || stateType === "dao_endorsement",
  if (scope === "marketplace") return stateType === "token_transfer" || stateType === "talent_mobility" || stateType === "leaderboard_entry",
  return true
}



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
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const state = readState(),

  if (!state.config.optIn || state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" })
  }

  if (req && req.method !== "POST") return res && res.status(405).json({ error: "Method not allowed" });
  const state = readState();
  if (!state && state.config.optIn || state && state.config.paused) {
    return res && res.status(403).json({ error: "Sync disabled for this instance" })
  }
  const signature = req && req.headers["x-zion-signature"];
  const payload = req && req.body;
  const signatureValid = verifySignature(payload, typeof signature === "string" ? signature : Array && Array.isArray(signature) ? signature[0] : undefined);


}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const signature = req.headers["x-zion-signature"],
  const payload = req.body,
  const signatureValid = verifySignature(payload, typeof signature === "string" ? signature : Array.isArray(signature) ? signature[0] : undefined),

  if (!signatureValid) {
    return res && res.status(401).json({ error: "Invalid signature" })
  }


  const signature = req.headers["x-zion-signature"];
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


}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const event = payload as SyncEvent & { propagate?: boolean },
  if (!event || !event.type || !event.eventId) {
    return res.status(400).json({ error: "Invalid event" })

  if (event.type === "proposal") {
    const votes = (event as any).payload?.votes,
    const providedRoot = event.merkleRoot,
    if (!Array.isArray(votes) || !providedRoot) {

      return res.status(400).json({ error: "Proposal events require votes[] and merkleRoot" })
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

  if (event && event.type === "proposal") {
    const votes = (event as any).payload?.votes;
    const providedRoot = event && event.merkleRoot;
    if (!Array && Array.isArray(votes) || !providedRoot) {
      return res && res.status(400).json({ error: "Proposal events require votes[] and merkleRoot" })
    }
    const computed = computeMerkleRootFromVotes(votes);
    if (computed !== providedRoot) {

      return res.status(400).json({ error: "Merkle root mismatch" })

    }
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    const computed = computeMerkleRootFromVotes(votes),
    if (computed !== providedRoot) {
      return res.status(400).json({ error: "Merkle root mismatch" })
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

          const url = new URL("/api/sync/publish", peer.baseUrl).toString(),

          try {


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


  return res && res.status(200).json({ status: "accepted", entityId })

}
}
  return res.status (200).json ({ status: "accepted", entity_id });
}

}

