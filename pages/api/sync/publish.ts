<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import {
  readState,
  writeState,
  upsertEvent,
  getEntityId,;
} from '../../../utils/sync/storage';
import { verifySignature } from '../../../utils/sync/signature';
import { computeMerkleRootFromVotes } from '../../../utils/sync/merkle';
import { SyncEvent } from '../../../utils/sync/types';

=======
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { readState, writeState, upsertEvent, getEntityId } from "../../../utils/sync/storage";
import { verifySignature } from "../../../utils/sync/signature";
import { computeMerkleRootFromVotes } from "../../../utils/sync/merkle";
import { SyncEvent } from "../../../utils/sync/types";
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
function isAllowedByScope(stateType: string, scope: string): boolean {
  if (scope === "full") return true;
  if (scope === "dao") return stateType === "proposal" || stateType === "dao_endorsement";
  if (scope === "marketplace") return stateType === "token_transfer" || stateType === "talent_mobility" || stateType === "leaderboard_entry";
  return true
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const state = readState();
  if (!state.config.optIn || state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" })
  }

  const signature = req.headers["x-zion-signature"];
  const payload = req.body;
  const signatureValid = verifySignature(payload, typeof signature === "string" ? signature : Array.isArray(signature) ? signature[0] : undefined);
  if (!signatureValid) {
<<<<<<< HEAD
    return res.status(401).json({ error: 'Invalid signature' });
=======
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { readState, writeState, upsertEvent, getEntityId } from "../../../utils/sync/storage";
import { verifySignature } from "../../../utils/sync/signature";
import { computeMerkleRootFromVotes } from "../../../utils/sync/merkle";
import { SyncEvent } from "../../../utils/sync/types";
function isAllowedByScope(stateType: string, scope: string): boolean {
  if (scope === "full") return true;
  if (scope === "dao") return stateType === "proposal" || stateType === "dao_endorsement";
  if (scope === "marketplace") return stateType === "token_transfer" || stateType === "talent_mobility" || stateType === "leaderboard_entry";
  return true
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const state = readState();
  if (!state.config.optIn || state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" })
  }

  const signature = req.headers["x-zion-signature"], 
  const payload = req.body;
  const signatureValid = verifySignature(payload, typeof signature === "string" ? signature : Array.isArray(signature) ? signature[0] : undefined);
  if (!signatureValid) {
    return res.status(401).json({ error: "Invalid signature" })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(401).json({ error: "Invalid signature" })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  const event = payload as SyncEvent & { propagate?: boolean };
  if (!event || !event.type || !event.eventId) {
<<<<<<< HEAD
<<<<<<< HEAD
    return res.status(400).json({ error: 'Invalid event' });
=======
    return res.status(400).json({ error: "Invalid event" })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  if (!isAllowedByScope(event.type, state.config.scope)) {
    return res.status(403).json({ error: "Event type not allowed by current scope" })
  }

  if (event.type === "proposal") {
    const votes = (event as any).payload?.votes;
    const providedRoot = event.merkleRoot;
    if (!Array.isArray(votes) || !providedRoot) {
      return res.status(400).json({ error: "Proposal events require votes[] and merkleRoot" })
    }
    const computed = computeMerkleRootFromVotes(votes);
    if (computed !== providedRoot) {
<<<<<<< HEAD
      return res.status(400).json({ error: 'Merkle root mismatch' });
=======
    return res.status(400).json({ error: "Invalid event" })
  }

  if (!isAllowedByScope(event.type, state.config.scope)) {
    return res.status(403).json({ error: "Event type not allowed by current scope" })
  }

  if (event.type === "proposal") {
    const votes = (event as any).payload?.votes;
    const providedRoot = event.merkleRoot;
    if (!Array.isArray(votes) || !providedRoot) {
      return res.status(400).json({ error: "Proposal events require votes[] and merkleRoot" })
    }
    const computed = computeMerkleRootFromVotes(votes);
    if (computed !== providedRoot) {
      return res.status(400).json({ error: "Merkle root mismatch" })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      return res.status(400).json({ error: "Merkle root mismatch" })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  }

  const entityId = getEntityId(event);
  const currentState = readState();
  upsertEvent(currentState, event);
  writeState(currentState);

  const alreadyPropagated = payload.propagate === false;

  if (!alreadyPropagated && currentState.config.peers.length > 0) {
    const headers: Record<string, string> = {};
    const localBody = { ...event, propagate: false };
<<<<<<< HEAD
<<<<<<< HEAD
    const baseSignature = require('../../../utils/sync/signature');
=======
    const baseSignature = require("../../../utils/sync/signature");
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    const sig = baseSignature.signPayload(localBody);
    if (sig) headers["x-zion-signature"] = sig;

    await Promise.all(
      currentState.config.peers
        .filter((p) => !p.paused)
        .map(async (peer) => {
          const url = new URL("/api/sync/publish", peer.baseUrl).toString();
          try {
<<<<<<< HEAD
            await axios.post(url, localBody, { headers, timeout: 5000 });
=======
    const baseSignature = require("../../../utils/sync/signature");
    const sig = baseSignature.signPayload(localBody);
    if (sig) headers["x-zion-signature"] = sig;

    await Promise.all(
      currentState.config.peers
        .filter((p) => !p.paused)
        .map(async (peer) => {
          const url = new URL("/api/sync/publish", peer.baseUrl).toString();
          try {
            await axios.post(url, localBody, { headers, timeout: 5000 })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            await axios.post(url, localBody, { headers, timeout: 5000 })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          } catch {
            // ignore peer failure
          }
        })
<<<<<<< HEAD
<<<<<<< HEAD
    );
  }

  return res.status(200).json({ status: 'accepted', entityId });
=======
    )
  }

  return res.status(200).json({ status: "accepted", entityId })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    )
  }

  return res.status(200).json({ status: "accepted", entityId })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
