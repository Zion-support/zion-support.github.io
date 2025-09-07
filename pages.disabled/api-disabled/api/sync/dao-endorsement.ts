<<<<<<< HEAD:pages_backup/api/sync/dao-endorsement.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/sync/dao-endorsement.ts
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/dao-endorsement.ts
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage",;
import { signPayload } from "../../../utils/sync/signature",;
import axios from "axios",;
import { v4 as uuidv4 } from "uuid",;
import { nextVersionFor } from "../../../utils/sync/versioning",;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD:pages_backup/api/sync/dao-endorsement.ts
<<<<<<< HEAD
<<<<<<< HEAD
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
<<<<<<< HEAD
=======
=======
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/dao-endorsement.ts


import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage";

<<<<<<< HEAD:pages_backup/api/sync/dao-endorsement.ts
=======
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
import type { NextApiRequest, NextApiResponse } from "next",
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import type { NextApiRequest, NextApiResponse } from "next",
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage",
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/sync/dao-endorsement.ts
=======
import type { NextApiRequest, NextApiResponse } from "next",
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage",
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage";
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/dao-endorsement.ts
import { signPayload } from "../../../utils/sync/signature";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { nextVersionFor } from "../../../utils/sync/versioning";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD:pages_backup/api/sync/dao-endorsement.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/sync/dao-endorsement.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


origin/cursor/expand-services-advertise-and-build-project-c28b
main
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/sync/dao-endorsement.ts
=======


origin/cursor/expand-services-advertise-and-build-project-c28b
main
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/dao-endorsement.ts
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const state = readState()
  if (!state.config.optIn |state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" })
  }
  const { fromDAO, toDAO, resolutionId, decision, timestamp } = req.body as {
    fromDAO: string, toDAO: string, resolutionId: string, decision: "endorse" | "reject", timestamp?: number
<<<<<<< HEAD:pages_backup/api/sync/dao-endorsement.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/sync/dao-endorsement.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======

  };
  if (!fromDAO || !toDAO || !resolutionId || !decision) {
    return res.status(400).json({ error: "fromDAO, toDAO, resolutionId, decision required" })

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const state = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const state = null;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/sync/dao-endorsement.ts
=======
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const state = null;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const state = null;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/dao-endorsement.ts
  }
  if (!fromDAO |!toDAO |!resolutionId |!decision) {
    return res.status(400).json({ error: "fromDAO, toDAO, resolutionId, decision required" })
  }
  const version = nextVersionFor(state, resolutionId)
  const event = {
<<<<<<< HEAD:pages_backup/api/sync/dao-endorsement.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/sync/dao-endorsement.ts
<<<<<<< HEAD
<<<<<<< HEAD
    eventId: uuidv4(),
    type: "dao_endorsement" as const,
    payload: { id: resolutionId, fromDAO, toDAO, resolutionId, decision, timestamp: timestamp || Date.now() },
    originInstanceId: state.config.instanceId,
    version,
    timestamp: Date.now()},
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    eventId: uuidv4();
    type: "dao_endorsement" as const;
    payload: { id: resolutionId, fromDAO, toDAO, resolutionId, decision, timestamp: timestamp || Date.now() };
    originInstanceId: state.config.instanceId;
    version;
    timestamp: Date.now()};
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/dao-endorsement.ts
    eventId: uuidv4()
    type: "dao_endorsement" as const
    payload: { id: resolutionId, fromDAO, toDAO, resolutionId, decision, timestamp: timestamp || Date.now() }
    originInstanceId: state.config.instanceId
    version
    timestamp: Date.now()}


<<<<<<< HEAD:pages_backup/api/sync/dao-endorsement.ts

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/sync/dao-endorsement.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
eventId: uuidv4(),
    type: 'dao_endorsement' as const,
=======
eventId: uuidv4();
    type: 'dao_endorsement' as const;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/dao-endorsement.ts
    payload: {
      id: resolutionId;
      fromDAO;
      toDAO;
      resolutionId;
      decision;
      timestamp: timestamp || Date.now();
    };
    originInstanceId: state.config.instanceId;
    version;
    timestamp: Date.now();
  };
<<<<<<< HEAD:pages_backup/api/sync/dao-endorsement.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/sync/dao-endorsement.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/sync/dao-endorsement.ts
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/dao-endorsement.ts

  upsertEvent(state, event);
  writeState(state);

  const body = { ...event, propagate: false };
  const headers: Record<string, string> = {};
  const sig = signPayload(body);
<<<<<<< HEAD:pages_backup/api/sync/dao-endorsement.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/sync/dao-endorsement.ts
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/dao-endorsement.ts
  if (sig) headers["x-zion-signature"] = sig;
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {
<<<<<<< HEAD:pages_backup/api/sync/dao-endorsement.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD
        const url = new URL("/api/sync/publish", peer.baseUrl).toString(),
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/sync/dao-endorsement.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
        const url = new URL("/api/sync/publish", peer.baseUrl).toString()
        const url = new URL("/api/sync/publish", peer.baseUrl).toString();
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/dao-endorsement.ts
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
<<<<<<< HEAD:pages_backup/api/sync/dao-endorsement.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/sync/dao-endorsement.ts
<<<<<<< HEAD
  ),
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  );
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/dao-endorsement.ts

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
=======
  return res.status(200).json({ status: "created", version, eventId: event.eventId });
};

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
  res.status(200).json({ message: 'DAO endorsement processed' });
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
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {

<<<<<<< HEAD:pages_backup/api/sync/dao-endorsement.ts
<<<<<<< HEAD
=======
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

=======
      })),
  return res.status (200).json ({ status: "created", version, event_id: event.event_id });
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        const url = new URL("/api/sync/publish", peer.baseUrl).toString(),
=======
        const url = new URL("/api/sync/publish", peer.baseUrl).toString()
main

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/sync/dao-endorsement.ts
=======
        const url = new URL("/api/sync/publish", peer.baseUrl).toString()
main

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
        const url = new URL("/api/sync/publish", peer.baseUrl).toString();
        const url = new URL("/api/sync/publish", peer.baseUrl).toString()
main
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/dao-endorsement.ts
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
<<<<<<< HEAD:pages_backup/api/sync/dao-endorsement.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/sync/dao-endorsement.ts
  ),
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/sync/dao-endorsement.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  );
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/dao-endorsement.ts
  );

return res
    .status(200)
    .json({ status: 'created', version, eventId: event.eventId });

<<<<<<< HEAD:pages_backup/api/sync/dao-endorsement.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/sync/dao-endorsement.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/sync/dao-endorsement.ts
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/dao-endorsement.ts
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
<<<<<<< HEAD:pages_backup/api/sync/dao-endorsement.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/sync/dao-endorsement.ts
<<<<<<< HEAD
}
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
=======
        try {
          await axios.post(url, body, { headers, timeout: 5000 })
        } catch {}
      })
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  )
main
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/sync/dao-endorsement.ts
=======
  )
main
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12243
  )
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/dao-endorsement.ts

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  return res.status(200).json({ status: "created", version, eventId: event.eventId })
};
<<<<<<< HEAD:pages_backup/api/sync/dao-endorsement.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/sync/dao-endorsement.ts
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/sync/dao-endorsement.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/dao-endorsement.ts
