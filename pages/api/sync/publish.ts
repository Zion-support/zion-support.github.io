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
  if (req.method !== "POST") return res.status(405).json($2);
  const state = readState($2);
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
      return res.status(400).json({ error: "Merkle root mismatch" })
    }
  }

  const entityId = getEntityId($2);
  const currentState = readState($2);
  upsertEvent($2);
  writeState($2);
  const alreadyPropagated = $2;
  if (!alreadyPropagated && currentState.config.peers.length > 0) {
    const headers: Record<string, string> = {},
    const localBody = { ...event, propagate: false},
    const baseSignature = require($2);
    const sig = baseSignature.signPayload($2);
    if (sig) headers["x-zion-signature"] = sig,

    await Promise.all(
      currentState.config.peers
        .filter((p) => !p.paused)
        .map(async (peer) => {
          const url = new URL("/api/sync/publish", peer.baseUrl).toString($2);
          try {
            await axios.post(url, localBody, { headers, timeout: 5000})
          } catch {
            // ignore peer failure
          }
        })
    )
  }

  return res.status(200).json({ status: "accepted", entityId })
}