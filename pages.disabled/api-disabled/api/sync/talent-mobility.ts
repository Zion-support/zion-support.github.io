<<<<<<< HEAD:pages_backup/api/sync/talent-mobility.ts
import type { NextApiRequest, NextApiResponse } from "next",
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage",
=======
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage",;
import { signPayload } from "../../../utils/sync/signature",;
import axios from "axios",;
import { v4 as uuidv4 } from "uuid",;
import { nextVersionFor } from "../../../utils/sync/versioning",;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });


import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage";

import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/talent-mobility.ts
origin/cursor/automate-test-improve-and-merge-code-2533
import { signPayload } from "../../../utils/sync/signature";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { nextVersionFor } from "../../../utils/sync/versioning";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

<<<<<<< HEAD:pages_backup/api/sync/talent-mobility.ts
<<<<<<< HEAD
=======

origin/cursor/expand-services-advertise-and-build-project-c28b
main
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/talent-mobility.ts
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const state = readState()
  if (!state.config.optIn |state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" })
    }
  const { personId, fromNation, toNation, role, startDate, endDate } = req.body as {
    personId: string, fromNation: string, toNation: string, role: string, startDate: string, endDate?: string
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const state = null;
origin/cursor/automate-test-improve-and-merge-code-2533
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
<<<<<<< HEAD:pages_backup/api/sync/talent-mobility.ts



eventId: uuidv4(),
    type: 'talent_mobility' as const,
=======
  upsertEvent(state, event)
  writeState(state)
  const body = { ...event, propagate: false }
  const headers: Record<string, string> = {}
  const sig = signPayload(body)
  if (sig) headers["x-zion-signature"] = sig
    eventId: uuidv4();
    type: "talent_mobility" as const;
    payload: { id: entityKey, personId, fromNation, toNation, role, startDate, endDate };
    originInstanceId: state.config.instanceId;
    version;
    timestamp: Date.now()};
    eventId: uuidv4()
    type: "talent_mobility" as const
    payload: { id: entityKey, personId, fromNation, toNation, role, startDate, endDate }
    originInstanceId: state.config.instanceId
    version
    timestamp: Date.now()}


eventId: uuidv4();
    type: 'talent_mobility' as const;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/talent-mobility.ts
    payload: {
      id: entityKey;
      personId;
      fromNation;
      toNation;
      role;
      startDate;
      endDate;
    };
    originInstanceId: state.config.instanceId;
    version;
    timestamp: Date.now();
  };
origin/cursor/automate-test-improve-and-merge-code-2533

  upsertEvent(state, event);
  writeState(state);

  const body = { ...event, propagate: false };
  const headers: Record<string, string> = {};
  const sig = signPayload(body);
<<<<<<< HEAD:pages_backup/api/sync/talent-mobility.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/talent-mobility.ts
  if (sig) headers["x-zion-signature"] = sig;

  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {
<<<<<<< HEAD:pages_backup/api/sync/talent-mobility.ts
<<<<<<< HEAD
        const url = new URL("/api/sync/publish", peer.baseUrl).toString()
=======
<<<<<<< HEAD
        const url = new URL("/api/sync/publish", peer.baseUrl).toString(),
<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
        const url = new URL("/api/sync/publish", peer.baseUrl).toString()
        const url = new URL("/api/sync/publish", peer.baseUrl).toString();
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/talent-mobility.ts
if (sig) headers['x-zion-signature'] = sig;

  await Promise.all(
    state.config.peers
      .filter(p => !p.paused)
      .map(async peer => {
        const url = new URL('/api/sync/publish', peer.baseUrl).toString();
origin/cursor/automate-test-improve-and-merge-code-2533
        try {
          await axios.post(url, body, { headers, timeout: 5000 });
        } catch {}
      })
<<<<<<< HEAD:pages_backup/api/sync/talent-mobility.ts
        const url = new URL("/api/sync/publish", peer.baseUrl).toString()
<<<<<<< HEAD
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> pr-12243
=======
main

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  );

import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
  res.status(200).json({ message: 'Talent mobility processed' });
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage";
import { signPayload } from "../../../utils/sync/signature";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { nextVersionFor } from "../../../utils/sync/versioning";
export default async function handler(req, res) {
  try {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const state = readState();
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
  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {

        const url = new URL("/api/sync/publish", peer.baseUrl).toString();
        const url = new URL("/api/sync/publish", peer.baseUrl).toString()
main
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/talent-mobility.ts
        try {
          await axios.post(url, body, { headers, timeout: 5000 })
        } catch {}
      })
<<<<<<< HEAD:pages_backup/api/sync/talent-mobility.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
  ),
<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  );
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/talent-mobility.ts
  );

return res
    .status(200)
    .json({ status: 'created', version, eventId: event.eventId });

origin/cursor/automate-test-improve-and-merge-code-2533
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
<<<<<<< HEAD:pages_backup/api/sync/talent-mobility.ts
<<<<<<< HEAD
=======
=======
>>>>>>> pr-12243
  )
=======
  )
main
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  return res.status(200).json({ status: "created", version, eventId: event.eventId })
};

=======
pr-12243
  )

  return res.status(200).json({ status: "created", version, eventId: event.eventId })
};
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/talent-mobility.ts
