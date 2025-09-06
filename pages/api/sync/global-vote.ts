<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage";
import { computeMerkleRootFromVotes } from "../../../utils/sync/merkle";
import { signPayload } from "../../../utils/sync/signature";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage",;
import { computeMerkleRootFromVotes } from "../../../utils/sync/merkle",;
import { signPayload } from "../../../utils/sync/signature",;
import axios from "axios",;
import { v4 as uuidv4 } from "uuid",;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage";

import { computeMerkleRootFromVotes } from "../../../utils/sync/merkle";
import { signPayload } from "../../../utils/sync/signature";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
<<<<<<< HEAD

=======


    timestamp: Date.now(),
    merkleRoot};

  upsertEvent(state, event);
  writeState(state);

=======
    eventId: uuidv4(), type: "proposal" as const,
    payload: {
       id: proposalId, proposalId, title, votes 
    },
    originInstanceId: state.config.instanceId, version,
    timestamp: Date.now(),
    merkleRoot};
  upsertEvent(state, event);
  writeState(state);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const body = { ...event, propagate: false };
  const headers: Record<string, string> = {};
  const sig = signPayload(body);
  if (sig) headers["x-zion-signature"] = sig;
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        const url = new URL("/api/sync/publish", peer.baseUrl).toString()
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
<<<<<<< HEAD

=======
  return res.status(200).json({ status: "created", merkleRoot, version, eventId: event.eventId });
};

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
  res.status(200).json({ message: 'Global vote processed' });
import type { NextApiRequest, NextApiResponse } from "next",
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage",
import { computeMerkleRootFromVotes } from "../../../utils/sync/merkle",
import { signPayload } from "../../../utils/sync/signature",
import axios from "axios",
import { v4 as uuidv4 } from "uuid",
export default async function handler(req, res) {
  try {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const state = readState(),
  if (!state.config.optIn || state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" })
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const { proposalId, title, votes } = req.body as { proposalId: string, title: string, votes: { voterId: string, weight: number, choice: string }[] },
  if (!proposalId || !title || !Array.isArray(votes)) {
    return res.status(400).json({ error: "proposalId, title, votes[] required" })
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const merkleRoot = computeMerkleRootFromVotes(votes),
  const version = (state.latestVersionByEntityId[proposalId] || 0) + 1,
  const event = {
    eventId: uuidv4(),
    type: "proposal" as const,
    payload: { id: proposalId, proposalId, title, votes },
    originInstanceId: state.config.instanceId,
    version,
    timestamp: Date.now(),
    merkleRoot},
  upsertEvent(state, event),
  writeState(state),
  const body = { ...event, propagate: false },
  const headers: Record<string, string> = {},
  const sig = signPayload(body),
  if (sig) headers["x-zion-signature"] = sig,

  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {
<<<<<<< HEAD

        try {
          await axios.post(url, body, { headers, timeout: 5000 })
        } catch {
          // ignore

=======

        const url = new URL("/api/sync/publish", peer.baseUrl).toString(),

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        try {
          await axios.post (url, body, { headers, timeout: 5000 });
        } catch {

}

=======
=======
        try {
          await axios.post (url, body, { headers, timeout: 5000 });
        } catch {
          // ignore;
        }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      })),
  return res.status (200).json ({ status: "created", merkle_root, version, event_id: event.event_id });
}
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
          // ignore

=======
  }

  const { proposalId, title, votes } = req.body as { proposalId: string, title: string, votes: { voterId: string, weight: number, choice: string }[] },
  if (!proposalId || !title || !Array.isArray(votes)) {
    return res.status(400).json({ error: "proposalId, title, votes[] required" })

  }

  const merkleRoot = computeMerkleRootFromVotes(votes)
  const version = (state.latestVersionByEntityId[proposalId] || 0) + 1
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
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
    eventId: uuidv4(),
    type: "proposal" as const,
    payload: { id: proposalId, proposalId, title, votes },
    originInstanceId: state.config.instanceId,
    version,
    timestamp: Date.now(),
merkleRoot},
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45

  upsertEvent(state, event),
  writeState(state),

  const body = { ...event, propagate: false },
  const headers: Record<string, string> = {},
