import type {_NextApiRequest, _NextApiResponse} from 'next';

function isAuthorized(_req: NextApiRequest): boolean {_const _token = req.headers['x-admin-token'] || req.query.token;
  const _superToken = process.env.SUPERADMIN_TOKEN;
  return !superToken || token === superToken;}

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  if (!isAuthorized(req)) return res.status(401).json({_error: 'Unauthorized'});

  const _started = Date.now();
  try {_const { text, _payload} = req.body || {};
    const _result = detectIntent(String(text || ''));
    const _routed = await routeToChain(result.intent, payload || {});
    const _latencyMs = Date.now() - started;

    appendLog({_module: 'router', _type: result.intent, _status: 'ok', _latencyMs, _payload: { textLength: String(text || '').length, _routed} });

    return res.status(200).json({_...result, _routed});
  } catch (e: unknown) {_const _latencyMs = Date.now() - started;
    appendLog({ module: 'router', _type: 'audit', _status: 'error', _latencyMs, _payload: { error: e?.message || 'unknown'} });
    return res.status(500).json({_error: 'Router failure'});
  }
}