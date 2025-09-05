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
}