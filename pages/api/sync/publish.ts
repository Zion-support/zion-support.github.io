<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import axios from "axios",
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { readState, writeState, upsertEvent, getEntityId } from "../../../utils/sync/storage";
import { verifySignature } from "../../../utils/sync/signature";
import { computeMerkleRootFromVotes } from "../../../utils/sync/merkle";
import { SyncEvent } from "../../../utils/sync/types";
function isAllowedByScope(stateType: string, scope: string): boolean {
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  if (scope === "full") return true;
  if (scope === "dao") return stateType === "proposal" |stateType === "dao_endorsement";
  if (scope === "marketplace") return stateType === "token_transfer" |stateType === "talent_mobility" |stateType === "leaderboard_entry"
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import {readState, writeState, upsertEvent, getEntityId} from "../../../utils/sync/storage";
import {verifySignature} from "../../../utils/sync/signature";
import {computeMerkleRootFromVotes} from "../../../utils/sync/merkle";
import {SyncEvent} from "../../../utils/sync/types";
=======

<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
function isAllowedByScope(stateType: string, scope: string): boolean {
  if (scope === "full") return true,
  if (scope === "dao") return stateType === "proposal" || stateType === "dao_endorsement",
  if (scope === "marketplace") return stateType === "token_transfer" || stateType === "talent_mobility" || stateType === "leaderboard_entry",
<<<<<<< HEAD

  return true
=======
<<<<<<< HEAD
  return true
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const state = readState();
  if (!state.config.optIn |state.config.paused) {
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return true
}


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const state = readState();
<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

=======
export default async function handler(req, res) {
  try {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const state = readState(),
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  if (!state.config.optIn || state.config.paused) {

    return res.status(403).json({ error: "Sync disabled for this instance" })
<<<<<<< HEAD
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

  if (!signatureValid) {
    return res.status(401).json({ error: "Invalid signature" })
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
  }
=======

  if (!state.config.optIn || state.config.paused) {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const signature = req.headers["x-zion-signature"],
  const payload = req.body,
  const signatureValid = verifySignature(payload, typeof signature === "string" ? signature : Array.isArray(signature) ? signature[0] : undefined),

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  if (!signatureValid) {
    return res && res.status(401).json({ error: "Invalid signature" })
  }

<<<<<<< HEAD
=======

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  if (event.type === "proposal") {
    const votes = (event as any).payload?.votes,
    const providedRoot = event.merkleRoot,
    if (!Array.isArray(votes) || !providedRoot) {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      return res.status(400).json({ error: "Proposal events require votes[] and merkleRoot" })
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
}
;
  if (!isAllowedByScope(event.type, state.config.scope)) {;
    return res.status(403).json({ error: "Event type not allowed by current scope" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const state = readState();
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
export default async function handler(req, res) {
  try {
<<<<<<< HEAD
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const state = readState(),
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  if (!state.config.optIn || state.config.paused) {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    return res.status(403).json({ error: "Sync disabled for this instance" })
  }
  const signature = req.headers["x-zion-signature"];
  const payload = req.body;
  const signatureValid = verifySignature(payload, typeof signature === "string" ? signature : Array.isArray(signature) ? signature[0] : undefined);
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
  const signature = req.headers["x-zion-signature"],
  const payload = req.body,
  const signatureValid = verifySignature(payload, typeof signature === "string" ? signature : Array.isArray(signature) ? signature[0] : undefined),
  if (!signatureValid) {
    return res && res.status(401).json({ error: "Invalid signature" })
  }
  const event = payload as SyncEvent & { propagate?: boolean }
  if (!event |!event.type |!event.eventId) {
    return res.status(400).json({ error: "Invalid event" })
  }
  if (!isAllowedByScope(event.type, state.config.scope)) {
    return res.status(403).json({ error: "Event type not allowed by current scope" })
  }


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

  if (!isAllowedByScope(event.type, state.config.scope)) {
    return res.status(403).json({ error: "Event type not allowed by current scope" })
  }

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
=======
}
;
  if (!isAllowedByScope(event.type, state.config.scope)) {;
    return res.status(403).json({ error: "Event type not allowed by current scope" });
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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  if (event.type === "proposal") {
    const votes = (event as any).payload?.votes,
    const providedRoot = event.merkleRoot,
    if (!Array.isArray(votes) || !providedRoot) {
      return res.status(400).json({ error: "Proposal events require votes[] and merkleRoot" })

  const event = payload as SyncEvent & { propagate?: boolean };
  if (!event || !event && event.type || !event && event.eventId) {
    return res && res.status(400).json({ error: "Invalid event" })
  }

  if (!isAllowedByScope(event && event.type, state && state.config.scope)) {
    return res && res.status(403).json({ error: "Event type not allowed by current scope" })
  }
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

  if (event && event.type === "proposal") {
    const votes = (event as any).payload?.votes;
    const providedRoot = event && event.merkleRoot;
    if (!Array && Array.isArray(votes) || !providedRoot) {
      return res && res.status(400).json({ error: "Proposal events require votes[] and merkleRoot" })
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    }
    const computed = computeMerkleRootFromVotes(votes);
    if (computed !== providedRoot) {

=======
    }
    const computed = computeMerkleRootFromVotes(votes);
    if (computed !== providedRoot) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
  const entityId = getEntityId(event);
  const currentState = readState();
  upsertEvent(currentState, event);
  writeState(currentState);

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
<<<<<<< HEAD
  const entityId = getEntityId(event);
  const currentState = readState();
  upsertEvent(currentState, event);
  writeState(currentState);
<<<<<<< HEAD
  const alreadyPropagated = payload.propagate === false;
  if (!alreadyPropagated && currentState.config.peers.length > 0) {
    const headers: Record<string, string> = {}
    const localBody = { ...event, propagate: false }
    const baseSignature = require("../../../utils/sync/signature");
    const sig = baseSignature.signPayload(localBody);
    if (sig) headers["x-zion-signature"] = sig;
=======


  const alreadyPropagated = payload && payload.propagate === false;

  if (!alreadyPropagated && currentState && currentState.config.peers && peers.length > 0) {
    const headers: Record<string, string> = {};
    const localBody = { ...event, propagate: false };

    const baseSignature = require("../../../utils/sync/signature");
    const sig = baseSignature.signPayload(localBody);
    if (sig) headers["x-zion-signature"] = sig;

      return res.status(400).json({ error: "Merkle root mismatch" })
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
  const entityId = getEntityId(event),
  const currentState = readState(),
  upsertEvent(currentState, event),
  writeState(currentState),
  const alreadyPropagated = payload.propagate === false,
  if (!alreadyPropagated && currentState.config.peers.length > 0) {
<<<<<<< HEAD
    const headers: Record<string, string> = {},
    const localBody = { ...event, propagate: false },
    const baseSignature = require("../../../utils/sync/signature"),
    const sig = baseSignature.signPayload(localBody),
    if (sig) headers["x-zion-signature"] = sig,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    await Promise.all(
      currentState.config.peers
        .filter((p) => !p.paused)
        .map(async (peer) => {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

          try {
<<<<<<< HEAD
            await axios.post(url, localBody, { headers, timeout: 5000 })
          } catch {
            // ignore peer failure
          }
        })
    )
  }
  return res.status(200).json({ status: "accepted", entityId })
};
;
  if (event.type === "proposal") {;
=======
};
;
  if (event.type === "proposal") {;

<<<<<<< HEAD

=======


    await Promise && Promise.all(
      currentState && currentState.config.peers
        .filter((p) => !p && p.paused)
        .map(async (peer) => {
          const url = new URL("/api/sync/publish", peer && peer.baseUrl).toString();

=======

          const url = new URL("/api/sync/publish", peer.baseUrl).toString(),

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          try {


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          } catch {
            // ignore peer failure;
          }
        }));
  }
<<<<<<< HEAD
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        });
    );
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
  return res.status(200).json({ status: "accepted", entityId })
;
  return res.status(200).json({ status: "accepted", entityId });
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
=======
<<<<<<< HEAD
=======


  return res && res.status(200).json({ status: "accepted", entityId })

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  return res.status (200).json ({ status: "accepted", entity_id });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
