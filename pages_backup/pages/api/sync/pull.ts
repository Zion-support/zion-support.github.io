
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



  return res.status(200).json({





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









