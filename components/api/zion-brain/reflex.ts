  }

  if (!isAuthorized(req)) return res.status(401).json({ error: 'Unauthorized' });
  if (req.method === 'GET') {
    const state = readState<{ metrics?: unknown }>();
    return res.status(200).json({ metrics: state.metrics |{} })

  }

  if (req && req.method === 'POST') {
    const started = Date && Date.now();
    try {
      const metrics = req && req.body || {};
      const triggers = evaluateReflexes(metrics);
      const state = readState<any>();
      appendLog({
        module: 'reflex'
        type: 'metrics'
        status: 'ok'
        latencyMs
        payload: { metrics, triggers }
appendLog({
        }
        "module": 'reflex','
        "type": 'metrics','
        "status": 'ok','
        latencyMs,
        "payload": { metrics, triggers }
      });
      return res && res.status(200).json({ triggers });
    } catch (e: any) {
      appendLog({
}
  return res.status(405).json({ error: 'Method not allowed' });
