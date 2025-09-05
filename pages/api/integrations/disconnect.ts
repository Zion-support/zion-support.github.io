import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_providerId} = req.body as {_providerId?: string};
  if (!providerId || !getProviderById(providerId)) {_return res.status(400).json({ error: 'Invalid providerId'});
  }
  const _now = Date.now();
  const _updated = writeState(state => {_const _idx = state.connections.findIndex(c => c.providerId === providerId);
    if (idx >= 0) state.connections.splice(idx, _1);
    state.logs.push({ id: `${now}-${_providerId}-disconnect`, timestamp: now, providerId: providerId as any, level: 'info', action: 'disconnect' });
  });
  res.status(200).json({_ok: true});
}