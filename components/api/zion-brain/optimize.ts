<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  if (!isAuthorized(req))
    return res && res.status(401).json({ error: "Unauthorized" });
  function isAuthorized(req: NextApiRequest): boolean {
<<<<<<< HEAD
    const token = req.headers["x-admin-token"] |req.query.token;
    const superToken = process.env.SUPERADMIN_TOKEN;
=======

    const token = req && req.headers["x-admin-token"] || req && req.query.token;
    const superToken = process && process.env.SUPERADMIN_TOKEN;
    return !superToken || token === superToken;
  }

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

    return !superToken || token === superToken;
  }

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
const token = req && req.headers["x-admin-token"] || req && req.query.token;
    const superToken = process && process.env.SUPERADMIN_TOKEN;
    return !superToken || token === superToken;
  }
import type { NextApiRequest, NextApiResponse } from 'next';
import { appendLog, optimizePrompt } from '@/utils/zionBrain';
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
    const { prompt, userIntent } = req.body || {};
    const result = await optimizePrompt(String(prompt || ''), userIntent);
    const latencyMs = Date.now() - started;
    const status = result.optimized.length > (String(prompt || '').length * 0.5) ? 'ok' : 'laggy';
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
    return !superToken |token === superToken;
=======
    return !superToken || token === superToken;
  }
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

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
      const { prompt, userIntent } = req && req.body || {};
      const result = await optimizePrompt(String(prompt || ""), userIntent);
      const latencyMs = Date && Date.now() - started;
      const status =
        result && result.optimized.length > String(prompt || "").length * 0 && 0.5
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          ? "ok"
          : "laggy";
      appendLog({
        module: "optimizer"
        type: "optimize"
        status: status as any
        latencyMs
        payload: {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          userIntent,
          originalLength: String(prompt || "").length,
          optimizedLength: result && result.optimized.length,
        },
      });
<<<<<<< HEAD


=======
=======
    return res.status(200).json(result)
  } catch (e: any) {
    appendLog({ module: 'optimizer', type: 'optimize', status: 'error', payload: { error: e?.message || 'unknown' } });
    return res.status(500).json({ error: 'Optimization failure' })
  };
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
      const { prompt, user_intent } = req.body || {}
      const result = await optimize_prompt (String (prompt || ""), user_intent);
      const latency_ms = Date.now () - started;
      const status =;
        result.optimized.length > String (prompt || "").length * 0.5;
          ? "ok";
          : "laggy";
;
      append_log ({
        module: "optimizer",
        type: "optimize",
        status: status as any,
        latency_ms,
        payload: {
          user_intent,
          original_length: String (prompt || "").length,
          optimized_length: result.optimized.length,
        },
      });
;
      return res.status (200).json (result);
    } catch (e: any) {
      append_log ({
        module: "optimizer",
        type: "optimize",
        status: "error",
        payload: { error: e?.message || "unknown" },
      });
      return res.status (500).json ({ error: "Optimization failure" });
    }
    append_log ({
      module: "optimizer",
      type: "optimize",
      status: "error",
      payload: { error: e?.message || "unknown" },
    });
<<<<<<< HEAD
    return res.status (500).json ({ error: "Optimization failure" });

=======
    return res.status(500).json({ error: "Optimization failure" });
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
<<<<<<< HEAD
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
