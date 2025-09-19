import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { readState, writeState, upsertEvent, getEntityId } from "../../../utils/sync/storage";
import { verifySignature } from "../../../utils/sync/signature";
import { computeMerkleRootFromVotes } from "../../../utils/sync/merkle";
import { SyncEvent } from "../../../utils/sync/types";
import {readState, writeState, upsertEvent, getEntityId} from "../../../utils/sync/storage";
import {verifySignature} from "../../../utils/sync/signature";
import {computeMerkleRootFromVotes} from "../../../utils/sync/merkle";
import {SyncEvent} from "../../../utils/sync/types";
import type { NextApiRequest, NextApiResponse } from 'next';

function isAllowedByScope(stateType: string, scope: string): boolean {,
  if (scope === "full") return true;
  if (scope === "dao") return stateType === "proposal" |stateType === "dao_endorsement";
  if (scope === "marketplace") return stateType === "token_transfer" |stateType === "talent_mobility" |stateType === "leaderboard_entry",
export default async function handler(req, res) {,
  try {,
  res.status(200).json({ message: 'Event published' ,});
function isAllowedByScope(stateType: string, scope: string): boolean {,
  if (scope === "full") return true;
  if (scope === "dao") return stateType === "proposal" || stateType === "dao_endorsement";
  if (scope === "marketplace") return stateType === "token_transfer" || stateType === "talent_mobility" || stateType === "leaderboard_entry";
  return true,
}
,
export default async function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" ,});
  const state = readState();
  if (!state.config.optIn |state.config.paused) {,
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" ,});
  const state = readState();
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
export default async function handler(req, res) {,
  try {,
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" ,});
  const state = readState();
  if (!state.config.optIn || state.config.paused) {,
    return res.status(403).json({ error: "Sync disabled for this instance" ,}),
  }
,
  const signature = req.headers["x-zion-signature"];
  const payload = req.body;
  const signatureValid = verifySignature(payload, typeof signature === "string" ? signature : Array.isArray(signature) ? signature[0] : undefined);
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  const signature = req.headers["x-zion-signature"];
  const payload = req.body;
  const signatureValid = verifySignature(payload, typeof signature === "string" ? signature : Array.isArray(signature) ? signature[0] : undefined);
  if (!signatureValid) {,
    return res && res.status(401).json({ error: "Invalid signature" ,}),
  }
,
  const event = payload as SyncEvent & { propagate?: boolean }
  if (!event |!event.type |!event.eventId) {,
    return res.status(400).json({ error: "Invalid event" ,}),
  }
  if (!isAllowedByScope(event.type, state.config.scope)) {,
    return res.status(403).json({ error: "Event type not allowed by current scope" ,}),
  }
  if (event.type === "proposal") {,
    const votes = (event as any).payload?.votes;
    const providedRoot = event.merkleRoot;
    if (!Array.isArray(votes) |!providedRoot) {}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  const event = payload as SyncEvent & { propagate?: boolean };
  if (!event || !event.type || !event.eventId) {,
    return res.status(400).json({ error: "Invalid event" ,}),
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
;
  if (!isAllowedByScope(event.type, state.config.scope)) {;
    return res.status(403).json({ error: "Event type not allowed by current scope" ,});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
,
  if (event.type === "proposal") {,
    const votes = (event as any).payload?.votes;
    const providedRoot = event.merkleRoot;
    if (!Array.isArray(votes) || !providedRoot) {,
      return res.status(400).json({ error: "Proposal events require votes[] and merkleRoot" ,}),
  const event = payload as SyncEvent & { propagate?: boolean };
  if (!event || !event && event.type || !event && event.eventId) {,
    return res && res.status(400).json({ error: "Invalid event" ,}),
  }
,
  if (!isAllowedByScope(event && event.type, state && state.config.scope)) {,
    return res && res.status(403).json({ error: "Event type not allowed by current scope" ,}),
  }
,
  if (event && event.type === "proposal") {,
    const votes = (event as any).payload?.votes;
    const providedRoot = event && event.merkleRoot;
    if (!Array && Array.isArray(votes) || !providedRoot) {,
      return res && res.status(400).json({ error: "Proposal events require votes[] and merkleRoot" ,}),
    }
    const computed = computeMerkleRootFromVotes(votes);
    if (computed !== providedRoot) {,
      return res && res.status(400).json({ error: "Merkle root mismatch" ,}),
    }
  }
  const entityId = getEntityId(event);
  const currentState = readState();
  upsertEvent(currentState, event);
  writeState(currentState);
  const alreadyPropagated = payload && payload.propagate === false;
  if (!alreadyPropagated && currentState && currentState.config.peers && peers.length > 0) {,
    const headers: Record<string, string> = {};
    const localBody = { ...event, propagate: false ,};
    const baseSignature = require("../../../utils/sync/signature");
    const sig = baseSignature && baseSignature.signPayload(localBody);
    if (sig) headers["x-zion-signature"] = sig;
      return res.status(400).json({ error: "Merkle root mismatch" ,}),
      } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
,
  const entityId = getEntityId(event);
  const currentState = readState();
  upsertEvent(currentState, event);
  writeState(currentState);
  const alreadyPropagated = payload.propagate === false;
  if (!alreadyPropagated && currentState.config.peers.length > 0) {,
    const headers: Record<string, string> = {}
    const localBody = { ...event, propagate: false ,}
    const baseSignature = require("../../../utils/sync/signature");
    const sig = baseSignature.signPayload(localBody);
    if (sig) headers["x-zion-signature"] = sig;
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  const entityId = getEntityId(event);
  const currentState = readState();
  upsertEvent(currentState, event);
  writeState(currentState);
  const alreadyPropagated = payload.propagate === false;
  if (!alreadyPropagated && currentState.config.peers.length > 0) {,
    const headers: Record<string, string> = {};
    const localBody = { ...event, propagate: false ,};
    const baseSignature = require("../../../utils/sync/signature");
    const sig = baseSignature.signPayload(localBody);
    if (sig) headers["x-zion-signature"] = sig;
    await Promise.all(,
      currentState.config.peers,
        .filter((p) => !p.paused),
        .map(async (peer) => {,
          const url = new URL("/api/sync/publish", peer.baseUrl).toString();
          const url = new URL("/api/sync/publish", peer.baseUrl).toString();
          try {,
            await axios.post(url, localBody, { headers, timeout: 5000 ,}),
          } catch {,
            // ignore peer failure,
          }
        }),
    ),
  }
,
  return res.status(200).json({ status: "accepted", entityId }),
};
;
  if (event.type === "proposal") {;
    const votes = (event as any).payload?.votes;
    const provided_root = event.merkle_root;
    // Check condition,
if (|| !provided_root) {) {,
  $2,
}
      return res.status (400).json ({ error: "Proposal events require votes[] and merkle_root" ,});
    }
    const computed = computeMerkleRootFromVotes (votes);
    // Check condition,
if ( {) {,
  $2,
}
      return res.status (400).json ({ error: "Merkle root mismatch" ,});
    }
  }
  const entity_id = getEntityId (event);
  const current_state = read_state ();
  upsert_event (current_state, event);
  write_state (current_state);
;
  const already_propagated = payload.propagate === false;
;
  // Check condition,
if ( {) {,
  $2,
}
    const headers: Record < string, string> = {}
    const local_body = { ...event, propagate: false ,}
    const base_signature = require ("../../../utils / sync / signature");
    const sig = base_signature.sign_payload (local_body);
    // Check condition,
if (headers["x - zion - signature"] = sig) {,
  $2,
}
    await Promise.all (,
      current_state.config.peers;
        .filter ((p) => !p.paused);
        .map (async (peer) => {,
          const url = new URL ("/api / sync / publish", peer.base_url).to_string ();
          try {,
            await axios.post (url, local_body, { headers, timeout: 5000 ,});
          } catch {,
            // ignore peer failure;
          }
        }));
  }
,
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
        });
    );
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
,
  return res.status(200).json({ status: "accepted", entityId }),
;
  return res.status(200).json({ status: "accepted", entityId });
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
}
,