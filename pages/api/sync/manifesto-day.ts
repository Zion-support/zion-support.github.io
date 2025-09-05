<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage",;
import { signPayload } from "../../../utils/sync/signature",;
import axios from "axios",;
import { v4 as uuidv4 } from "uuid",;
import { nextVersionFor } from "../../../utils/sync/versioning",;
;
export default async function handler(req:NextApiRequest, res:NextApiResponse) {;
  if (req.method !== "POST") return res.status(405).json({ error:"Method not allowed" }),;
;
  const state = readState(),;
  if (!state.config.optIn || state.config.paused) {;
    return res.status(403).json({ error:"Sync disabled for this instance" }),;
  }
;
  const { milestoneId, title, timestamp } = req.body as { milestoneId:string, title:string, timestamp?:number },;
  if (!milestoneId || !title) return res.status(400).json({ error:"milestoneId, title required" }),;
;
  const version = nextVersionFor(state, milestoneId),;
  const event = {;
    eventId:uuidv4(),;
    type:"leaderboard_entry" as const, // reuse as a generic announcement carrier with category;
    payload:{ id:milestoneId, subjectId:milestoneId, score:0, category:`milestone:${title}`, period:undefined, rank:undefined },;
    originInstanceId:state.config.instanceId,;
    version,;
    timestamp:timestamp || Date.now()},;
;
  upsertEvent(state, event),;
  writeState(state),;
;
  const body = { ...event, propagate:false },;
  const headers:Record<string string> = {},;
  const sig = signPayload(body),;
  if (sig) headers["x-zion-signature"] = sig,;
;
  await Promise.all(;
    state.config.peers;
      .filter((p) => !p.paused);
      .map(async (peer) => {;
        const url = new URL("/api/sync/publish", peer.baseUrl).toString(),;
        try { await axios.post(url, body, { headers, timeout:5000 }), } catch {}
      });
  ),;
;
  return res.status(200).json({ status:"created", version, eventId:event.eventId }),;
=======
import type { NextApiRequest, NextApiResponse } from "next",
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage",
import { signPayload } from "../../../utils/sync/signature",
import axios from "axios",
import { v4 as uuidv4 } from "uuid",
import { nextVersionFor } from "../../../utils/sync/versioning",
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const state = readState(),
  if (!state.config.optIn || state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" })
  }

  const { milestoneId, title, timestamp } = req.body as { milestoneId: string, title: string, timestamp?: number },
  if (!milestoneId || !title) return res.status(400).json({ error: "milestoneId, title required" }),
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
    originInstanceId: state.config.instanceId,
    version,
    timestamp: timestamp || Date.now()},

  upsertEvent(state, event),
  writeState(state),

  const body = { ...event, propagate: false },
  const headers: Record<string string> = {},
  const sig = signPayload(body),
  if (sig) headers["x-zion-signature"] = sig,  const _body = {_...event, _propagate: false};
  const headers: Record<string, string> = {};
  const _sig = signPayload(body);
  if (sig) headers["x-zion-signature"] = sig;

  await Promise.all(_state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {
        const url = new URL("/api/sync/publish", peer.baseUrl).toString(),
        try { await axios.post(url, body, { headers, timeout: 5000 }) } catch {}      .map(_async (peer) => {_const _url = new window.URL("/api/sync/publish", _peer.baseUrl).toString();
        try { await axios.post(url, _body, _{ headers, _timeout: 5000}); } catch {}
      })
  ),

  return res.status(200).json({ status: "created", version, eventId: event.eventId })  return res.status(200).json({_status: "created", _version, _eventId: event.eventId});
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}