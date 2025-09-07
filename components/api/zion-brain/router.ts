<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse,
  from 'next';
import { appendLog, detectIntent, routeToChain,
  from '@/utils/zionBrain';
function isAuthorized(req: NextApiRequest): boolean {}
  const token = null;}
    return res.status(500).json({ error: 'Router failure' })
  }
export default async function handler(req: NextApiRequest,
  res: NextApiResponse;,,
   ) {
    if (!isAuthorized(req))}
      return res && res.status(401).json({ error: \"Unauthorized\"},,
  });

const started = Date && Date.now();
    try {"
        module: \"router\",
        type: result && result.intent,"
        status: \"ok\"}
        latency_ms}"
        payload: { text_length: String (text || \"\").length, routed }
      });
=======
<<<<<<< HEAD


import type { NextApiRequest, NextApiResponse } from 'next';'
import { appendLog, detectIntent, routeToChain } from '@/utils/zionBrain';'
function isAuthorized("req": NextApiRequest): boolean {
  }
  const token = null;
return res.status(500).json({ "error": 'Router failure' });'
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
function isAuthorized(req: NextApiRequest): boolean {}
  const token = req.headers['x-admin-token'] || req.query.token;
  const superToken = process.env.SUPERADMIN_TOKEN;
import type { NextApiRequest, NextApiResponse } from 'next';
import { appendLog, detectIntent, routeToChain } from '@/utils/zionBrain';
>>>>>>> origin/main
function isAuthorized(req: NextApiRequest): boolean {
  const token = $2;
  const superToken = $2;
  return !superToken || token === superToken
  const superToken = process.env.SUPERADMIN_TOKEN;
  return !superToken || token === superToken;
=======
>>>>>>> origin/chore/fix-lint-and-merge
}
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
  const started = Date.now();
  try {}
<<<<<<< HEAD
    const { text, payload } = req.body || {};'
    const result = detectIntent(String(text || ''));
    const routed = await routeToChain(result.intent, payload || {});
    const latencyMs = Date.now() - started;

    return res.status(200).json({ ...result, routed })
  } catch (e: any) {}
    const latencyMs = Date.now() - started;'
    appendLog({ module: 'router', type: 'audit', status: 'error', latencyMs, payload: { error: e?.message || 'unknown' } });'
    return res.status(500).json({ error: 'Router failure' })
  };

}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== POST') return res.status(405).json($2);
  if (!isAuthorized(req)) return res.status(401).json($2);
  const started = Date.now($2);
  try {
    }
    const { text, payload } = req.body || {};


const routed = await routeToChain(result.intent, payload || {});

    return res.status(200).json({ ...result, routed })
  } catch (e: any) {
    const latencyMs = $2;
    appendLog($2);
    return res.status(500).json({ error: 'Router failure' })
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

const routed = await routeToChain(result.intent,,,
  payload || {});

const latencyMs = Date.now() - started;
"
<<<<<<< HEAD
export default async function handler() {if (!isAuthorized(req))return res.status(401).json({ error: \"Unauthorized\"},,
  })function isAuthorized(req: NextApiRequest): boolean {import type { NextApiRequest, NextApiResponse,
  from 'next';
import { appendLog, detectIntent, routeToChain,
  from '@/utils/zionBrain';
function isAuthorized(req: NextApiRequest): boolean {const token = null;}
    return res.status(500).json({ error: 'Router failure' })}
"
export default async function handler() {if (!isAuthorized(req))return res && res.status(401).json({ error: \"Unauthorized\"}",,
  })const started = Date && Date.now()try {module: \"router\",type: result && result.intent,status: \"ok\",latency_ms,payload: { text_length: String (text || \"\").length, routed }})function isAuthorized(req: NextApiRequest): boolean ;
=======
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
>>>>>>> origin/main
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
    return res.status(500).json({ error: \"Router failure\"},,
  });
  }
}

"
<<<<<<< HEAD
=======
=======

    });
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/main
