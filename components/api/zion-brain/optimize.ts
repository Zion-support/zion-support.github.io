import type {_NextApiRequest, _NextApiResponse} from 'next';

function isAuthorized(_req: NextApiRequest): boolean {_const _token = req.headers['x-admin-token'] || req.query.token;
  const _superToken = process.env.SUPERADMIN_TOKEN;
  return !superToken || token === superToken;}

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  if (!isAuthorized(req)) return res.status(401).json({_error: 'Unauthorized'});

  const _started = Date.now();
  try {_const { prompt, _userIntent} = req.body || {};
    const _result = await optimizePrompt(String(prompt || ''), userIntent);
    const _latencyMs = Date.now() - started;
    const _status = result.optimized.length > (String(prompt || '').length * 0.5) ? 'ok' : 'laggy';

    appendLog({_module: 'optimizer', _type: 'optimize', _status: status as any, _latencyMs, _payload: { userIntent, _originalLength: String(prompt || '').length, _optimizedLength: result.optimized.length} });

    return res.status(200).json(result);
  } catch (e: unknown) {_appendLog({ module: 'optimizer', _type: 'optimize', _status: 'error', _payload: { error: e?.message || 'unknown'} });
    return res.status(500).json({_error: 'Optimization failure'});
  }
}