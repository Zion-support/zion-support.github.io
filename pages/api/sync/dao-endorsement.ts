import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage",;
import { signPayload } from "../../../utils/sync/signature",;
import axios from "axios",;
import { v4 as uuidv4 } from "uuid",;
import { nextVersionFor } from "../../../utils/sync/versioning",;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const state = readState()
  if (!state.config.optIn |state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" })
  }
  const { fromDAO, toDAO, resolutionId, decision, timestamp } = req.body as {
    fromDAO: string, toDAO: string, resolutionId: string, decision: "endorse" | "reject", timestamp?: number
<<<<<<< HEAD
=======

  };
  if (!fromDAO || !toDAO || !resolutionId || !decision) {
    return res.status(400).json({ error: "fromDAO, toDAO, resolutionId, decision required" })

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  }
  if (!fromDAO |!toDAO |!resolutionId |!decision) {
    return res.status(400).json({ error: "fromDAO, toDAO, resolutionId, decision required" })
  }
  const version = nextVersionFor(state, resolutionId)
  const event = {
<<<<<<< HEAD
    eventId: uuidv4(),
    type: "dao_endorsement" as const,
    payload: { id: resolutionId, fromDAO, toDAO, resolutionId, decision, timestamp: timestamp || Date.now() },
    originInstanceId: state.config.instanceId,
    version,
    timestamp: Date.now()},
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b



  upsertEvent(state, event);
  writeState(state);

  const body = { ...event, propagate: false };
  const headers: Record<string, string> = {};
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
          await axios.post(url, body, { headers, timeout: 5000 })
        } catch {}
      })
  ),

  return res.status(200).json({ status: "created", version, eventId: event.eventId })
};