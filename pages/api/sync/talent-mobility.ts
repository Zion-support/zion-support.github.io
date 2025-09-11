

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage";
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage";

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { signPayload } from "../../../utils/sync/signature";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { nextVersionFor } from "../../../utils/sync/versioning";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const state = readState()
  if (!state.config.optIn |state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" })
    }
  const { personId, fromNation, toNation, role, startDate, endDate } = req.body as {
    personId: string, fromNation: string, toNation: string, role: string, startDate: string, endDate?: string
<<<<<<< HEAD
<<<<<<< HEAD
  };
  if (!personId || !fromNation || !toNation || !role || !startDate) {
    return res.status(400).json({ error: "personId, fromNation, toNation, role, startDate required" })
=======

  };
  if (!personId || !fromNation || !toNation || !role || !startDate) {
    return res.status(400).json({ error: "personId, fromNation, toNation, role, startDate required" })

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  };

  if (!personId || !fromNation || !toNation || !role || !startDate) {
    return res.status(400).json({ error: "personId, fromNation, toNation, role, startDate required" })

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  if (!personId |!fromNation |!toNation |!role |!startDate) {
    return res.status(400).json({ error: "personId, fromNation, toNation, role, startDate required" })
  }
  const entityKey = `${personId}:${startDate}`
  const version = nextVersionFor(state, entityKey)
  const event = {


<<<<<<< HEAD
<<<<<<< HEAD
  upsertEvent(state, event);
  writeState(state);

    eventId: uuidv4(), type: "talent_mobility" as const,
    payload: {
       id: entityKey, personId, fromNation, toNation, role, startDate, endDate 
    },
    originInstanceId: state.config.instanceId, version,
    timestamp: Date.now()};
  upsertEvent(state, event);
  writeState(state);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  upsertEvent(state, event);
  writeState(state);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const body = { ...event, propagate: false };
  const headers: Record<string, string> = {};
  const sig = signPayload(body);
  if (sig) headers["x-zion-signature"] = sig;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
  res.status(200).json({ message: 'Talent mobility processed' });
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
  const { personId, fromNation, toNation, role, startDate, endDate } = req.body as {
    personId: string, fromNation: string, toNation: string, role: string, startDate: string, endDate?: string
  },
  if (!personId || !fromNation || !toNation || !role || !startDate) {
    return res.status(400).json({ error: "personId, fromNation, toNation, role, startDate required" })
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
  const entityKey = `${personId}:${startDate}`,
  const version = nextVersionFor(state, entityKey),
  const event = {
    eventId: uuidv4(),
    type: "talent_mobility" as const,
    payload: { id: entityKey, personId, fromNation, toNation, role, startDate, endDate },
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
  const { person_id, from_nation, to_nation, role, start_date, end_date } = req.body as {
    person_id: string, from_nation: string, to_nation: string, role: string, start_date: string, end_date?: string;
  },
  // Check condition
if ( {) {
  $2
}
    return res.status (400).json ({ error: "person_id, from_nation, to_nation, role, start_date required" });
  }
  const entity_key = `${person_id}:${start_date}`,
  const version = nextVersionFor (state, entity_key),
  const event = {
    event_id: uuidv4 (),
    type: "talent_mobility" as const,
    payload: { id: entity_key, person_id, from_nation, to_nation, role, start_date, end_date },
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
<<<<<<< HEAD
        try {
          await axios.post (url, body, { headers, timeout: 5000 });
        } catch {}
}
=======

        try {
          await axios.post (url, body, { headers, timeout: 5000 });
        } catch {}

}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      })),
  return res.status (200).json ({ status: "created", version, event_id: event.event_id });
}
;
<<<<<<< HEAD

    }

  const { personId, fromNation, toNation, role, startDate, endDate } = req.body as {
    personId: string, fromNation: string, toNation: string, role: string, startDate: string, endDate?: string
  },

  if (!personId || !fromNation || !toNation || !role || !startDate) {
    return res.status(400).json({ error: "personId, fromNation, toNation, role, startDate required" })

  }

  const entityKey = `${personId}:${startDate}`
  const version = nextVersionFor(state, entityKey),

  const event = {
    eventId: uuidv4(),
    type: &quot;talent_mobility&quot; as const,
    payload: { id: entityKey, personId, fromNation, toNation, role, startDate, endDate },
import type {_NextApiRequest, _NextApiResponse} from "next";
import axios from "axios";

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed"});

  const _state = readState();
  if (!state.config.optIn || state.config.paused) {_return res.status(403).json({ error: "Sync disabled for this instance"});
    }

  const {_personId, _fromNation, _toNation, _role, _startDate, _endDate} = req.body as {_personId: string; fromNation: string; toNation: string; role: string; startDate: string; endDate?: string;};

  if (!personId || !fromNation || !toNation || !role || !startDate) {_return res.status(400).json({ error: "personId, _fromNation, _toNation, _role, _startDate required"});
  }

  const _entityKey = `${_personId}:${_startDate}`;
  const _version = nextVersionFor(state, entityKey);

  const _event = {_eventId: uuidv4(), _type: "talent_mobility" as const, _payload: { id: entityKey, _personId, _fromNation, _toNation, _role, _startDate, _endDate},

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
  const { personId, fromNation, toNation, role, startDate, endDate } = req.body as {
    personId: string, fromNation: string, toNation: string, role: string, startDate: string, endDate?: string
  }
  if (!personId |!fromNation |!toNation |!role |!startDate) {
    return res.status(400).json({ error: "personId, fromNation, toNation, role, startDate required" })
  }
  const entityKey = `${personId}:${startDate}`
  const version = nextVersionFor(state, entityKey)
  const event = {
    eventId: uuidv4()
    type: "talent_mobility" as const
    payload: { id: entityKey, personId, fromNation, toNation, role, startDate, endDate }
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
    type: "talent_mobility" as const,
    payload: { id: entityKey, personId, fromNation, toNation, role, startDate, endDate },
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
  res.status(200).json({ message: 'Talent mobility processed' });
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
  const { personId, fromNation, toNation, role, startDate, endDate } = req.body as {
    personId: string, fromNation: string, toNation: string, role: string, startDate: string, endDate?: string
  },
  if (!personId || !fromNation || !toNation || !role || !startDate) {
    return res.status(400).json({ error: "personId, fromNation, toNation, role, startDate required" })
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
  const entityKey = `${personId}:${startDate}`,
  const version = nextVersionFor(state, entityKey),
  const event = {
    eventId: uuidv4(),
    type: "talent_mobility" as const,
    payload: { id: entityKey, personId, fromNation, toNation, role, startDate, endDate },
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

  return res.status(200).json({ status: "created", version, eventId: event.eventId })
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        const url = new URL("/api/sync/publish", peer.baseUrl).toString(),
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
  const { personId, fromNation, toNation, role, startDate, endDate } = req.body as {;
    personId: string, fromNation: string, toNation: string, role: string, startDate: string, endDate?: string;
  },;
  if (!personId || !fromNation || !toNation || !role || !startDate) {;
    return res.status(400).json({ error: "personId, fromNation, toNation, role, startDate required" });
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
  const entityKey = `${personId}:${startDate}`;
  const version = nextVersionFor(state, entityKey);
  const event = {;
    eventId: uuidv4();
    type: "talent_mobility" as const;
    payload: { id: entityKey, personId, fromNation, toNation, role, startDate, endDate },;
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
<<<<<<< HEAD
<<<<<<< HEAD
}
}
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
