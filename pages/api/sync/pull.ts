<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import { readState, filterEventsByScope } from "../../../utils/sync/storage",

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST" && req.method !== "GET") return res.status(405).json({ error: "Method not allowed" }),

  const state = readState(),
  const sinceParam = (req.method === "GET" ? req.query.since : (req.body?.since as any)) as string | string[] | undefined,
  const since = Number(Array.isArray(sinceParam) ? sinceParam[0] : sinceParam) || 0,

  const scopeParam = (req.method === "GET" ? req.query.scope : (req.body?.scope as any)) as string | string[] | undefined,
  const requestedScope = (Array.isArray(scopeParam) ? scopeParam[0] : scopeParam) || state.config.scope,
=======
import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { readState, filterEventsByScope } from &quot;../../../utils/sync/storage&quot;;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;POST&quot; && req.method !== &quot;GET&quot;) return res.status(405).json({ error: &quot;Method not allowed&quot; });

  const state = readState();
  const sinceParam = (req.method === &quot;GET&quot; ? req.query.since : (req.body?.since as any)) as string | string[] | undefined;
  const since = Number(Array.isArray(sinceParam) ? sinceParam[0] : sinceParam) || 0;

  const scopeParam = (req.method === &quot;GET&quot; ? req.query.scope : (req.body?.scope as any)) as string | string[] | undefined;
  const requestedScope = (Array.isArray(scopeParam) ? scopeParam[0] : scopeParam) || state.config.scope;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const scoped = filterEventsByScope(state.events, state.config.scope),
  const events = scoped.filter((e) => (e.timestamp || 0) > since),

  return res.status(200).json({
    instanceId: state.config.instanceId,
    lastSyncedAt: state.lastSyncedAt,
    events,
    scope: requestedScope})
=======
import type {_NextApiRequest, _NextApiResponse} from "next";

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST" && req.method !== "GET") return res.status(405).json({ error: "Method not allowed"});

  const _state = readState();
  const _sinceParam = (req.method === "GET" ? req.query.since : (req.body?.since as any)) as string | string[] | undefined;
  const _since = Number(Array.isArray(sinceParam) ? sinceParam[0] : sinceParam) || 0;

  const _scopeParam = (req.method === "GET" ? req.query.scope : (req.body?.scope as any)) as string | string[] | undefined;
  const _requestedScope = (Array.isArray(scopeParam) ? scopeParam[0] : scopeParam) || state.config.scope;

  const _scoped = filterEventsByScope(state.events, state.config.scope);
  const _events = scoped.filter(_(e) => (e.timestamp || 0) > since);

  return res.status(200).json({_instanceId: state.config.instanceId, _lastSyncedAt: state.lastSyncedAt, _events, _scope: requestedScope});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}