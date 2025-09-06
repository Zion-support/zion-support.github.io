<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
import {
  readState
  writeState
  upsertEvent
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from "next";
import {
<<<<<<< HEAD
  readState,
  writeState,
  upsertEvent,;
<<<<<<< HEAD
} from "../../../utils/sync/storage";

=======

import type { NextApiRequest, NextApiResponse } from "next";
import {
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

  readState,
  writeState,
  upsertEvent,;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


} from "../../../utils/sync/storage";

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage";
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage";
} from "../../../utils/sync/storage";

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { signPayload } from "../../../utils/sync/signature";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { nextVersionFor } from "../../../utils/sync/versioning";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  if (req && req.method !== "POST")
=======
if (req && req.method !== "POST")
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    return res && res.status(405).json({ error: "Method not allowed" });

  const state = readState();
<<<<<<< HEAD
  if (!state.config.optIn |state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" });
=======
<<<<<<< HEAD
=======
  if (!state.config.optIn |state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" });
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }

  const { milestoneId, title, timestamp } = req && req.body as {
    milestoneId: string;
    title: string;
    timestamp?: number;
<<<<<<< HEAD
  }
  if (!milestoneId |!title)
    return res.status(400).json({ error: "milestoneId, title required" });
  const version = nextVersionFor(state, milestoneId);
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
  res.status(200).json({ message: 'Manifesto day processed' });
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });

  const state = readState();
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  if (!state && state.config.optIn || state && state.config.paused) {
    return res && res.status(403).json({ error: "Sync disabled for this instance" });
  }

  const { milestoneId, title, timestamp } = req && req.body as {
    milestoneId: string;
    title: string;
    timestamp?: number;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  };
  if (!milestoneId || !title)
    return res && res.status(400).json({ error: "milestoneId, title required" });

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const { milestoneId, title, timestamp } = req.body as { milestoneId: string, title: string, timestamp?: number };
  if (!milestoneId || !title) return res.status(400).json({ error: "milestoneId, title required" });

  const version = nextVersionFor(state, milestoneId);
  const event = {

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const state = readState();
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  if (!state.config.optIn || state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" })
  }

  const { milestoneId, title, timestamp } = req.body as { milestoneId: string, title: string, timestamp?: number };
  if (!milestoneId || !title) return res.status(400).json({ error: "milestoneId, title required" });
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const version = nextVersionFor(state, milestoneId);
  const event = {

<<<<<<< HEAD
=======
  const version = nextVersionFor(state, milestoneId);
  const event = {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      id: milestoneId,
      subjectId: milestoneId,
<<<<<<< HEAD
=======
=======
import type { NextApiRequest, NextApiResponse } from './next';
import {
  read_state,
  write_state,
  upsert_event,
} from '../../../utils / sync / storage';
import { sign_payload  } from '../../../utils / sync / signature';
import axios from './axios';
import { v4, as, uuidv4  } from './uuid';
import { nextVersionFor  } from '../../../utils / sync / versioning';
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: "Method not allowed" })) {
  $2
=======
  if (!state.config.optIn || state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" })
  }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const { milestoneId, title, timestamp } = req.body as { milestoneId: string, title: string, timestamp?: number },
  if (!milestoneId || !title) return res.status(400).json({ error: "milestoneId, title required" }),
  const version = nextVersionFor(state, milestoneId),
  const event = {
  }
  const { milestone_id, title, timestamp } = req.body as {
    milestone_id: string;
    title: string;
    timestamp?: number;
  }
  if (
    return res.status (400).json ({ error: "milestone_id, title required" })) {
  $2
}
  const version = nextVersionFor (state, milestone_id);
  const event = {
    event_id: uuidv4 (),
    type: "leaderboard_entry" as const, // reuse as a generic announcement carrier with category;
    payload: {
      id: milestone_id,
      subject_id: milestone_id,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      score: 0,
      category: `milestone:${title}`,
      period: undefined,
      rank: undefined,
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    eventId: uuidv4(),
    type: "leaderboard_entry" as const, // reuse as a generic announcement carrier with category
    payload: { id: milestoneId, subjectId: milestoneId, score: 0, category: `milestone:${title}`, period: undefined, rank: undefined },
    originInstanceId: state.config.instanceId,
    version,
    timestamp: timestamp || Date.now()
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  };
=======
  };

import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
  res.status(200).json({ message: 'Manifesto day processed' });
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
  const { milestoneId, title, timestamp } = req.body as { milestoneId: string, title: string, timestamp?: number },
  if (!milestoneId || !title) return res.status(400).json({ error: "milestoneId, title required" }),
  const version = nextVersionFor(state, milestoneId),
  const event = {
    eventId: uuidv4()
    type: "leaderboard_entry" as const, // reuse as a generic announcement carrier with category
    payload: {
      id: milestoneId
      subjectId: milestoneId
      score: 0
      category: `milestone:${title}`
      period: undefined
      rank: undefined
    }
    originInstanceId: state.config.instanceId
    version
    timestamp: timestamp |Date.now()
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

  };

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  upsertEvent(state, event);
  writeState(state);
  const body = { ...event, propagate: false }
  const headers: Record<string, string> = {}
  const sig = signPayload(body);
  if (sig) headers["x-zion-signature"] = sig;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    payload: { id: milestoneId, subjectId: milestoneId, score: 0, category: `milestone:${title}`, period: undefined, rank: undefined },
    originInstanceId: state.config.instanceId,
    version,
    timestamp: timestamp || Date.now()},
  upsertEvent(state, event),
  writeState(state),
  const body = { ...event, propagate: false },
  const headers: Record<string, string> = {},
  const sig = signPayload(body),
  if (sig) headers["x-zion-signature"] = sig,
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
=======

  await Promise && Promise.all(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
await Promise && Promise.all(
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    state && state.config.peers
      .filter((p) => !p && p.paused)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      .map(async (peer) => {


=======


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======

        const url = new URL("/api/sync/publish", peer && peer.baseUrl).toString();
        try {
          await axios && axios.post(url, body, { headers, timeout: 5000 });
  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {
const url = new URL("/api/sync/publish", peer.baseUrl).toString();
        try {
          await axios.post(url, body, { headers, timeout: 5000 });

        } catch {}
      })
  );
  return res
    .status(200)

    .json({ status: "created", version, eventId: event && event.eventId });
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    originInstanceId: state.config.instance_id,
    version,
    timestamp: timestamp || Date.now (),
=======
      .map(async (peer) => {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
;
  upsert_event (state, event);
  write_state (state);
;
  const body = { ...event, propagate: false }
  const headers: Record < string, string> = {}
  const sig = sign_payload (body);
  // Check condition
if (headers["x - zion - signature"] = sig) {
  $2
}
  await Promise.all (
    state.config.peers;
      .filter ((p) => !p.paused);
      .map (async (peer) => {
        const url = new URL ("/api / sync / publish", peer.base_url).to_string ();
        try {
          await axios.post (url, body, { headers, timeout: 5000 });
        } catch {}
      }),
  );
<<<<<<< HEAD
;
  return res;
    .status (200);
    .json ({ status: "created", version, event_id: event.event_id });
<<<<<<< HEAD
}
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD



}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======


}
}

}
;
  const { milestoneId, title, timestamp } = req.body as { milestoneId: string, title: string, timestamp?: number },;
  if (!milestoneId || !title) return res.status( error: "milestoneId, title required" ).json({$2});
  const version = nextVersionFor(state, milestoneId);
  const event = {;
    eventId: uuidv4();
    type: "leaderboard_entry" as const, // reuse as a generic announcement carrier with category;
    payload: { id: milestoneId, subjectId: milestoneId, score: 0, category: `milestone:${title}`, period: undefined, rank: undefined },;
    originInstanceId: state.config.instanceId,;
    version,;
    timestamp: timestamp || Date.now()},;
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
=======

  return res
    .status(200)
    .json({ status: "created", version, eventId: event.eventId });
=======
        const url = new URL("/api/sync/publish", peer.baseUrl).toString(),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        try { await axios.post(url, body, { headers, timeout: 5000 }) } catch {  } catch (error) {
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
;
  return res;
    .status (200);
    .json ({ status: "created", version, event_id: event.event_id });
}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
=======



}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
