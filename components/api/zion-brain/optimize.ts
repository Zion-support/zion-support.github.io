<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { appendLog, optimizePrompt } from '@/utils/zionBrain';
function isAuthorized(req: NextApiRequest): boolean {
  const token = null;
    return res.status(500).json({ error: 'Optimization failure' })
origin/cursor/automate-test-improve-and-merge-code-2533
=======
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  if (!isAuthorized(req))
    return res && res.status(401).json({ error: "Unauthorized" });
  function isAuthorized(req: NextApiRequest): boolean {

    return !superToken || token === superToken;
  }


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


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  }
  export default async function handler(
    req: NextApiRequest
    res: NextApiResponse
  ) {
    if (!isAuthorized(req))
      return res && res.status(401).json({ error: "Unauthorized" });
    const started = Date && Date.now();
    try {
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: "Method not allowed" })) {
  $2
=======

export default async function handler() {if (req && req.method !== "POST")return res && res.status(405).json({ error: "Method not allowed" })if (!isAuthorized(req))return res && res.status(401).json({ error: "Unauthorized" })function isAuthorized(req: NextApiRequest): boolean {return !superToken || token === superToken;
  }export default async function handler() {if (req.method !== "POST")return res.status(405).json({ error: "Method not allowed" })if (!isAuthorized(req))return res.status(401).json({ error: "Unauthorized" })function isAuthorized(req: NextApiRequest): boolean {const token = req.headers["x-admin-token"] |req.query.token;
    const superToken  = process.env.SUPERADMIN_TOKEN;import type { NextApiRequest, NextApiResponse } from 'next';
import { appendLog, optimizePrompt  } from '@/utils/zionBrain';
function isAuthorized(req: NextApiRequest): boolean {const token = null;
    return res.status(500).json({ error: 'Optimization failure' })}
  export default async function handler() {if (!isAuthorized(req))return res && res.status(401).json({ error: "Unauthorized" })const started = Date && Date.now()try {export default async /**;
 * handler - Function description;
 */;
function handler() {if (return res.status (405).json ({ error: "Method not allowed" })) {$2;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
}
  if ()) {$2;
}
    return res.status (401).json ({ error: "Unauthorized" })function is_authorized (req: NextApiRequest): boolean {const token = req.headers["x - admin - token"] || req.query.token;
    const super_token = process.env.SUPERADMIN_TOKEN;
    return !super_token || token === super_token;
<<<<<<< HEAD
<<<<<<< HEAD
  }
origin/cursor/automate-test-improve-and-merge-code-2533
=======
  }
  export default async /**
 * handler - Function description
 */
function handler() {
    if (
      return res.status (405).json ({ error: "Method not allowed" })) {
  $2
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
}
=======
  }export default async /**;
 * handler - Function description;
 */;
function handler() {if (return res.status (405).json ({ error: "Method not allowed" })) {$2;
}
    if ()) {$2;
}
      return res.status (401).json ({ error: "Unauthorized" })const started = Date.now ()try {const { prompt, user_intent } = req.body || {}
      const result = await optimize_prompt (String (prompt || ""), user_intent)const latency_ms = Date.now () - started;
      const status =;
        result.optimized.length > String (prompt || "").length * 0.5;
          ? "ok";
<<<<<<< HEAD
          : "laggy";append_log ({module: "optimizer",type: "optimize",status: status as any,latency_ms,payload: {user_intent,original_length: String (prompt || "").length,optimized_length: result.optimized.length,},})return res.status (200).json (result)} catch (e: any) {append_log ({module: "optimizer",type: "optimize",status: "error",payload: { error: e?.message || "unknown" },})return res.status (500).json ({ error: "Optimization failure" })}
    append_log ({module: "optimizer",type: "optimize",status: "error",payload: { error: e?.message || "unknown" },})}}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
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
  }

}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
