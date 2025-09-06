
<<<<<<< HEAD
=======
<<<<<<< HEAD
const token = req && req.headers["x-admin-token"] || req && req.query.token;
    const superToken = process && process.env.SUPERADMIN_TOKEN;
    return !superToken || token === superToken;
  }
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

    const token = req && req.headers["x-admin-token"] || req && req.query.token;
    const superToken = process && process.env.SUPERADMIN_TOKEN;
    return !superToken || token === superToken;
  }

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    return !superToken |token === superToken;
    return !superToken || token === superToken;
  }
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
  export default async function handler(
    req: NextApiRequest
    res: NextApiResponse
  ) {
<<<<<<< HEAD
    if (req && req.method !== "POST")
      return res && res.status(405).json({ error: "Method not allowed" });
=======
    if (req.method !== "POST");
      return res.status(405).json({ error: "Method not allowed" });
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    if (!isAuthorized(req))
      return res && res.status(401).json({ error: "Unauthorized" });
    const started = Date && Date.now();
    try {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        module: "router",
        type: result && result.intent,
        status: "ok",
        latency_ms,
        payload: { text_length: String (text || "").length, routed },
      });
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
    return res.status (500).json ({ error: "Router failure" });

=======
    return res.status(500).json({ error: "Router failure" });
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
<<<<<<< HEAD
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
