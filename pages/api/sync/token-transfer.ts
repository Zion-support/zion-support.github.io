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
  const { txId, token, amount, fromSubnet, toSubnet, timestamp } = req.body as {;
    txId:string,;
    token:string,;
    amount:number,;
    fromSubnet:string,;
    toSubnet:string,;
    timestamp?:number;
  },;
;
  if (!txId || !token || typeof amount !== "number" || !fromSubnet || !toSubnet) {;
    return res.status(400).json({ error:"txId, token, amount, fromSubnet, toSubnet required" }),;
  }
;
  const version = nextVersionFor(state, txId),;
  const event = {;
    eventId:uuidv4(),;
    type:"token_transfer" as const,;
    payload:{ id:txId, txId, token, amount, fromSubnet, toSubnet, timestamp:timestamp || Date.now() },;
    originInstanceId:state.config.instanceId,;
    version,;
    timestamp:Date.now()},;
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
        } catch {}
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
    return res.status(403).json({ error: "Sync disabled for this instance" })  }

  const { txId, token, amount, fromSubnet, toSubnet, timestamp } = req.body as {
    txId: string,
    token: string,
    amount: number,
    fromSubnet: string,
    toSubnet: string,
    timestamp?: number
  },

  if (!txId || !token || typeof amount !== "number" || !fromSubnet || !toSubnet) {
    return res.status(400).json({ error: "txId, token, amount, fromSubnet, toSubnet required" })  }

  const version = nextVersionFor(state, txId),
  const event = {
    eventId: uuidv4(),
    type: &quot;token_transfer&quot; as const,
    payload: { id: txId, txId, token, amount, fromSubnet, toSubnet, timestamp: timestamp || Date.now() },
import type {_NextApiRequest, _NextApiResponse} from "next";
import axios from "axios";

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed"});

  const _state = readState();
  if (!state.config.optIn || state.config.paused) {_return res.status(403).json({ error: "Sync disabled for this instance"});
  }

  const {_txId, _token, _amount, _fromSubnet, _toSubnet, _timestamp} = req.body as {_txId: string;
    token: string;
    amount: number;
    fromSubnet: string;
    toSubnet: string;
    timestamp?: number;};

  if (!txId || !token || typeof amount !== "number" || !fromSubnet || !toSubnet) {_return res.status(400).json({ error: "txId, _token, _amount, _fromSubnet, _toSubnet required"});
  }

  const _version = nextVersionFor(state, txId);
  const _event = {_eventId: uuidv4(), _type: "token_transfer" as const, _payload: { id: txId, _txId, _token, _amount, _fromSubnet, _toSubnet, _timestamp: timestamp || Date.now()},
    originInstanceId: state.config.instanceId,
    version,
    timestamp: Date.now()},

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
      .map(_async (peer) => {_const _url = new window.URL("/api/sync/publish", _peer.baseUrl).toString();
        try {
          await axios.post(url, _body, _{ headers, _timeout: 5000});
        } catch {}
      })
  ),

  return res.status(200).json({ status: "created", version, eventId: event.eventId })  return res.status(200).json({_status: "created", _version, _eventId: event.eventId});
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}