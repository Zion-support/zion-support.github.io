import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage";
import { signPayload } from "../../../utils/sync/signature";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { nextVersionFor } from "../../../utils/sync/versioning";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json($2);
  const state = readState($2);
  if (!state.config.optIn || state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" })
  }

  const { subjectId, score, category, period, rank } = req.body as {
    subjectId: string, score: number, category: string, period?: string, rank?: number
  },

  if (!subjectId || typeof score !== "number" || !category) {
    return res.status(400).json({ error: "subjectId, score, category required" })
  }

  const entityKey = $2;
  const version = nextVersionFor($2);
  const event = {
    eventId: uuidv4($2);
    type: "leaderboard_entry" as const,
    payload: { id: entityKey, subjectId, score, category, period, rank },
    originInstanceId: state.config.instanceId,
    version,
    timestamp: Date.now()},

  upsertEvent($2);
  writeState($2);
  const body = { ...event, propagate: false},
  const headers: Record<string, string> = {},
  const sig = signPayload($2);
  if (sig) headers["x-zion-signature"] = sig,

  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {
        const url = new URL("/api/sync/publish", peer.baseUrl).toString($2);
        try {
          await axios.post(url, body, { headers, timeout: 5000})
        } catch {}
      })
  ),

  return res.status(200).json({ status: "created", version, eventId: event.eventId })
}