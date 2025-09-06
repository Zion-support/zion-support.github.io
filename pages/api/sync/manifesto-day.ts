<<<<<<< HEAD
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
import {
  readState
  writeState
  upsertEvent
<<<<<<< HEAD
=======
=======
import type { NextApiRequest, NextApiResponse } from "next";
import {
  readState,
  writeState,
  upsertEvent,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
} from "../../../utils/sync/storage";

import { signPayload } from "../../../utils/sync/signature";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { nextVersionFor } from "../../../utils/sync/versioning";

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
  const state = readState();
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  if (!state.config.optIn |state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" });
  }
  const { milestoneId, title, timestamp } = req.body as {
    milestoneId: string;
    title: string;
    timestamp?: number;
<<<<<<< HEAD
=======
  }
  if (!milestoneId |!title)
    return res.status(400).json({ error: "milestoneId, title required" });
  const version = nextVersionFor(state, milestoneId);
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
  res.status(200).json({ message: 'Manifesto day processed' });
import type { NextApiRequest, NextApiResponse } from "next",
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage",
import { signPayload } from "../../../utils/sync/signature",
import axios from "axios",
import { v4 as uuidv4 } from "uuid",
import { nextVersionFor } from "../../../utils/sync/versioning",
export default async function handler(req, res) {
  try {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const state = readState(),
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  if (!state.config.optIn || state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" })
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  }
  if (!milestoneId |!title)
    return res.status(400).json({ error: "milestoneId, title required" });

  const version = nextVersionFor(state, milestoneId);
  const event = {
    eventId: uuidv4()
    type: "leaderboard_entry" as const, // reuse as a generic announcement carrier with category
    payload: {
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
      score: 0,
      category: `milestone:${title}`,
      period: undefined,
      rank: undefined,
    },
    originInstanceId: state && state.config.instanceId,
    version,
    timestamp: timestamp || Date && Date.now(),
  };

  upsertEvent(state, event);
  writeState(state);
  const body = { ...event, propagate: false }
  const headers: Record<string, string> = {}
  const sig = signPayload(body);
  if (sig) headers["x-zion-signature"] = sig;
  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {
<<<<<<< HEAD
        const url = new URL("/api/sync/publish", peer && peer.baseUrl).toString();
        try {
          await axios && axios.post(url, body, { headers, timeout: 5000 });
=======
<<<<<<< HEAD
        const url = new URL("/api/sync/publish", peer.baseUrl).toString();
        try {
          await axios.post(url, body, { headers, timeout: 5000 });
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
        } catch {}
      })
  );
  return res
    .status(200)
<<<<<<< HEAD
    .json({ status: "created", version, eventId: event && event.eventId });
}

=======
    .json({ status: "created", version, eventId: event.eventId });
<<<<<<< HEAD
}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    originInstanceId: state.config.instance_id,
    version,
    timestamp: timestamp || Date.now (),
  }
;
  upsert_event (state, event);
  write_state (state);
;
  const body = { ...event, propagate: false }
  const headers: Record < string, string> = {}
  const sig = sign_payload (body);
  // Check condition
if (headers["x - zion - signature"] = sig) {
  $2
}
  await Promise.all (
    state.config.peers;
      .filter ((p) => !p.paused);
      .map (async (peer) => {
        const url = new URL ("/api / sync / publish", peer.base_url).to_string ();
        try {
          await axios.post (url, body, { headers, timeout: 5000 });
        } catch {}
      }),
  );
;
  return res;
    .status (200);
    .json ({ status: "created", version, event_id: event.event_id });
}
<<<<<<< HEAD
=======

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
