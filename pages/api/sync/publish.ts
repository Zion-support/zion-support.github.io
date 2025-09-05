<<<<<<< HEAD
<<<<<<< HEAD
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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const state = readState(),
  if (!state.config.optIn || state.config.paused) {
<<<<<<< HEAD
    return res.status(403).json({ error: "Sync disabled for this instance" })
  }

  const signature = req.headers["x-zion-signature"], 
  const payload = req.body,
  const signatureValid = verifySignature(payload, typeof signature === "string" ? signature : Array.isArray(signature) ? signature[0] : undefined),
  if (!signatureValid) {
    return res.status(401).json({ error: "Invalid signature" })
=======
    return res.status(403).json({ error: &quot;Sync disabled for this instance&quot; });
  }

  const signature = req.headers[&quot;x-zion-signature&quot;]; 
  const payload = req.body;
  const signatureValid = verifySignature(payload, typeof signature === &quot;string&quot; ? signature : Array.isArray(signature) ? signature[0] : undefined);
  if (!signatureValid) {
    return res.status(401).json({ error: &quot;Invalid signature&quot; });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }

  const event = payload as SyncEvent & { propagate?: boolean },
  if (!event || !event.type || !event.eventId) {
<<<<<<< HEAD
    return res.status(400).json({ error: "Invalid event" })
=======
import type { NextApiRequest, NextApiResponse } from "next",;
import axios from "axios",;
import { readState, writeState, upsertEvent, getEntityId } from "../../../utils/sync/storage",;
import { verifySignature } from "../../../utils/sync/signature",;
import { computeMerkleRootFromVotes } from "../../../utils/sync/merkle",;
import { SyncEvent } from "../../../utils/sync/types",;
function isAllowedByScope(stateType: string, scope: string): boolean {;
  if (scope === "full") return true,;
  if (scope === "dao") return stateType === "proposal" || stateType === "dao_endorsement",;
  if (scope === "marketplace") return stateType === "token_transfer" || stateType === "talent_mobility" || stateType === "leaderboard_entry",;
  return true;
}
;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),;
  const state = readState(),;
  if (!state.config.optIn || state.config.paused) {;
    return res.status(403).json({ error: "Sync disabled for this instance" });
  }
;
  const signature = req.headers["x-zion-signature"],;
  const payload = req.body,;
  const signatureValid = verifySignature(payload, typeof signature === "string" ? signature : Array.isArray(signature) ? signature[0] : undefined),;
  if (!signatureValid) {;
    return res.status(401).json({ error: "Invalid signature" });
  }
;
  const event = payload as SyncEvent & { propagate?: boolean },;
  if (!event || !event.type || !event.eventId) {;
    return res.status(400).json({ error: "Invalid event" });
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  }
;
  if (!isAllowedByScope(event.type, state.config.scope)) {;
    return res.status(403).json({ error: "Event type not allowed by current scope" });
  }
<<<<<<< HEAD

  if (event.type === "proposal") {
    const votes = (event as any).payload?.votes,
    const providedRoot = event.merkleRoot,
    if (!Array.isArray(votes) || !providedRoot) {
      return res.status(400).json({ error: "Proposal events require votes[] and merkleRoot" })
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    const computed = computeMerkleRootFromVotes(votes),
    if (computed !== providedRoot) {
<<<<<<< HEAD
      return res.status(400).json({ error: "Merkle root mismatch" })
=======
      return res.status(400).json({ error: &quot;Merkle root mismatch&quot; });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  }

  const entityId = getEntityId(event),
  const currentState = readState(),
  upsertEvent(currentState, event),
  writeState(currentState),

  const alreadyPropagated = payload.propagate === false,

  if (!alreadyPropagated && currentState.config.peers.length > 0) {
<<<<<<< HEAD
    const headers: Record<string string> = {},
    const localBody = { ...event, propagate: false },
    const baseSignature = require("../../../utils/sync/signature"),
    const sig = baseSignature.signPayload(localBody),
    if (sig) headers["x-zion-signature"] = sig,
=======
    const headers: Record<string, string> = {};
    const localBody = { ...event, propagate: false };
    const baseSignature = require(&quot;../../../utils/sync/signature&quot;);
    const sig = baseSignature.signPayload(localBody);
    if (sig) headers[&quot;x-zion-signature&quot;] = sig;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

    await Promise.all(
      currentState.config.peers
        .filter((p) => !p.paused)
        .map(async (peer) => {
<<<<<<< HEAD
          const url = new URL("/api/sync/publish", peer.baseUrl).toString(),
=======
          const url = new URL(&quot;/api/sync/publish&quot;, peer.baseUrl).toString();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          try {
            await axios.post(url, localBody, { headers, timeout: 5000 })
          } catch {
            // ignore peer failure
=======
;
  if (event.type === "proposal") {;
    const votes = (event as any).payload?.votes,;
    const providedRoot = event.merkleRoot,;
    if (!Array.isArray(votes) || !providedRoot) {;
      return res.status(400).json({ error: "Proposal events require votes[] and merkleRoot" });
    }
    const computed = computeMerkleRootFromVotes(votes),;
    if (computed !== providedRoot) {;
      return res.status(400).json({ error: "Merkle root mismatch" });
    }
  }
;
  const entityId = getEntityId(event),;
  const currentState = readState(),;
  upsertEvent(currentState, event),;
  writeState(currentState),;
  const alreadyPropagated = payload.propagate === false,;
  if (!alreadyPropagated && currentState.config.peers.length > 0) {;
    const headers: Record<string string> = {},;
    const localBody = { ...event, propagate: false },;
    const baseSignature = require("../../../utils/sync/signature"),;
    const sig = baseSignature.signPayload(localBody),;
    if (sig) headers["x-zion-signature"] = sig;
    await Promise.all(;
      currentState.config.peers;
        .filter((p) => !p.paused);
        .map(async (peer) => {;
          const url = new URL("/api/sync/publish", peer.baseUrl).toString();
          try {;
            await axios.post(url, localBody, { headers, timeout: 5000 });
          } catch {;
            // ignore peer failure;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          }
        });
    );
  }
<<<<<<< HEAD

<<<<<<< HEAD
  return res.status(200).json({ status: "accepted", entityId })
=======
  return res.status(200).json({ status: &quot;accepted&quot;, entityId });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
;
  return res.status(200).json({ status: "accepted", entityId });
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}