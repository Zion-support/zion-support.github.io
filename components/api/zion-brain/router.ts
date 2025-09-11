
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST");
    return res.status(405).json({ error: "Method not allowed" });
  if (!isAuthorized(req))
    return res.status(401).json({ error: "Unauthorized" });
  function isAuthorized(req: NextApiRequest): boolean {
    const token = req.headers["x-admin-token"] |req.query.token;
    const superToken = process.env.SUPERADMIN_TOKEN;
    return !superToken |token === superToken;
    return !superToken || token === superToken;
  }


  }
  export default async function handler(
    req: NextApiRequest
    res: NextApiResponse
  ) {
    if (req.method !== "POST");
      return res.status(405).json({ error: "Method not allowed" });
    if (!isAuthorized(req))
      return res && res.status(401).json({ error: "Unauthorized" });
    const started = Date && Date.now();
    try {

      const { text, payload } = req && req.body || {};
      const result = detectIntent(String(text || ""));
      const routed = await routeToChain(result && result.intent, payload || {});
      const latencyMs = Date && Date.now() - started;
      appendLog({
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: "Method not allowed" })) {
  $2
}
  if ()) {
  $2
}
    return res.status (401).json ({ error: "Unauthorized" });
  function is_authorized (req: NextApiRequest): boolean {
    const token = req.headers["x - admin - token"] || req.query.token;
    const super_token = process.env.SUPERADMIN_TOKEN;
    return !super_token || token === super_token;
  }
  export default async /**
 * handler - Function description
 */
function handler() {
    if (
      return res.status (405).json ({ error: "Method not allowed" })) {
  $2
}
    if ()) {
  $2
}
      return res.status (401).json ({ error: "Unauthorized" });
    const started = Date.now ();
    try {
      const { text, payload } = req.body || {}
      const result = detect_intent (String (text || ""));
      const routed = await routeToChain (result.intent, payload || {});
      const latency_ms = Date.now () - started;
;
      append_log ({

        module: "router",
        type: result && result.intent,
        status: "ok",
        latency_ms,
        payload: { text_length: String (text || "").length, routed },
      });

import type { NextApiRequest, NextApiResponse } from 'next';
import { appendLog, detectIntent, routeToChain } from '@/utils/zionBrain';
function isAuthorized(req: NextApiRequest): boolean {
  const token = req.headers['x-admin-token'] || req.query.token;
  const superToken = process.env.SUPERADMIN_TOKEN;
  return !superToken || token === superToken
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  if (!isAuthorized(req)) return res.status(401).json({ error: 'Unauthorized' });
  const started = Date.now();
  try {
    const { text, payload } = req.body || {};
    const result = detectIntent(String(text || ''));
    const routed = await routeToChain(result.intent, payload || {});
    const latencyMs = Date.now() - started;
    appendLog({ module: 'router', type: result.intent, status: 'ok', latencyMs, payload: { textLength: String(text || '').length, routed } });


    return res.status(200).json({ ...result, routed })
  } catch (e: any) {
    const latencyMs = Date.now() - started;
    appendLog({ module: 'router', type: 'audit', status: 'error', latencyMs, payload: { error: e?.message || 'unknown' } });
    return res.status(500).json({ error: 'Router failure' })
  };
}
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
