

=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


    timestamp: Date.now(),
    merkleRoot};

  upsertEvent(state, event);
  writeState(state);

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        const url = new URL("/api/sync/publish", peer.baseUrl).toString()
=======

        const url = new URL("/api/sync/publish", peer.baseUrl).toString()
=======import type { NextApiRequest, NextApiResponse } from './next';,
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
=======  return res.status(200).json({ status: "created", merkleRoot, version, eventId: event.eventId });
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

        const url = new URL("/api/sync/publish", peer.baseUrl).toString(),

        try {
          await axios.post (url, body, { headers, timeout: 5000 });
        } catch {

}

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
        const url = new URL("/api/sync/publish", peer.baseUrl).toString(),
        try {
          await axios.post(url, body, { headers, timeout: 5000 })
        } catch {
          // ignore
        }
      })
  ),

  return res.status(200).json({ status: "created", merkleRoot, version, eventId: event.eventId });
};
=======

=======
  return res.status(200).json({ status: "created", merkleRoot, version, eventId: event.eventId });
};

=======import type { NextApiRequest, NextApiResponse } from 'next';
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======          } catch (error) {
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
