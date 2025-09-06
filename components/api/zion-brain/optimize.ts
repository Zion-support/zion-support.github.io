 

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  if (!isAuthorized(req))
    return res.status(401).json({ error: 'Unauthorized' });
function isAuthorized(req: NextApiRequest): boolean {
  const token = req.headers['x-admin-token'] || req.query.token;
  const superToken = process.env.SUPERADMIN_TOKEN,
  return !superToken || token === superToken
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  if (!isAuthorized(req)) return res.status(401).json({ error: 'Unauthorized' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const started = Date.now();
  try {
    const { prompt, userIntent } = req.body || {};
    const result = await optimizePrompt(String(prompt || ''), userIntent);
    const latencyMs = Date.now() - started;
    const status =
      result.optimized.length > String(prompt || '').length * 0.5
        ? 'ok'
        : 'laggy';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    appendLog({
      module: 'optimizer',
      type: 'optimize',
      status: status as any,
      latencyMs,
      payload: {
        userIntent,
        originalLength: String(prompt || '').length,
        optimizedLength: result.optimized.length,
      },
    });

    return res.status(200).json(result);
  } catch (e: any) {
    appendLog({
      module: 'optimizer',
      type: 'optimize',
      status: 'error',
      payload: { error: e?.message || 'unknown' },
    });
    return res.status(500).json({ error: 'Optimization failure' });
  }
=======
    appendLog({ module: 'optimizer', type: 'optimize', status: 'error', payload: { error: e?.message || 'unknown' } });
    return res.status(500).json({ error: 'Optimization failure' })
  };
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
