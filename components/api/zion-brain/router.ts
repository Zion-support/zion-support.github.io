
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
    return !superToken |token === superToken;
=======
    const token = req && req.headers["x-admin-token"] || req && req.query.token;
    const superToken = process && process.env.SUPERADMIN_TOKEN;
    return !superToken || token === superToken;
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  }
  export default async function handler(
    req: NextApiRequest
    res: NextApiResponse
  ) {
    if (req && req.method !== "POST")
      return res && res.status(405).json({ error: "Method not allowed" });
    if (!isAuthorized(req))
      return res && res.status(401).json({ error: "Unauthorized" });
    const started = Date && Date.now();
    try {
<<<<<<< HEAD
      const { text, payload } = req.body |{}
      const result = detectIntent(String(text |""));
      const routed = await routeToChain(result.intent, payload |{});
      const latencyMs = Date.now() - started;
      appendLog({
        module: "router"
        type: result.intent
        status: "ok"
        latencyMs
        payload: { textLength: String(text |"").length, routed }
      });
      return res.status(200).json({ ...result, routed });
=======
      const { text, payload } = req && req.body || {};
      const result = detectIntent(String(text || ""));
      const routed = await routeToChain(result && result.intent, payload || {});
      const latencyMs = Date && Date.now() - started;

      appendLog({
        module: "router",
        type: result && result.intent,
        status: "ok",
        latencyMs,
        payload: { textLength: String(text || "").length, routed },
      });

      return res && res.status(200).json({ ...result, routed });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    } catch (e: any) {
      const latencyMs = Date && Date.now() - started;
      appendLog({
        module: "router"
        type: "audit"
        status: "error"
        latencyMs
        payload: { error: e?.message |"unknown" }
      });
      return res && res.status(500).json({ error: "Router failure" });
    }
    appendLog({
      module: "router"
      type: "audit"
      status: "error"
      latencyMs
      payload: { error: e?.message |"unknown" }
    });
    return res && res.status(500).json({ error: "Router failure" });
  }
}