<<<<<<< HEAD
  const sig = signPayload(body)
  if (sig) headers["x-zion-signature"] = sig,
  const _body = {_...event, _propagate: false};
  const headers: Record<string, string> = {};
  const _sig = signPayload(body);
  if (sig) headers["x-zion-signature"] = sig;

  await Promise.all(_state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {
=======
  const sig = signPayload(body),
  if (sig) headers["x-zion-signature"] = sig,

  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {
        const url = new URL("/api/sync/publish", peer.baseUrl).toString(),
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        try {
          await axios.post(url, body, { headers, timeout: 5000 })
        } catch {
          // ignore
        }
<<<<<<< HEAD
      .map(_async (peer) => {_const _url = new window.URL("/api/sync/publish", _peer.baseUrl).toString();
        try {
          await axios.post(url, _body, _{ headers, _timeout: 5000});
        } catch {_// ignore}

      })
  ),

  return res.status(200).json({ status: "created", merkleRoot, version, eventId: event.eventId })
  return res.status(200).json({_status: "created", _merkleRoot, _version, _eventId: event.eventId});

}

=======
      })
  ),

  return res.status(200).json({ status: "created", merkleRoot, version, eventId: event.eventId });
};
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
  res.status(200).json({ message: 'Global vote processed' });
import type { NextApiRequest, NextApiResponse } from "next",
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage",
import { computeMerkleRootFromVotes } from "../../../utils/sync/merkle",
import { signPayload } from "../../../utils/sync/signature",
import axios from "axios",
import { v4 as uuidv4 } from "uuid",
export default async function handler(req, res) {
  try {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const state = readState(),
  if (!state.config.optIn || state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" })
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const { proposalId, title, votes } = req.body as { proposalId: string, title: string, votes: { voterId: string, weight: number, choice: string }[] },
  if (!proposalId || !title || !Array.isArray(votes)) {
    return res.status(400).json({ error: "proposalId, title, votes[] required" })
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const merkleRoot = computeMerkleRootFromVotes(votes),
  const version = (state.latestVersionByEntityId[proposalId] || 0) + 1,
  const event = {
    eventId: uuidv4(),
    type: "proposal" as const,
    payload: { id: proposalId, proposalId, title, votes },
    originInstanceId: state.config.instanceId,
    version,
    timestamp: Date.now(),
    merkleRoot},
  upsertEvent(state, event),
  writeState(state),
  const body = { ...event, propagate: false },
  const headers: Record<string, string> = {},
  const sig = signPayload(body),
  if (sig) headers["x-zion-signature"] = sig,
  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {
        const url = new URL("/api/sync/publish", peer.baseUrl).toString()
        const url = new URL("/api/sync/publish", peer.baseUrl).toString(),
        try {
          await axios.post(url, body, { headers, timeout: 5000 })
        } catch {
          // ignore
        }
      })
  )

  return res.status(200).json({ status: "created", merkleRoot, version, eventId: event.eventId })
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}

}
<<<<<<< HEAD

=======
=======
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      })
  ),
  return res.status(200).json({ status: "created", merkleRoot, version, eventId: event.eventId })
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage";
import { computeMerkleRootFromVotes } from "../../../utils/sync/merkle";
import { signPayload } from "../../../utils/sync/signature";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
export default async function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  const { proposalId, title, votes } = req.body as { proposalId: string, title: string, votes: { voterId: string, weight: number, choice: string }[] },;
  if (!proposalId || !title || !Array.isArray(votes)) {;
    return res.status(400).json({ error: "proposalId, title, votes[] required" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  const merkleRoot = computeMerkleRootFromVotes(votes);
  const version = (state.latestVersionByEntityId[proposalId] || 0) + 1;
  const event = {;
    eventId: uuidv4();
    type: "proposal" as const;
    payload: { id: proposalId, proposalId, title, votes },;
    originInstanceId: state.config.instanceId,;
    version,;
    timestamp: Date.now(),;
    merkleRoot},;
  upsertEvent(state, event);
  writeState(state);
  const body = { ...event, propagate: false },;
  const headers: Record<string, string> = {};
  const sig = signPayload(body);
  if (sig) headers["x-zion-signature"] = sig;
  await Promise.all(;
    state.config.peers;
      .filter((p) => !p.paused);
      .map(async (peer) => {;
        const url = new URL("/api/sync/publish", peer.baseUrl).toString();
        try {
          await axios.post(url, body, { headers, timeout: 5000 });
        } catch {;
          // ignore;
          } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      });
  );
  return res.status(200).json({ status: "created", merkleRoot, version, eventId: event.eventId });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
