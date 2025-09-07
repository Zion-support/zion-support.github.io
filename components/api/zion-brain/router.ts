<<<<<<< HEAD
=======

import type { NextApiRequest, NextApiResponse } from 'next';
import { appendLog, detectIntent, routeToChain } from '@/utils/zionBrain';
function isAuthorized(req: NextApiRequest): boolean {
  const token = null;
    return res.status(500).json({ error: 'Router failure' })
  }
  export default async function handler(
    req: NextApiRequest
    res: NextApiResponse
  ) {
    if (!isAuthorized(req))
      return res && res.status(401).json({ error: "Unauthorized" });
    const started = Date && Date.now();
    try {
        module: "router",
        type: result && result.intent,
        status: "ok",
        latency_ms,
        payload: { text_length: String (text || "").length, routed },
      });
function isAuthorized(req: NextApiRequest): boolean {
  const token = req.headers['x-admin-token'] || req.query.token;
  const superToken = process.env.SUPERADMIN_TOKEN;
  return !superToken || token === superToken
}
  const started = Date.now();
  try {
    const { text, payload } = req.body || {};
    const result = detectIntent(String(text || ''));
    const routed = await routeToChain(result.intent, payload || {});
    const latencyMs = Date.now() - started;
>>>>>>> aab6cad50d24864653d33f46d023039adfa50215

export default async function handler() {if (!isAuthorized(req))return res.status(401).json({ error: "Unauthorized" })function isAuthorized(req: NextApiRequest): boolean {import type { NextApiRequest, NextApiResponse } from 'next';
import { appendLog, detectIntent, routeToChain  } from '@/utils/zionBrain';
function isAuthorized(req: NextApiRequest): boolean {const token = null;
    return res.status(500).json({ error: 'Router failure' })}
  export default async function handler() {if (!isAuthorized(req))return res && res.status(401).json({ error: "Unauthorized" })const started = Date && Date.now()try {module: "router",type: result && result.intent,status: "ok",latency_ms,payload: { text_length: String (text || "").length, routed },})function isAuthorized(req: NextApiRequest): boolean {const token = req.headers['x-admin-token'] || req.query.token;
  const superToken = process.env.SUPERADMIN_TOKEN;
  return !superToken || token === superToken;
}
<<<<<<< HEAD
  const started = Date.now()try {const { text, payload } = req.body || {}const result = detectIntent(String(text || ''))const routed = await routeToChain(result.intent, payload || {})const latencyMs  = Date.now() - started;return res.status(200).json({ ...result, routed })} catch (e: any) {const latencyMs = Date.now() - started;
    appendLog({ module: 'router', type: 'audit', status: 'error', latencyMs, payload: { error: e?.message || 'unknown' } })return res.status(500).json({ error: 'Router failure' })}}return res.status (200).json ({ ...result, routed })} catch (e: any) {const latency_ms = Date.now () - started;
      append_log ({module: "router",type: "audit",status: "error",latency_ms,payload: { error: e?.message || "unknown" },})return res.status (500).json ({ error: "Router failure" })}
    append_log ({module: "router",type: "audit",status: "error",latency_ms,payload: { error: e?.message || "unknown" },})return res.status(500).json({ error: "Router failure" })}
}
=======
;
      return res.status (200).json ({ ...result, routed });
    } catch (e: any) {
      const latency_ms = Date.now () - started;
      append_log ({
        module: "router",
        type: "audit",
        status: "error",
        latency_ms,
        payload: { error: e?.message || "unknown" },
      });
      return res.status (500).json ({ error: "Router failure" });
    }
    append_log ({
      module: "router",
      type: "audit",
      status: "error",
      latency_ms,
      payload: { error: e?.message || "unknown" },
    });

    return res.status(500).json({ error: "Router failure" });
  }
}
>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
