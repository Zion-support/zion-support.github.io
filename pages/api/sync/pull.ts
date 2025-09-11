
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return res.status(200).json({



    instanceId: state.config.instanceId,
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    lastSyncedAt: state.lastSyncedAt,
    events,
    scope: requestedScope
  });
}


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

  const scoped = filterEventsByScope(state.events, state.config.scope),
  const events = scoped.filter((e) => (e.timestamp || 0) > since)

  return res.status(200).json({
    instanceId: state.config.instanceId,
    lastSyncedAt: state.lastSyncedAt,
    events,
    scope: requestedScope})

}
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, filterEventsByScope } from "../../../utils/sync/storage";
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST" && req.method !== "GET") return res.status(405).json({ error: "Method not allowed" })
  const state = readState()
  const sinceParam = (req.method === "GET" ? req.query.since : (req.body?.since as any)) as string | string[] | undefined
  const since = Number(Array.isArray(sinceParam) ? sinceParam[0] : sinceParam) |0
  const scopeParam = (req.method === "GET" ? req.query.scope : (req.body?.scope as any)) as string | string[] | undefined
  const requestedScope = (Array.isArray(scopeParam) ? scopeParam[0] : scopeParam) |state.config.scope
  const scoped = filterEventsByScope(state.events, state.config.scope)
  const events = scoped.filter((e) => (e.timestamp |0) > since)
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

    instanceId: state.config.instanceId,
    lastSyncedAt: state.lastSyncedAt,
    events,
    instanceId: state.config.instanceId,
    lastSyncedAt: state.lastSyncedAt,
    events,
    scope: requestedScope});
};
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
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
    instanceId: state.config.instanceId,
    lastSyncedAt: state.lastSyncedAt,
    events,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
