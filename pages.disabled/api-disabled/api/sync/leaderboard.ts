<<<<<<< HEAD:pages_backup/api/sync/leaderboard.ts
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/leaderboard.ts
origin/cursor/automate-test-improve-and-merge-code-2533
import { signPayload } from "../../../utils/sync/signature";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { nextVersionFor } from "../../../utils/sync/versioning";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

<<<<<<< HEAD:pages_backup/api/sync/leaderboard.ts
<<<<<<< HEAD
=======

origin/cursor/expand-services-advertise-and-build-project-c28b
main
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/leaderboard.ts
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
<<<<<<< HEAD:pages_backup/api/sync/leaderboard.ts
=======
    eventId: uuidv4();
    type: "leaderboard_entry" as const;
    payload: { id: entityKey, subjectId, score, category, period, rank };
    originInstanceId: state.config.instanceId;
    version;
    timestamp: Date.now()};
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/leaderboard.ts
    eventId: uuidv4()
    type: "leaderboard_entry" as const
    payload: { id: entityKey, subjectId, score, category, period, rank }
    originInstanceId: state.config.instanceId
    version
    timestamp: Date.now()}
<<<<<<< HEAD:pages_backup/api/sync/leaderboard.ts

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/leaderboard.ts


  upsertEvent(state, event);
  writeState(state);

  const body = { ...event, propagate: false };
  const headers: Record<string, string> = {};
  const sig = signPayload(body);
  if (sig) headers["x-zion-signature"] = sig;
  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {
<<<<<<< HEAD:pages_backup/api/sync/leaderboard.ts
<<<<<<< HEAD
<<<<<<< HEAD
        const url = new URL("/api/sync/publish", peer.baseUrl).toString()
=======
<<<<<<< HEAD
        const url = new URL("/api/sync/publish", peer.baseUrl).toString(),
<<<<<<< HEAD
=======
        const url = new URL("/api/sync/publish", peer.baseUrl).toString()
        const url = new URL("/api/sync/publish", peer.baseUrl).toString();
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/leaderboard.ts
        try {
          await axios.post(url, body, { headers, timeout: 5000 })
        } catch {}
      })
  );

import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
  res.status(200).json({ message: 'Leaderboard updated' });
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
<<<<<<< HEAD:pages_backup/api/sync/leaderboard.ts
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> pr-12243
=======
        const url = new URL("/api/sync/publish", peer.baseUrl).toString()
main

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
main
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/leaderboard.ts
        try {
          await axios.post(url, body, { headers, timeout: 5000 })
        } catch {}
      })
<<<<<<< HEAD:pages_backup/api/sync/leaderboard.ts
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/leaderboard.ts
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const state = null;
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
<<<<<<< HEAD:pages_backup/api/sync/leaderboard.ts
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/leaderboard.ts
