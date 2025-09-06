<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage";

import { computeMerkleRootFromVotes } from "../../../utils/sync/merkle";
import { signPayload } from "../../../utils/sync/signature";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const state = readState()
  if (!state.config.optIn |state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" })
  }
  const { proposalId, title, votes } = req.body as { proposalId: string, title: string, votes: { voterId: string, weight: number, choice: string }[] }
  if (!proposalId |!title |!Array.isArray(votes)) {
    return res.status(400).json({ error: "proposalId, title, votes[] required" })
  }
  const merkleRoot = computeMerkleRootFromVotes(votes)
  const version = (state.latestVersionByEntityId[proposalId] |0) + 1
  const event = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
    eventId: uuidv4()
    type: "proposal" as const
    payload: { id: proposalId, proposalId, title, votes }
    originInstanceId: state.config.instanceId
    version
    timestamp: Date.now()
merkleRoot}
  upsertEvent(state, event)
  writeState(state)
  const body = { ...event, propagate: false }
  const headers: Record<string, string> = {}
  const sig = signPayload(body)
  if (sig) headers["x-zion-signature"] = sig
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    eventId: uuidv4(), type: "proposal" as const,
    payload: {
       id: proposalId, proposalId, title, votes 
    },
    originInstanceId: state.config.instanceId, version,
    timestamp: Date.now(),
    merkleRoot};

  upsertEvent(state, event);
  writeState(state);

  const body = { ...event, propagate: false };
  const headers: Record<string, string> = {};
  const sig = signPayload(body);
  if (sig) headers["x-zion-signature"] = sig;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {
<<<<<<< HEAD
        const url = new URL("/api/sync/publish", peer.baseUrl).toString();
        try {
          await axios.post(url, body, { headers, timeout: 5000 })
        } catch {
          // ignore
        }
      })
  );

  return res.status(200).json({ status: "created", merkleRoot, version, eventId: event.eventId })
}
=======
        const url = new URL("/api/sync/publish", peer.baseUrl).toString()
=======
import type { NextApiRequest, NextApiResponse } from './next';,
import { read_state, write_state, upsert_event  } from '../../../utils / sync / storage';,
import { computeMerkleRootFromVotes  } from '../../../utils / sync / merkle';,
import { sign_payload  } from '../../../utils / sync / signature';,
import axios from './axios';,
import { v4 as uuidv4  } from './uuid';,
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: "Method not allowed" }), ) {
  $2
}
  const state = read_state (),
  // Check condition
if ( {) {
  $2
}
    return res.status (403).json ({ error: "Sync disabled for this instance" });
  }
  const { proposal_id, title, votes } = req.body as { proposal_id: string, title: string, votes: { voter_id: string, weight: number, choice: string }[] },
  if () {) {
  $2
}
    return res.status (400).json ({ error: "proposal_id, title, votes[] required" });
  }
  const merkle_root = computeMerkleRootFromVotes (votes),
  const version = (state.latestVersionByEntityId[proposal_id] || 0) + 1,
  const event = {
    event_id: uuidv4 (),
    type: "proposal" as const,
    payload: { id: proposal_id, proposal_id, title, votes },
    originInstanceId: state.config.instance_id,
    version,
    timestamp: Date.now (),
merkle_root},
  upsert_event (state, event),
  write_state (state),
  const body = { ...event, propagate: false },
  const headers: Record < string, string> = {},
  const sig = sign_payload (body),
  // Check condition
if (headers["x - zion - signature"] = sig, ) {
  $2
}
  await Promise.all (
    state.config.peers;
      .filter ((p) => !p.paused);
      .map (async (peer) => {
        const url = new URL ("/api / sync / publish", peer.base_url).to_string (),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        try {
          await axios.post (url, body, { headers, timeout: 5000 });
        } catch {
          // ignore;
        }
<<<<<<< HEAD
      })
  )

  return res.status(200).json({ status: "created", merkleRoot, version, eventId: event.eventId })
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
      })),
  return res.status (200).json ({ status: "created", merkle_root, version, event_id: event.event_id });
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
