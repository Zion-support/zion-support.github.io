>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage";

import { signPayload } from "../../../utils/sync/signature";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { nextVersionFor } from "../../../utils/sync/versioning";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const state = readState()
  if (!state.config.optIn |state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" })
  }
  const { subjectId, score, category, period, rank } = req.body as {
    subjectId: string, score: number, category: string, period?: string, rank?: number
  }
  if (!subjectId |typeof score !== "number" |!category) {
    return res.status(400).json({ error: "subjectId, score, category required" })
  }
  const entityKey = `${subjectId}:${period |"global"}:${category}`
  const version = nextVersionFor(state, entityKey)
  const event = {
  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {
        try {
          await axios.post (url, body, { headers, timeout: 5000 });
        } catch {}
=======
      })),
  return res.status (200).json ({ status: "created", version, event_id: event.event_id });
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
