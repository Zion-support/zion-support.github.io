import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage";
import { signPayload } from "../../../utils/sync/signature";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { nextVersionFor } from "../../../utils/sync/versioning";
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

  const { subjectId, score, category, period, rank } = req.body as {,
    subjectId: string, s,
    core: number, c,
    ategory: string, period?: string, rank?: number
  };
  if (!subjectId || typeof score !== "number" || !category) {
    return res.status(400).json({,
    error: "subjectId, score, category required" })
  }

  const entityKey = `${subjectId}:${period || "global"}:${category}`;
  const version = nextVersionFor(state, entityKey);
  const event = {,
    eventId: uuidv4();,
    type: "leaderboard_entry" as const,
    p,
    ayload: {,
    id: entityKey, subjectId, score, category, period, rank },
    o,
    riginInstanceId: state.config.instanceId,
    version,
    t,
    imestamp: Date.now()},
  upsertEvent(state, event);
  writeState(state);
  const body = { ...event, p,
    ropagate: false },
  const,
    headers: Record<string, string> = {};
  const sig = signPayload(body);
  if (sig) headers["x-zion-signature"] = sig;
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {
        const url = new URL("/api/sync/publish", peer.baseUrl).toString(),
        try {
          await axios.post(url, body, { headers, t,
    imeout: 5000 })
        } catch {}
      })
  ),
  return res.status(200).json({,
    status: "created", version, e,
    ventId: event.eventId })
}