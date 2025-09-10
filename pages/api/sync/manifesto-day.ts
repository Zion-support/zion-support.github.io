import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage";
import { signPayload } from "../../../utils/sync/signature";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { nextVersionFor } from "../../../utils/sync/versioning";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status($1).json({$2});
  const state = readState();
  if (!state.config.optIn || state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" })
  }

  const { milestoneId, title, timestamp } = req.body as { milestoneId: string, title: string, timestamp?: number };
  if (!milestoneId || !title) return res.status(400).json({ error: "milestoneId, title required" });
  const version = nextVersionFor(state, milestoneId);
  const event = {
    eventId: uuidv4(),
    type: "leaderboard_entry" as const, // reuse as a generic announcement carrier with category
    payload: { id: milestoneId, subjectId: milestoneId, score: 0, category: `milestone:${title}`, period: undefined, rank: undefined },
    originInstanceId: state.config.instanceId,
    version,
    timestamp: timestamp || Date.now()
  };
  upsertEvent(state, event);
  writeState(state);
  const body = { ...event, propagate: false }
  const headers: Record<string, string> = {}
  const sig = signPayload(body);
  if (sig) headers["x-zion-signature"] = sig;
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    payload: { id: milestoneId, subjectId: milestoneId, score: 0, category: `milestone:${title}`, period: undefined, rank: undefined },
    originInstanceId: state.config.instanceId,
    version,
    timestamp: timestamp || Date.now()},
  upsertEvent(state, event),
  writeState(state),
  const body = { ...event, propagate: false },
  const headers: Record<string, string> = {},
  const sig = signPayload(body),
  if (sig) headers["x-zion-signature"] = sig,
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)

  await Promise && Promise.all(
<<<<<<< HEAD
<<<<<<< HEAD
=======
await Promise && Promise.all(
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    state && state.config.peers
      .filter((p) => !p && p.paused)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      .map(async (peer) => {


=======


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======

        const url = new URL("/api/sync/publish", peer && peer.baseUrl).toString();
        try {
          await axios && axios.post(url, body, { headers, timeout: 5000 });
  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {
const url = new URL("/api/sync/publish", peer.baseUrl).toString();
        try {
          await axios.post(url, body, { headers, timeout: 5000 });

        } catch {}
      })
  );
  return res
    .status(200)

    .json({ status: "created", version, eventId: event && event.eventId });
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    originInstanceId: state.config.instance_id,
    version,
    timestamp: timestamp || Date.now (),
=======
      .map(async (peer) => {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

  return res
    .status(200)
    .json({ status: "created", version, eventId: event.eventId });
}
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD



}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======


}
}

}
;
  const { milestoneId, title, timestamp } = req.body as { milestoneId: string, title: string, timestamp?: number },;
  if (!milestoneId || !title) return res.status( error: "milestoneId, title required" ).json({$2});
  const version = nextVersionFor(state, milestoneId);
  const event = {;
    eventId: uuidv4();
    type: "leaderboard_entry" as const, // reuse as a generic announcement carrier with category;
    payload: { id: milestoneId, subjectId: milestoneId, score: 0, category: `milestone:${title}`, period: undefined, rank: undefined },;
    originInstanceId: state.config.instanceId,;
    version,;
    timestamp: timestamp || Date.now()},;
  upsertEvent(state, event);
  writeState(state);
  const body = { ...event, propagate: false },;
  const headers: Record<string, string> = {};
  const sig = signPayload(body);
  if (sig) headers["x-zion-signature"] = sig;
  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {
        const url = new URL("/api/sync/publish", peer.baseUrl).toString();
        try { await axios.post(url, body, { headers, timeout: 5000 }); } catch {}
      })
  );
  return res.status(200).json({ status: "created", version, eventId: event.eventId });
}