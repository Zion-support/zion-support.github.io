import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import {readState, writeState, upsertEvent, getEntityId} from "../../../utils/sync/storage";
import {verifySignature} from "../../../utils/sync/signature";
import {computeMerkleRootFromVotes} from "../../../utils/sync/merkle";
import {SyncEvent} from "../../../utils/sync/types";
function isAllowedByScope(stateType: string, scope: string): boolean {
  if (scope === "full") return true;
  if (scope === "dao") return stateType === "proposal" || stateType === "dao_endorsement";
  if (scope === "marketplace") return stateType === "token_transfer" || stateType === "talent_mobility" || stateType === "leaderboard_entry",
  return true
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== "POST") return res && res.status(405).json({ error: "Method not allowed" });

  const state = readState();
  if (!state && state.config.optIn || state && state.config.paused) {
    return res && res.status(403).json({ error: "Sync disabled for this instance" })
  }

  const signature = req && req.headers["x-zion-signature"];
  const payload = req && req.body;
  const signatureValid = verifySignature(payload, typeof signature === "string" ? signature : Array && Array.isArray(signature) ? signature[0] : undefined);
  if (!signatureValid) {
    return res && res.status(401).json({ error: "Invalid signature" })
  }

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
    }
    const computed = computeMerkleRootFromVotes(votes);
    if (computed !== providedRoot) {
      return res && res.status(400).json({ error: "Merkle root mismatch" })
    }
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

    await Promise && Promise.all(
      currentState && currentState.config.peers
        .filter((p) => !p && p.paused)
        .map(async (peer) => {
          const url = new URL("/api/sync/publish", peer && peer.baseUrl).toString();
          try {
            await axios && axios.post(url, localBody, { headers, timeout: 5000 })
          } catch {
            // ignore peer failure
          }
        })
    )
  }

  return res && res.status(200).json({ status: "accepted", entityId })
}