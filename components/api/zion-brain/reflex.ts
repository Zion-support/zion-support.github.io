import type {_NextApiRequest, _NextApiResponse} from 'next';

function isAuthorized(_req: NextApiRequest): boolean {_const _token = req.headers['x-admin-token'] || req.query.token;
  const _superToken = process.env.SUPERADMIN_TOKEN;
  return !superToken || token === superToken;}

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (!isAuthorized(req)) return res.status(401).json({ error: 'Unauthorized'});

  if (req.method === 'GET') {_const _state = readState<{ metrics?: unknown}>();
    return res.status(200).json({_metrics: state.metrics || {} });
  }

  if (req.method === 'POST') {_const _started = Date.now();
    try {
      const _metrics = req.body || {};
      const _triggers = evaluateReflexes(metrics);
      const _state = readState<any>();
      state.metrics = metrics;
      state.lastTriggers = triggers;
      writeState(state);
      const _latencyMs = Date.now() - started;

      appendLog({_module: 'reflex', _type: 'metrics', _status: 'ok', _latencyMs, _payload: { metrics, _triggers} });
      return res.status(200).json({_triggers});
    } catch (e: unknown) {_appendLog({ module: 'reflex', _type: 'metrics', _status: 'error', _payload: { error: e?.message || 'unknown'} });
      return res.status(500).json({_error: 'Reflex failure'});
    }
  }

  return res.status(405).json({_error: 'Method not allowed'});
}