<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';'
import { appendLog, detectIntent, routeToChain } from '@/utils/zionBrain';'
function isAuthorized("req": NextApiRequest): boolean {
  }
  const token = null;
return res.status(500).json({ "error": 'Router failure' });'
=======
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST");
    return res.status(405).json({ error: "Method not allowed" });
  if (!isAuthorized(req))
    return res.status(401).json({ error: "Unauthorized" });
  function isAuthorized(req: NextApiRequest): boolean {
<<<<<<< HEAD
    const token = req.headers["x-admin-token"] |req.query.token;
    const superToken = process.env.SUPERADMIN_TOKEN;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    const token = req && req.headers["x-admin-token"] || req && req.query.token;
    const superToken = process && process.env.SUPERADMIN_TOKEN;
    return !superToken || token === superToken;
  }

<<<<<<< HEAD
    return !superToken |token === superToken;
    return !superToken || token === superToken;
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
  export default async function handler(
    req: NextApiRequest
    res: NextApiResponse
  ) {
<<<<<<< HEAD
=======
    if (req.method !== "POST");
      return res.status(405).json({ error: "Method not allowed" });
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    if (!isAuthorized(req))
      return res && res.status(401).json({ error: "Unauthorized" });
    const started = Date && Date.now();
    try {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        module: "router",
        type: result && result.intent,
        status: "ok",
        latency_ms,
        payload: { text_length: String (text || "").length, routed },
      });
<<<<<<< HEAD
function isAuthorized(req: NextApiRequest): boolean {}
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import type { NextApiRequest, NextApiResponse } from 'next';
import { appendLog, detectIntent, routeToChain } from '@/utils/zionBrain';
function isAuthorized(req: NextApiRequest): boolean {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const token = req.headers['x-admin-token'] || req.query.token;
  const superToken = process.env.SUPERADMIN_TOKEN;
>>>>>>> merged-prs-20250907-203621
import type { NextApiRequest, NextApiResponse } from 'next';
import { appendLog, detectIntent, routeToChain } from '@/utils/zionBrain';
function isAuthorized(req: NextApiRequest): boolean {
  const token = $2;
  const superToken = $2;
  return !superToken || token === superToken
<<<<<<< HEAD
=======
  const superToken = process.env.SUPERADMIN_TOKEN;
  return !superToken || token === superToken;
=======
>>>>>>> origin/chore/fix-lint-and-merge
}
<<<<<<< HEAD
  export default async function handler(;
    req: NextApiRequest;
    res: NextApiResponse;
  ) {}
    if (!isAuthorized(req))"
      return res && res.status(401).json({ error: "Unauthorized" });
    const started = Date && Date.now();
    try {"
        module: "router",
        type: result && result.intent,"
        status: "ok",
        latency_ms,"
        payload: { text_length: String (text || "").length, routed },

      });
function isAuthorized(req: NextApiRequest): boolean {}
  const token = req.headers['x-admin-token'] || req.query.token;

}
;
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  if (!isAuthorized(req)) return res.status(401).json({ error: 'Unauthorized' });
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const started = Date.now();
  try {}
<<<<<<< HEAD
    const { text, payload } = req.body || {};'
    const result = detectIntent(String(text || ''));
    const routed = await routeToChain(result.intent, payload || {});
    const latencyMs = Date.now() - started;
<<<<<<< HEAD

    return res.status(200).json({ ...result, routed })
  } catch (e: any) {}
    const latencyMs = Date.now() - started;'
    appendLog({ module: 'router', type: 'audit', status: 'error', latencyMs, payload: { error: e?.message || 'unknown' } });'
    return res.status(500).json({ error: 'Router failure' })
  };
