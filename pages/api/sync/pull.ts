import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { readState, filterEventsByScope } from &quot;../../../utils/sync/storage&quot;;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;POST&quot; && req.method !== &quot;GET&quot;) return res.status(405).json({ error: &quot;Method not allowed&quot; });

  const state = readState();
  const sinceParam = (req.method === &quot;GET&quot; ? req.query.since : (req.body?.since as any)) as string | string[] | undefined;
  const since = Number(Array.isArray(sinceParam) ? sinceParam[0] : sinceParam) || 0;

  const scopeParam = (req.method === &quot;GET&quot; ? req.query.scope : (req.body?.scope as any)) as string | string[] | undefined;
  const requestedScope = (Array.isArray(scopeParam) ? scopeParam[0] : scopeParam) || state.config.scope;

  const scoped = filterEventsByScope(state.events, state.config.scope);
  const events = scoped.filter((e) => (e.timestamp || 0) > since);

  return res.status(200).json({
    instanceId: state.config.instanceId,
    lastSyncedAt: state.lastSyncedAt,
    events,
    scope: requestedScope});
}