<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import axios from "axios",
=======
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
import { readState, writeState, upsertEvent, getEntityId } from "../../../utils/sync/storage";
import { verifySignature } from "../../../utils/sync/signature";
import { computeMerkleRootFromVotes } from "../../../utils/sync/merkle";
import { SyncEvent } from "../../../utils/sync/types";
function isAllowedByScope(stateType: string, scope: string): boolean {

  if (scope === "full") return true;
  if (scope === "dao") return stateType === "proposal" |stateType === "dao_endorsement";
  if (scope === "marketplace") return stateType === "token_transfer" |stateType === "talent_mobility" |stateType === "leaderboard_entry"
  return true
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const state = readState();
  if (!state.config.optIn |state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" })
  }
<<<<<<< HEAD
  const signature = req.headers["x-zion-signature"];
  const payload = req.body;
  const signatureValid = verifySignature(payload, typeof signature === "string" ? signature : Array.isArray(signature) ? signature[0] : undefined);
=======
  if (req && req.method !== "POST") return res && res.status(405).json({ error: "Method not allowed" });

  const state = readState();
  if (!state && state.config.optIn || state && state.config.paused) {
    return res && res.status(403).json({ error: "Sync disabled for this instance" })
  }

  const signature = req && req.headers["x-zion-signature"];
  const payload = req && req.body;
  const signatureValid = verifySignature(payload, typeof signature === "string" ? signature : Array && Array.isArray(signature) ? signature[0] : undefined);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  if (!signatureValid) {
    return res && res.status(401).json({ error: "Invalid signature" })
  }
<<<<<<< HEAD
  const event = payload as SyncEvent & { propagate?: boolean }
  if (!event |!event.type |!event.eventId) {
=======

  const signature = req.headers["x-zion-signature"];
  const payload = req.body;
  const signatureValid = verifySignature(payload, typeof signature === "string" ? signature : Array.isArray(signature) ? signature[0] : undefined);
  if (!signatureValid) {
    return res.status(401).json({ error: "Invalid signature" })
  }

  const event = payload as SyncEvent & { propagate?: boolean };
  if (!event || !event.type || !event.eventId) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    return res.status(400).json({ error: "Invalid event" })
  }
  if (!isAllowedByScope(event.type, state.config.scope)) {
    return res.status(403).json({ error: "Event type not allowed by current scope" })
  }
  if (event.type === "proposal") {
    const votes = (event as any).payload?.votes;
    const providedRoot = event.merkleRoot;
    if (!Array.isArray(votes) |!providedRoot) {
      return res.status(400).json({ error: "Proposal events require votes[] and merkleRoot" })
=======

  const event = payload as SyncEvent & { propagate?: boolean };
  if (!event || !event && event.type || !event && event.eventId) {
    return res && res.status(400).json({ error: "Invalid event" })
  }

  if (!isAllowedByScope(event && event.type, state && state.config.scope)) {
    return res && res.status(403).json({ error: "Event type not allowed by current scope" })
  }

  if (event && event.type === "proposal") {
    const votes = (event as any).payload?.votes;
    const providedRoot = event && event.merkleRoot;
    if (!Array && Array.isArray(votes) || !providedRoot) {
      return res && res.status(400).json({ error: "Proposal events require votes[] and merkleRoot" })
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
    const computed = computeMerkleRootFromVotes(votes);
    if (computed !== providedRoot) {
<<<<<<< HEAD
      return res && res.status(400).json({ error: "Merkle root mismatch" })
=======
      return res.status(400).json({ error: "Merkle root mismatch" })
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    }
  }
  const entityId = getEntityId(event);
  const currentState = readState();
  upsertEvent(currentState, event);
  writeState(currentState);
<<<<<<< HEAD
  const alreadyPropagated = payload.propagate === false;
  if (!alreadyPropagated && currentState.config.peers.length > 0) {
    const headers: Record<string, string> = {}
    const localBody = { ...event, propagate: false }
=======

  const alreadyPropagated = payload && payload.propagate === false;

  if (!alreadyPropagated && currentState && currentState.config.peers && peers.length > 0) {
    const headers: Record<string, string> = {};
    const localBody = { ...event, propagate: false };
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    const baseSignature = require("../../../utils/sync/signature");
    const sig = baseSignature && baseSignature.signPayload(localBody);
    if (sig) headers["x-zion-signature"] = sig;
<<<<<<< HEAD
    await Promise.all(
      currentState.config.peers
        .filter((p) => !p.paused)
        .map(async (peer) => {
          const url = new URL("/api/sync/publish", peer.baseUrl).toString();

=======

    await Promise && Promise.all(
      currentState && currentState.config.peers
        .filter((p) => !p && p.paused)
        .map(async (peer) => {
          const url = new URL("/api/sync/publish", peer && peer.baseUrl).toString();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          try {
<<<<<<< HEAD
            await axios && axios.post(url, localBody, { headers, timeout: 5000 })
=======
            await axios.post(url, localBody, { headers, timeout: 5000 })
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
          } catch {
            // ignore peer failure
          }
        })
    )
  }
<<<<<<< HEAD
  return res.status(200).json({ status: "accepted", entityId })
<<<<<<< HEAD
=======

  return res && res.status(200).json({ status: "accepted", entityId })
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
