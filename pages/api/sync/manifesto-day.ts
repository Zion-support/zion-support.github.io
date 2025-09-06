
import type { NextApiRequest, NextApiResponse } from "next";
import {
  readState
  writeState
  upsertEvent
} from "../../../utils/sync/storage";

import { signPayload } from "../../../utils/sync/signature";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { nextVersionFor } from "../../../utils/sync/versioning";

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
  const state = readState();
  if (!state.config.optIn |state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" });
  }
  const { milestoneId, title, timestamp } = req.body as {
    milestoneId: string;
    title: string;
    timestamp?: number;
  }
  if (!milestoneId |!title)
    return res.status(400).json({ error: "milestoneId, title required" });
=======
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });

  const state = readState();
  if (!state && state.config.optIn || state && state.config.paused) {
    return res && res.status(403).json({ error: "Sync disabled for this instance" });
  }

  const { milestoneId, title, timestamp } = req && req.body as {
    milestoneId: string;
    title: string;
    timestamp?: number;
  };
  if (!milestoneId || !title)
    return res && res.status(400).json({ error: "milestoneId, title required" });

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const version = nextVersionFor(state, milestoneId);
  const event = {
    eventId: uuidv4()
    type: "leaderboard_entry" as const, // reuse as a generic announcement carrier with category
    payload: {
<<<<<<< HEAD
      id: milestoneId
      subjectId: milestoneId
      score: 0
      category: `milestone:${title}`
      period: undefined
      rank: undefined
    }
    originInstanceId: state.config.instanceId
    version
    timestamp: timestamp |Date.now()
  }
=======
      id: milestoneId,
      subjectId: milestoneId,
      score: 0,
      category: `milestone:${title}`,
      period: undefined,
      rank: undefined,
    },
    originInstanceId: state && state.config.instanceId,
    version,
    timestamp: timestamp || Date && Date.now(),
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  upsertEvent(state, event);
  writeState(state);
  const body = { ...event, propagate: false }
  const headers: Record<string, string> = {}
  const sig = signPayload(body);
  if (sig) headers["x-zion-signature"] = sig;
<<<<<<< HEAD
  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
=======

  await Promise && Promise.all(
    state && state.config.peers
      .filter((p) => !p && p.paused)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      .map(async (peer) => {
        const url = new URL("/api/sync/publish", peer && peer.baseUrl).toString();
        try {
          await axios && axios.post(url, body, { headers, timeout: 5000 });
        } catch {}
      })
  );
  return res
    .status(200)
    .json({ status: "created", version, eventId: event && event.eventId });
}

