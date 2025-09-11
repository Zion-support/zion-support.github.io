

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { signPayload } from "../../../utils/sync/signature";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { nextVersionFor } from "../../../utils/sync/versioning";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  };

  if (!fromDAO || !toDAO || !resolutionId || !decision) {
    return res.status(400).json({ error: "fromDAO, toDAO, resolutionId, decision required" })
  }
  if (!fromDAO |!toDAO |!resolutionId |!decision) {
    return res.status(400).json({ error: "fromDAO, toDAO, resolutionId, decision required" })
  }
  const version = nextVersionFor(state, resolutionId)
  const event = {


    eventId: uuidv4(), type: "dao_endorsement" as const,
    payload: {
       id: resolutionId, fromDAO, toDAO, resolutionId, decision, timestamp: timestamp || Date.now() 
    },
    originInstanceId: state.config.instanceId, version,
    timestamp: Date.now()};
  upsertEvent(state, event);
  writeState(state);
=======
=======
  upsertEvent(state, event);
  writeState(state);

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  const { fromDAO, toDAO, resolution_id, decision, timestamp } = req.body as {
    fromDAO: string, toDAO: string, resolution_id: string, decision: "endorse" | "reject", timestamp?: number;
  },
  // Check condition
if ( {) {
  $2
}
    return res.status (400).json ({ error: "fromDAO, toDAO, resolution_id, decision required" });
  }
  const version = nextVersionFor (state, resolution_id),
  const event = {
    event_id: uuidv4 (),
    type: "dao_endorsement" as const,
    payload: { id: resolution_id, fromDAO, toDAO, resolution_id, decision, timestamp: timestamp || Date.now () },
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
  const { fromDAO, toDAO, resolutionId, decision, timestamp } = req.body as {
    fromDAO: string, toDAO: string, resolutionId: string, decision: "endorse" | "reject", timestamp?: number
  },
  }

  const version = nextVersionFor(state, resolutionId),
  const event = {
    eventId: uuidv4(),
    type: &quot;dao_endorsement&quot; as const,
    payload: { id: resolutionId, fromDAO, toDAO, resolutionId, decision, timestamp: timestamp || Date.now() },
import type {_NextApiRequest, _NextApiResponse} from "next";
import axios from "axios";

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed"});

  const _state = readState();
  if (!state.config.optIn || state.config.paused) {_return res.status(403).json({ error: "Sync disabled for this instance"});
  }

  const {_fromDAO, _toDAO, _resolutionId, _decision, _timestamp} = req.body as {_fromDAO: string; toDAO: string; resolutionId: string; decision: "endorse" | "reject"; timestamp?: number;};

  if (!fromDAO || !toDAO || !resolutionId || !decision) {_return res.status(400).json({ error: "fromDAO, _toDAO, _resolutionId, _decision required"});
  }

  const _version = nextVersionFor(state, resolutionId);
  const _event = {_eventId: uuidv4(), _type: "dao_endorsement" as const, _payload: { id: resolutionId, _fromDAO, _toDAO, _resolutionId, _decision, _timestamp: timestamp || Date.now()},

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
  const { fromDAO, toDAO, resolutionId, decision, timestamp } = req.body as {
    fromDAO: string, toDAO: string, resolutionId: string, decision: "endorse" | "reject", timestamp?: number
  }
  if (!fromDAO |!toDAO |!resolutionId |!decision) {
    return res.status(400).json({ error: "fromDAO, toDAO, resolutionId, decision required" })
  }
  const version = nextVersionFor(state, resolutionId)
  const event = {
    eventId: uuidv4()
    type: "dao_endorsement" as const
    payload: { id: resolutionId, fromDAO, toDAO, resolutionId, decision, timestamp: timestamp |Date.now() }
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
    type: "dao_endorsement" as const,
    payload: { id: resolutionId, fromDAO, toDAO, resolutionId, decision, timestamp: timestamp || Date.now() },
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
  res.status(200).json({ message: 'DAO endorsement processed' });
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
  const { fromDAO, toDAO, resolutionId, decision, timestamp } = req.body as {
    fromDAO: string, toDAO: string, resolutionId: string, decision: "endorse" | "reject", timestamp?: number
  },
  if (!fromDAO || !toDAO || !resolutionId || !decision) {
    return res.status(400).json({ error: "fromDAO, toDAO, resolutionId, decision required" })
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
  const version = nextVersionFor(state, resolutionId),
  const event = {
    eventId: uuidv4(),
    type: "dao_endorsement" as const,
    payload: { id: resolutionId, fromDAO, toDAO, resolutionId, decision, timestamp: timestamp || Date.now() },
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
  const { fromDAO, toDAO, resolutionId, decision, timestamp } = req.body as {;
    fromDAO: string, toDAO: string, resolutionId: string, decision: "endorse" | "reject", timestamp?: number;
  },;
  if (!fromDAO || !toDAO || !resolutionId || !decision) {;
    return res.status(400).json({ error: "fromDAO, toDAO, resolutionId, decision required" });
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
  const version = nextVersionFor(state, resolutionId);
  const event = {;
    eventId: uuidv4();
    type: "dao_endorsement" as const;
    payload: { id: resolutionId, fromDAO, toDAO, resolutionId, decision, timestamp: timestamp || Date.now() },;
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
