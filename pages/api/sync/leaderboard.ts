

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { signPayload } from "../../../utils/sync/signature";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { nextVersionFor } from "../../../utils/sync/versioning";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    eventId: uuidv4(), type: "leaderboard_entry" as const,
    payload: {
       id: entityKey, subjectId, score, category, period, rank 
    },
    originInstanceId: state.config.instanceId, version,
    timestamp: Date.now()};
    eventId: uuidv4(),
    type: "leaderboard_entry" as const,
    payload: { id: entityKey, subjectId, score, category, period, rank },
    originInstanceId: state.config.instanceId,
    version,
    timestamp: Date.now()},


  upsertEvent(state, event);
  writeState(state);

  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {
        const url = new URL("/api/sync/publish", peer.baseUrl).toString(),
        try {
          await axios.post(url, body, { headers, timeout: 5000 })
        } catch {}
      })
  ),

  return res.status(200).json({ status: "created", version, eventId: event.eventId });
};

  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {

        const url = new URL("/api/sync/publish", peer.baseUrl).toString()
import type { NextApiRequest, NextApiResponse } from './next';,
import { read_state, write_state, upsert_event  } from '../../../utils / sync / storage';,
import { sign_payload  } from '../../../utils / sync / signature';,
import axios from './axios';,
import { v4 as uuidv4  } from './uuid';,
import { nextVersionFor  } from '../../../utils / sync / versioning';,
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
  const { subject_id, score, category, period, rank } = req.body as {
    subject_id: string, score: number, category: string, period?: string, rank?: number;
  },
  // Check condition
if ( {) {
  $2
}
    return res.status (400).json ({ error: "subject_id, score, category required" });
  }
  const entity_key = `${subject_id}:${period || "global"}:${category}`,
  const version = nextVersionFor (state, entity_key),
  const event = {
    event_id: uuidv4 (),
    type: "leaderboard_entry" as const,
    payload: { id: entity_key, subject_id, score, category, period, rank },
    originInstanceId: state.config.instance_id,
    version,
    timestamp: Date.now ()},
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
        try {
          await axios.post (url, body, { headers, timeout: 5000 });
        } catch {}

}

=======      })),
  return res.status (200).json ({ status: "created", version, event_id: event.event_id });
}
;
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

  await Promise.all(_state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {

        } catch {}
      })
  ),

  return res.status(200).json({ status: "created", version, eventId: event.eventId })
  return res.status(200).json({_status: "created", _version, _eventId: event.eventId});
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage",;
import { signPayload } from "../../../utils/sync/signature",;
import axios from "axios",;
import { v4 as uuidv4 } from "uuid",;
import { nextVersionFor } from "../../../utils/sync/versioning",;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),

}

import { signPayload } from "../../../utils/sync/signature";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { nextVersionFor } from "../../../utils/sync/versioning";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const state = readState()
  if (!state.config.optIn |state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" })
  }
  const { subjectId, score, category, period, rank } = req.body as {
    subjectId: string, score: number, category: string, period?: string, rank?: number
  }
  if (!subjectId |typeof score !== "number" |!category) {
    return res.status(400).json({ error: "subjectId, score, category required" })
  }
  const entityKey = `${subjectId}:${period |"global"}:${category}`
  const version = nextVersionFor(state, entityKey)
  const event = {
    eventId: uuidv4()
    type: "leaderboard_entry" as const
    payload: { id: entityKey, subjectId, score, category, period, rank }
    originInstanceId: state.config.instanceId
    version
    timestamp: Date.now()}
  upsertEvent(state, event)
  writeState(state)
  const body = { ...event, propagate: false }
  const headers: Record<string, string> = {}
  const sig = signPayload(body)
  if (sig) headers["x-zion-signature"] = sig
    eventId: uuidv4(),
    type: "leaderboard_entry" as const,
    payload: { id: entityKey, subjectId, score, category, period, rank },
    originInstanceId: state.config.instanceId,
    version,
    timestamp: Date.now()},

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
        } catch {}
      })
  ),

  return res.status(200).json({ status: "created", version, eventId: event.eventId });
};
=======
=======import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
  res.status(200).json({ message: 'Leaderboard updated' });
import type { NextApiRequest, NextApiResponse } from "next",
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage",
import { signPayload } from "../../../utils/sync/signature",
import axios from "axios",
import { v4 as uuidv4 } from "uuid",
import { nextVersionFor } from "../../../utils/sync/versioning",
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
  const { subjectId, score, category, period, rank } = req.body as {
    subjectId: string, score: number, category: string, period?: string, rank?: number
  },
  if (!subjectId || typeof score !== "number" || !category) {
    return res.status(400).json({ error: "subjectId, score, category required" })
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
  const entityKey = `${subjectId}:${period || "global"}:${category}`,
  const version = nextVersionFor(state, entityKey),
  const event = {
    eventId: uuidv4(),
    type: "leaderboard_entry" as const,
    payload: { id: entityKey, subjectId, score, category, period, rank },
    originInstanceId: state.config.instanceId,
    version,
    timestamp: Date.now()},
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
        try {
          await axios.post(url, body, { headers, timeout: 5000 })
        } catch {}
      })
  )

  return res.status(200).json({ status: "created", version, eventId: event.eventId })=======        const url = new URL("/api/sync/publish", peer.baseUrl).toString(),
        try {
          await axios.post(url, body, { headers, timeout: 5000 })
        } catch {  } catch (error) {
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
  return res.status(200).json({ status: "created", version, eventId: event.eventId })
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage";
import { signPayload } from "../../../utils/sync/signature";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { nextVersionFor } from "../../../utils/sync/versioning";
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
  const { subjectId, score, category, period, rank } = req.body as {;
    subjectId: string, score: number, category: string, period?: string, rank?: number;
  },;
  if (!subjectId || typeof score !== "number" || !category) {;
    return res.status(400).json({ error: "subjectId, score, category required" });
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
  const entityKey = `${subjectId}:${period || "global"}:${category}`;
  const version = nextVersionFor(state, entityKey);
  const event = {;
    eventId: uuidv4();
    type: "leaderboard_entry" as const;
    payload: { id: entityKey, subjectId, score, category, period, rank },;
    originInstanceId: state.config.instanceId,;
    version,;
    timestamp: Date.now()},;
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
        } catch {  } catch (error) {
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
  return res.status(200).json({ status: "created", version, eventId: event.eventId });
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
