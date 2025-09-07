

import type { NextApiRequest, NextApiResponse } from "next";
import { readState, filterEventsByScope } from "../../../utils/sync/storage";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST" && req.method !== "GET") return res.status(405).json($2);
  const state = readState($2);
  const sinceParam = $2;
  const since = $2;
  const scopeParam = $2;
  const requestedScope = $2;
  const scoped = filterEventsByScope($2);
  const events = $2;
  return res.status(200).json({
    instanceId: state.config.instanceId
    lastSyncedAt: state.lastSyncedAt
    events
  return res.status(200).json({

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
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
    scope: requestedScope
  });
}

