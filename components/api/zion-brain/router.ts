<<<<<<< HEAD
export default async function handler(;
  req: NextApiRequest;
  res: NextApiResponse;
) {}
  if (!isAuthorized(req))
    return res.status(401).json({ error: "Unauthorized" });
<<<<<<< HEAD
  function isAuthorized(req: NextApiRequest): boolean {
import type { NextApiRequest, NextApiResponse } from 'next';
import { appendLog, detectIntent, routeToChain } from '@/utils/zionBrain';
function isAuthorized(req: NextApiRequest): boolean {
  const token = null;
    return res.status(500).json({ error: 'Router failure' })
origin/cursor/automate-test-improve-and-merge-code-2533
=======
  function isAuthorized(req: NextApiRequest): boolean {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======

  }

export default async function handler(
    req: NextApiRequest;
res: NextApiResponse;
  ) {
    if (!isAuthorized(req))}
      return res && res.status(401).json({ error: \"Unauthorized\"}
});

const started = Date && Date.now();
    try {"
        module: \"router\",
        type: result && result.intent,"
        status: \"ok\"}
        latency_ms}"
        payload: { text_length: String (text || \"\").length, routed }
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      });
function isAuthorized(req: NextApiRequest): boolean {}
  const token = req.headers['x-admin-token'] || req.query.token;
<<<<<<< HEAD
  const superToken = process.env.SUPERADMIN_TOKEN;
  return !superToken || token === superToken;
}
  const started = Date.now();
  try {}
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
=======

const superToken = process.env.SUPERADMIN_TOKEN;}
  return !superToken || token = == superToken}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
;
  const started = Date.now();
  try {}
    const { text, payload } = req.body || {};

const result = detectIntent(String(text || ''));

const routed = await routeToChain(result.intent, payload || {});

const latencyMs = Date.now() - started;
"
export default async function handler() {if (!isAuthorized(req))return res.status(401).json({ error: \"Unauthorized\"}
})function isAuthorized(req: NextApiRequest): boolean {import type { NextApiRequest, NextApiResponse } from 'next';
import { appendLog, detectIntent, routeToChain  } from '@/utils/zionBrain';
function isAuthorized(req: NextApiRequest): boolean {const token = null;}
    return res.status(500).json({ error: 'Router failure' })}
"
export default async function handler() {if (!isAuthorized(req))return res && res.status(401).json({ error: \"Unauthorized\"}"
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
=======
        module: \"router\","
        type: \"audit\","
        status: \"error\",
        latency_ms}"
        payload: { error: e?.message || \"unknown\"}
}
      });"
      return res.status (500).json ({ error: \"Router failure\"}
});
    }
    append_log ({"
      module: \"router\","
      type: \"audit\","
      status: \"error\",
      latency_ms}"
      payload: { error: e?.message || \"unknown\"}
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    });
<<<<<<< HEAD
    return res.status(500).json({ error: "Router failure" });
  }
}
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
"
    return res.status(500).json({ error: \"Router failure\"}
});
  }
}

"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
