<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  readState,
  writeState,
  upsertEvent,;
} from '../../../utils/sync/storage';
import { signPayload } from '../../../utils/sync/signature';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { nextVersionFor } from '../../../utils/sync/versioning';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });

=======
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage";
import { signPayload } from "../../../utils/sync/signature";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { nextVersionFor } from "../../../utils/sync/versioning";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status($1).json({$2});
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const state = readState();
  if (!state.config.optIn || state.config.paused) {
    return res.status(403).json({ error: 'Sync disabled for this instance' });
  }

  const { fromDAO, toDAO, resolutionId, decision, timestamp } = req.body as {
    fromDAO: string;
    toDAO: string;
    resolutionId: string;
    decision: 'endorse' | 'reject';
    timestamp?: number;
  };
<<<<<<< HEAD

  if (!fromDAO || !toDAO || !resolutionId || !decision) {
    return res
      .status(400)
      .json({ error: 'fromDAO, toDAO, resolutionId, decision required' });  }

  const version = nextVersionFor(state, resolutionId);
  const event = {
    eventId: uuidv4(),
    type: 'dao_endorsement' as const,
    payload: {
      id: resolutionId,
      fromDAO,
      toDAO,
      resolutionId,
      decision,
      timestamp: timestamp || Date.now(),
    },
    originInstanceId: state.config.instanceId,
    version,
    timestamp: Date.now(),
  };
=======
  if (!fromDAO || !toDAO || !resolutionId || !decision) {
    return res.status(400).json({ error: "fromDAO, toDAO, resolutionId, decision required" })
  }

  const version = nextVersionFor(state, resolutionId);
  const event = {
    eventId: uuidv4();
    type: "dao_endorsement" as const,
    payload: { id: resolutionId, fromDAO, toDAO, resolutionId, decision, timestamp: timestamp || Date.now() },
    originInstanceId: state.config.instanceId,
    version;
    timestamp: Date.now()},
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  upsertEvent(state, event);
  writeState(state);
  const body = { ...event; propagate: false },
  const headers: Record<string, string> = {};
  const sig = signPayload(body);
<<<<<<< HEAD
  if (sig) headers['x-zion-signature'] = sig;

  await Promise.all(
    state.config.peers
      .filter(p => !p.paused)
      .map(async peer => {
        const url = new URL('/api/sync/publish', peer.baseUrl).toString();
        try {
          await axios.post(url, body, { headers, timeout: 5000 });        } catch {}
      })
  );

  return res
    .status(200)
    .json({ status: 'created', version, eventId: event.eventId });
=======
  if (sig) headers["x-zion-signature"] = sig;
  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {
        const url = new URL("/api/sync/publish", peer.baseUrl).toString();
        try {
          await axios.post(url, body, { headers, timeout: 5000 })
        } catch {}
      })
  ),
  return res.status(200).json({ status: "created", version, eventId: event.eventId })
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
