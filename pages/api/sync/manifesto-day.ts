import type { NextApiRequest, NextApiResponse } from "next",
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage",
import { signPayload } from "../../../utils/sync/signature"
import axios from "axios"
import { v4 as uuidv4 } from "uuid"
import { nextVersionFor } from "../../../utils/sync/versioning"
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),

  const state = readState()
  if (!state.config.optIn || state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" })
  }

  const { milestoneId, title, timestamp } = req.body as { milestoneId: string, title: string, timestamp?: number },
  if (!milestoneId || !title) return res.status(400).json({ error: "milestoneId, title required" }),

  const state = readState()
  if (!state.config.optIn || state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" })
  }

  const { milestoneId, title, timestamp } = req.body as { milestoneId: string, title: string, timestamp?: number },
  if (!milestoneId || !title) return res.status(400).json({ error: "milestoneId, title required" }),
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

  const version = nextVersionFor(state, milestoneId),
  const event = {
    eventId: uuidv4(),
    type: &quot;leaderboard_entry&quot; as const, // reuse as a generic announcement carrier with category
    payload: { id: milestoneId, subjectId: milestoneId, score: 0, category: `milestone:${title}`, period: undefined, rank: undefined },
import type {_NextApiRequest, _NextApiResponse} from "next";
import axios from "axios";

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed"});

  const _state = readState();
  if (!state.config.optIn || state.config.paused) {_return res.status(403).json({ error: "Sync disabled for this instance"});
  }

  const {_milestoneId, _title, _timestamp} = req.body as {_milestoneId: string; title: string; timestamp?: number};
  if (!milestoneId || !title) return res.status(400).json({_error: "milestoneId, _title required"});

  const _version = nextVersionFor(state, milestoneId);
  const _event = {_eventId: uuidv4(), _type: "leaderboard_entry" as const, _// reuse as a generic announcement carrier with category
    payload: { id: milestoneId, _subjectId: milestoneId, _score: 0, _category: `milestone:${title}`, period: undefined, rank: undefined },
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    originInstanceId: state.config.instanceId,
    version,
    timestamp: timestamp || Date.now()},

  upsertEvent(state, event),
  writeState(state),

  const body = { ...event, propagate: false },
  const headers: Record<string, string> = {},
  const sig = signPayload(body)
  if (sig) headers["x-zion-signature"] = sig,
  const _body = {_...event, _propagate: false};
  const headers: Record<string, string> = {};
  const _sig = signPayload(body);
  if (sig) headers["x-zion-signature"] = sig;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

  await Promise.all(_state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {
      })
  ),

>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
}