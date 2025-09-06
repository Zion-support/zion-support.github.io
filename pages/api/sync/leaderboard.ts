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

  const state = readState()
  if (!state.config.optIn || state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" })
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
  }

  const { subjectId, score, category, period, rank } = req.body as {
    subjectId: string, score: number, category: string, period?: string, rank?: number
  },

  if (!subjectId || typeof score !== "number" || !category) {
    return res.status(400).json({ error: "subjectId, score, category required" })
  }

  const entityKey = `${subjectId}:${period || "global"}:${category}`
  const version = nextVersionFor(state, entityKey),

  const event = {
    eventId: uuidv4(),
    type: &quot;leaderboard_entry&quot; as const,
    payload: { id: entityKey, subjectId, score, category, period, rank },
import type {_NextApiRequest, _NextApiResponse} from "next";
import axios from "axios";

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed"});

  const _state = readState();
  if (!state.config.optIn || state.config.paused) {_return res.status(403).json({ error: "Sync disabled for this instance"});
  }

  const {_subjectId, _score, _category, _period, _rank} = req.body as {_subjectId: string; score: number; category: string; period?: string; rank?: number;};

  if (!subjectId || typeof score !== "number" || !category) {_return res.status(400).json({ error: "subjectId, _score, _category required"});
  }

  const _entityKey = `${_subjectId}:${_period || "global"}:${_category}`;
  const _version = nextVersionFor(state, entityKey);

  const _event = {_eventId: uuidv4(), _type: "leaderboard_entry" as const, _payload: { id: entityKey, _subjectId, _score, _category, _period, _rank},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    originInstanceId: state.config.instanceId,
    version,
    timestamp: Date.now()},

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
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
        } catch {}
      })
  ),

  return res.status(200).json({ status: "created", version, eventId: event.eventId })
  return res.status(200).json({_status: "created", _version, _eventId: event.eventId});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
}