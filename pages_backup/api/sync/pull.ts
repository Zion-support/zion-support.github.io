<<<<<<< HEAD:pages/api/sync/pull.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return res.status(200).json({



    instanceId: state.config.instanceId,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    lastSyncedAt: state.lastSyncedAt,
    events,
    scope: requestedScope
  });
}


=======
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import type { NextApiRequest, NextApiResponse } from './next';,
import { read_state, filterEventsByScope  } from '../../../utils / sync / storage';,
=======
import type { NextApiRequest, NextApiResponse } from './next';
import { read_state, filterEventsByScope  } from '../../../utils / sync / storage';
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/sync/pull.ts
;
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: "Method not allowed" }), ) {
  $2
}
  const state = read_state (),
  const since_param = (req.method === "GET" ? req.query.since : (req.body?.since as any)) as string | string[] | undefined,
  const since = Number (Array.is_array (since_param) ? since_param[0] : since_param) || 0,
  const scope_param = (req.method === "GET" ? req.query.scope : (req.body?.scope as any)) as string | string[] | undefined,
  const requested_scope = (Array.is_array (scope_param) ? scope_param[0] : scope_param) || state.config.scope,
  const scoped = filterEventsByScope (state.events, state.config.scope),
  const events = scoped.filter ((e) => (e.timestamp || 0) > since),
  return res.status (200).json ({
    instance_id: state.config.instance_id,
    lastSyncedAt: state.lastSyncedAt,
    events,
    scope: requested_scope});
}
<<<<<<< HEAD:pages/api/sync/pull.ts
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
    instanceId: state.config.instanceId,
    lastSyncedAt: state.lastSyncedAt,
    events,

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

    instanceId: state.config.instanceId
    lastSyncedAt: state.lastSyncedAt
    events

ursor/fix-website-loading-errors-and-merge-6662


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/sync/pull.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, filterEventsByScope } from "../../../utils/sync/storage";
export default function handler(req: NextApiRequest, res: NextApiResponse) {

import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, filterEventsByScope } from "../../../utils/sync/storage",;
;
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    instanceId: 'sync-instance',
    lastSyncedAt: Date.now(),
    events: [],
    scope: 'global'
  });
import type { NextApiRequest, NextApiResponse } from "next",
import { readState, filterEventsByScope } from "../../../utils/sync/storage",

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST" && req.method !== "GET") return res.status(405).json({ error: "Method not allowed" }),
  const state = readState(),
  const sinceParam = (req.method === "GET" ? req.query.since : (req.body?.since as any)) as string | string[] | undefined,
  const since = Number(Array.isArray(sinceParam) ? sinceParam[0] : sinceParam) || 0,
  const scopeParam = (req.method === "GET" ? req.query.scope : (req.body?.scope as any)) as string | string[] | undefined,
  const requestedScope = (Array.isArray(scopeParam) ? scopeParam[0] : scopeParam) || state.config.scope,

  const scoped = filterEventsByScope(state.events, state.config.scope),
  const events = scoped.filter((e) => (e.timestamp || 0) > since),
  return res.status(200).json({
    instanceId: state.config.instanceId
    lastSyncedAt: state.lastSyncedAt
    events
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return res.status(200).json({

<<<<<<< HEAD:pages/api/sync/pull.ts
<<<<<<< HEAD


    instanceId: state.config.instanceId,
    lastSyncedAt: state.lastSyncedAt,
    events,
<<<<<<< HEAD
    scope: requestedScope});
};
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/sync/pull.ts
    instanceId: state.config.instanceId
    lastSyncedAt: state.lastSyncedAt
    events

  if (req.method !== "POST" && req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
  const state = null;
<<<<<<< HEAD:pages/api/sync/pull.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/sync/pull.ts
    scope: requestedScope})
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, filterEventsByScope } from "../../../utils/sync/storage";
export default function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const scoped = filterEventsByScope(state.events, state.config.scope);
  const events = scoped.filter((e) => (e.timestamp || 0) > since);
  return res.status(200).json({;
    instanceId: state.config.instanceId;
    lastSyncedAt: state.lastSyncedAt;
    events;
    scope: requestedScope});
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
}
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
    scope: requestedScope
  });
}
<<<<<<< HEAD:pages/api/sync/pull.ts
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/sync/pull.ts


import type { NextApiRequest, NextApiResponse } from './next';,
import { read_state, filterEventsByScope  } from '../../../utils / sync / storage';,
;
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: "Method not allowed" }), ) {
  $2
}
  const state = read_state (),
  const since_param = (req.method === "GET" ? req.query.since : (req.body?.since as any)) as string | string[] | undefined,
  const since = Number (Array.is_array (since_param) ? since_param[0] : since_param) || 0,
  const scope_param = (req.method === "GET" ? req.query.scope : (req.body?.scope as any)) as string | string[] | undefined,
  const requested_scope = (Array.is_array (scope_param) ? scope_param[0] : scope_param) || state.config.scope,
  const scoped = filterEventsByScope (state.events, state.config.scope),
  const events = scoped.filter ((e) => (e.timestamp || 0) > since),
  return res.status (200).json ({
    instance_id: state.config.instance_id,
    lastSyncedAt: state.lastSyncedAt,
    events,
    scope: requested_scope});
}
    instanceId: state.config.instanceId,
    lastSyncedAt: state.lastSyncedAt,
    events,

<<<<<<< HEAD:pages/api/sync/pull.ts
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/sync/pull.ts
