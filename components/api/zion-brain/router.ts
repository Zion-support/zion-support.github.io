

<<<<<<< HEAD
=======

import type { NextApiRequest, NextApiResponse } from 'next';'
import { appendLog, detectIntent, routeToChain } from '@/utils/zionBrain';'
function isAuthorized("req": NextApiRequest): boolean {
  }
  const token = null;
return res.status(500).json({ "error": 'Router failure' });'

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

    const token = req && req.headers["x-admin-token"] || req && req.query.token;
    const superToken = process && process.env.SUPERADMIN_TOKEN;
    return !superToken || token === superToken;
  }

    return !superToken |token === superToken;
    return !superToken || token === superToken;
  }

>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
  export default async function handler(
    req: NextApiRequest
    res: NextApiResponse
  ) {

<<<<<<< HEAD
    if (req.method !== "POST");
      return res.status(405).json({ error: "Method not allowed" });

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    if (!isAuthorized(req))
      return res && res.status(401).json({ error: "Unauthorized" });
    const started = Date && Date.now();
    try {

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        module: "router",
        type: result && result.intent,
        status: "ok",
        latency_ms,
        payload: { text_length: String (text || "").length, routed },
      });

<<<<<<< HEAD

  const token = req.headers['x-admin-token'] || req.query.token;
  const superToken = process.env.SUPERADMIN_TOKEN;

=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { appendLog, detectIntent, routeToChain } from '@/utils/zionBrain';
function isAuthorized(req: NextApiRequest): boolean {
function isAuthorized(req: NextApiRequest): boolean {}
  const token = req.headers['x-admin-token'] || req.query.token;
  const superToken = process.env.SUPERADMIN_TOKEN;
>>>>>>> origin/cursor/delete-old-data-records-6bba
import type { NextApiRequest, NextApiResponse } from 'next';
import { appendLog, detectIntent, routeToChain } from '@/utils/zionBrain';
function isAuthorized(req: NextApiRequest): boolean {
  const token = $2;
  const superToken = $2;
  return !superToken || token === superToken
<<<<<<< HEAD

  const superToken = process.env.SUPERADMIN_TOKEN;
  return !superToken || token === superToken;

    return res.status(200).json({ ...result, routed })
  } catch (e: any) {
    const latencyMs = $2;
    appendLog($2);
    return res.status(500).json({ error: 'Router failure' })

=======
  const superToken = process.env.SUPERADMIN_TOKEN;
  return !superToken || token === superToken;
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
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  if (!isAuthorized(req)) return res.status(401).json({ error: 'Unauthorized' });
  const started = Date.now();
  try {}
    const { text, payload } = req.body || {};'
    const result = detectIntent(String(text || ''));
    const routed = await routeToChain(result.intent, payload || {});
    const latencyMs = Date.now() - started;

    const { text, payload } = req.body || {};
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
const latencyMs = Date.now() - started;
"
export default async function handler() {if (!isAuthorized(req))return res.status(401).json({ error: \"Unauthorized\"}
})function isAuthorized(req: NextApiRequest): boolean {import type { NextApiRequest, NextApiResponse } from 'next';
import { appendLog, detectIntent, routeToChain  } from '@/utils/zionBrain';
function isAuthorized(req: NextApiRequest): boolean {const token = null;}
    return res.status(500).json({ error: 'Router failure' })}
"
export default async function handler() {if (!isAuthorized(req))return res && res.status(401).json({ error: \"Unauthorized\"}"
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
})const started = Date && Date.now()try {module: \"router\",type: result && result.intent,status: \"ok\",latency_ms,payload: { text_length: String (text || \"\").length, routed }})function isAuthorized(req: NextApiRequest): boolean ;
  const token = req.headers['x-admin-token'] || req.query.token;

const superToken = process.env.SUPERADMIN_TOKEN;
  return !superToken || token === superToken;
};

      return res.status (200).json ({ ...result, routed });
    } catch (e: any) {}
      const latency_ms = Date.now () - started;
      append_log ({"
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
