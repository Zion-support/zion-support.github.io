<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage",;
import { computeMerkleRootFromVotes } from "../../../utils/sync/merkle",;
import { signPayload } from "../../../utils/sync/signature",;
import axios from "axios",;
import { v4 as uuidv4 } from "uuid",;
;
export default async function handler(req:NextApiRequest, res:NextApiResponse) {;
  if (req.method !== "POST") return res.status(405).json({ error:"Method not allowed" }),;
;
  const state = readState(),;
  if (!state.config.optIn || state.config.paused) {;
    return res.status(403).json({ error:"Sync disabled for this instance" }),;
  }
;
  const { proposalId, title, votes } = req.body as { proposalId:string, title:string, votes:{ voterId:string, weight:number, choice:string }[] },;
  if (!proposalId || !title || !Array.isArray(votes)) {;
    return res.status(400).json({ error:"proposalId, title, votes[] required" }),;
  }
;
  const merkleRoot = computeMerkleRootFromVotes(votes),;
  const version = (state.latestVersionByEntityId[proposalId] || 0) + 1,;
  const event = {;
    eventId:uuidv4(),;
    type:"proposal" as const,;
    payload:{ id:proposalId, proposalId, title, votes },;
    originInstanceId:state.config.instanceId,;
    version,;
    timestamp:Date.now(),;
    merkleRoot},;
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
        try {;
          await axios.post(url, body, { headers, timeout:5000 }),;
        } catch {;
          // ignore;
        }
      });
  ),;
;
  return res.status(200).json({ status:"created", merkleRoot, version, eventId:event.eventId }),;
=======
import type { NextApiRequest, NextApiResponse } from "next",
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage",
import { computeMerkleRootFromVotes } from "../../../utils/sync/merkle",
import { signPayload } from "../../../utils/sync/signature",
import axios from "axios",
import { v4 as uuidv4 } from "uuid",
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const state = readState(),
  if (!state.config.optIn || state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" })  }

  const { proposalId, title, votes } = req.body as { proposalId: string, title: string, votes: { voterId: string, weight: number, choice: string }[] },
  if (!proposalId || !title || !Array.isArray(votes)) {
    return res.status(400).json({ error: "proposalId, title, votes[] required" })  }

  const merkleRoot = computeMerkleRootFromVotes(votes),
  const version = (state.latestVersionByEntityId[proposalId] || 0) + 1,
  const event = {
    eventId: uuidv4(),
    type: &quot;proposal&quot; as const,
    payload: { id: proposalId, proposalId, title, votes },
import type {_NextApiRequest, _NextApiResponse} from "next";
import axios from "axios";

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed"});

  const _state = readState();
  if (!state.config.optIn || state.config.paused) {_return res.status(403).json({ error: "Sync disabled for this instance"});
  }

  const {_proposalId, _title, _votes} = req.body as {_proposalId: string; title: string; votes: { voterId: string; weight: number; choice: string}[] };
  if (!proposalId || !title || !Array.isArray(votes)) {_return res.status(400).json({ error: "proposalId, _title, _votes[] required"});
  }

  const _merkleRoot = computeMerkleRootFromVotes(votes);
  const _version = (state.latestVersionByEntityId[proposalId] || 0) + 1;
  const _event = {_eventId: uuidv4(), _type: "proposal" as const, _payload: { id: proposalId, _proposalId, _title, _votes},
    originInstanceId: state.config.instanceId,
    version,
    timestamp: Date.now(),
    merkleRoot},

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
        const url = new URL("/api/sync/publish", peer.baseUrl).toString(),        try {
          await axios.post(url, body, { headers, timeout: 5000 })
        } catch {
          // ignore
        }
      .map(_async (peer) => {_const _url = new window.URL("/api/sync/publish", _peer.baseUrl).toString();
        try {
          await axios.post(url, _body, _{ headers, _timeout: 5000});
        } catch {_// ignore}
      })
  ),

  return res.status(200).json({ status: "created", merkleRoot, version, eventId: event.eventId })  return res.status(200).json({_status: "created", _merkleRoot, _version, _eventId: event.eventId});
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}