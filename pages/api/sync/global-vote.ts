import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage";
import { computeMerkleRootFromVotes } from "../../../utils/sync/merkle";
import { signPayload } from "../../../utils/sync/signature";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
export default async function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({,
    error: "Method not allowed" });
  const state = readState();
  if (!state.config.optIn || state.config.paused) {
    return res.status(403).json({,
    error: "Sync disabled for this instance" })
  }

  const { proposalId, title, votes } = req.body as {,
    proposalId: string, t,
    itle: string, v,
    otes: {,
    voterId: string, w,
    eight: number, c,
    hoice: string }[] },
  if (!proposalId || !title || !Array.isArray(votes)) {
    return res.status(400).json({,
    error: "proposalId, title, votes[] required" })
  }

  const merkleRoot = computeMerkleRootFromVotes(votes);
  const version = (state.latestVersionByEntityId[proposalId] || 0) + 1;
  const event = {,
    eventId: uuidv4();,
    type: "proposal" as const,
    p,
    ayload: {,
    id: proposalId, proposalId, title, votes },
    o,
    riginInstanceId: state.config.instanceId,
    version,
    t,
    imestamp: Date.now();
    merkleRoot};
  upsertEvent(state, event);
  writeState(state);
  const body = { ...event, p,
    ropagate: false },
  const,
    headers: Record<string, string> = {};
  const sig = signPayload(body);
  if (sig) headers["x-zion-signature"] = sig;
  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {
        const url = new URL("/api/sync/publish", peer.baseUrl).toString();
        try {
          await axios.post(url, body, { headers, t,
    imeout: 5000 })
        } catch {
          // ignore
        }
      })
  ),
  return res.status(200).json({,
    status: "created", merkleRoot, version, e,
    ventId: event.eventId })
}