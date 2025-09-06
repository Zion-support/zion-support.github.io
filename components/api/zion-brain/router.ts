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
        type: result.intent,
        status: "ok",
        latency_ms,
        payload: { text_length: String (text || "").length, routed },
      });
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
    return res.status (500).json ({ error: "Router failure" });
  }
}