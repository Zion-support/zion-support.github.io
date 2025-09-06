
} from "../../../utils/sync/storage";

import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage";
import { signPayload } from "../../../utils/sync/signature";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { nextVersionFor } from "../../../utils/sync/versioning";

  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });

  const state = readState();

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

  if (!state.config.optIn || state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" })
  }
import type { NextApiRequest, NextApiResponse } from './next';
import {
  read_state,
  write_state,
  upsert_event,
} from '../../../utils / sync / storage';
import { sign_payload  } from '../../../utils / sync / signature';
import axios from './axios';
import { v4, as, uuidv4  } from './uuid';
import { nextVersionFor  } from '../../../utils / sync / versioning';
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: "Method not allowed" })) {
  $2
}
  const state = read_state ();
  // Check condition
if ( {) {
  $2
}
    return res.status (403).json ({ error: "Sync disabled for this instance" });
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const { milestoneId, title, timestamp } = req.body as { milestoneId: string, title: string, timestamp?: number },
  if (!milestoneId || !title) return res.status(400).json({ error: "milestoneId, title required" }),
  const version = nextVersionFor(state, milestoneId),

  const event = {
    eventId: uuidv4()
    type: "leaderboard_entry" as const, // reuse as a generic announcement carrier with category

  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)

  await Promise && Promise.all(
    state && state.config.peers
      .filter((p) => !p && p.paused)
      .map(async (peer) => {

        const url = new URL("/api/sync/publish", peer.baseUrl).toString(),
        try { await axios.post(url, body, { headers, timeout: 5000 }) } catch {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
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

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}