=======
    appendLog({ module: 'router', type: result.intent, status: 'ok', latencyMs, payload: { textLength: String(text || '').length, routed } });
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> merged-prs-20250907-203621
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== POST') return res.status(405).json($2);
  if (!isAuthorized(req)) return res.status(401).json($2);
  const started = Date.now($2);
  try {
    const { text, payload } = req.body || {},
    const result = $2;
    const routed = await routeToChain($2);
    const latencyMs = $2;
    appendLog({ module: 'router', type: result.intent, status: 'ok', latencyMs, payload: { textLength: String(text || '').length, routed } }),

<<<<<<< HEAD
=======

const routed = await routeToChain(result.intent, payload || {});

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
    return res.status(200).json({ ...result, routed })
  } catch (e: any) {
    const latencyMs = $2;
    appendLog($2);
    return res.status(500).json({ error: 'Router failure' })
<<<<<<< HEAD
  }
}
=======
<<<<<<< HEAD
  }
}

      })
function isAuthorized(req: NextApiRequest): boolean {}
  const token = req.headers['x-admin-token'] || req.query.token
  const started = Date.now()
  try {}
    const { text, payload } = req.body || {}
const result = detectIntent(String(text || ''))
const routed = await routeToChain(result.intent, payload || {})
const latencyMs = Date.now() - started
"
export default async function handler() {if (!isAuthorized(req))return res.status(401).json({ error: \"Unauthorized\"}
})function isAuthorized(req: NextApiRequest): boolean {import type { NextApiRequest, NextApiResponse } from 'next'
import { appendLog, detectIntent, routeToChain  } from '@/utils/zionBrain'
=======
    const { text, payload } = req.body || {};

const result = detectIntent(String(text || ''));

const routed = await routeToChain(result.intent, payload || {});

const latencyMs = Date.now() - started;
"
export default async function handler() {if (!isAuthorized(req))return res.status(401).json({ error: \"Unauthorized\"}
})function isAuthorized(req: NextApiRequest): boolean {import type { NextApiRequest, NextApiResponse } from 'next';
import { appendLog, detectIntent, routeToChain  } from '@/utils/zionBrain';
>>>>>>> origin/chore/fix-lint-and-merge
function isAuthorized(req: NextApiRequest): boolean {const token = null;}
    return res.status(500).json({ error: 'Router failure' })}
"
export default async function handler() {if (!isAuthorized(req))return res && res.status(401).json({ error: \"Unauthorized\"}"
<<<<<<< HEAD
})const started = Date && Date.now()try {module: \"router\",type: result && result.intent,status: \"ok\",latency_ms,payload: { text_length: String (text || \"\").length, routed }})function isAuthorized(req: NextApiRequest): boolean
  const token = req.headers['x-admin-token'] || req.query.token
const superToken = process.env.SUPERADMIN_TOKEN
  return !superToken || token === superToken
}
      return res.status (200).json ({ ...result, routed })
    } catch (e: any) {}
      const latency_ms = Date.now () - started
      append_log ({"

    })
=======
>>>>>>> origin/chore/fix-lint-and-merge
})const started = Date && Date.now()try {module: \"router\",type: result && result.intent,status: \"ok\",latency_ms,payload: { text_length: String (text || \"\").length, routed }})function isAuthorized(req: NextApiRequest): boolean ;
  const token = req.headers['x-admin-token'] || req.query.token;

const superToken = process.env.SUPERADMIN_TOKEN;
  return !superToken || token === superToken;
};

      return res.status (200).json ({ ...result, routed });
    } catch (e: any) {}
      const latency_ms = Date.now () - started;
      append_log ({"
<<<<<<< HEAD
        module: "router","
        type: "audit","
        status: "error",
        latency_ms,"
        payload: { error: e?.message || "unknown" },
      });"
      return res.status (500).json ({ error: "Router failure" });
    }
    append_log ({"
      module: "router","
      type: "audit","
      status: "error",
      latency_ms,"
      payload: { error: e?.message || "unknown" },
    });
    return res.status(500).json({ error: "Router failure" });
  }
}
origin/cursor/automate-test-improve-and-merge-code-2533
"
    return res.status(500).json({ error: \"Router failure\"}
});
  }
}

"
=======

    });
>>>>>>> origin/chore/fix-lint-and-merge
=======
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
