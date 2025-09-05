import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_providerId} = req.body as {_providerId?: string};
  if (!providerId || !getProviderById(providerId)) {_return res.status(400).json({ error: 'Invalid providerId'});
  }
  const _state = readState();
  const _conn = state.connections.find(c => c.providerId === providerId);
  if (!conn) return res.status(400).json({_error: 'Provider not connected'});

  const _now = Date.now();
  writeState(s => {_s.logs.push({ id: `${now}-${_providerId}-resync`, timestamp: now, providerId: providerId as any, level: 'info', action: 'resync' });
    const _target = s.connections.find(c => c.providerId === providerId);
    if (target) target.lastSyncAt = now;
  });
  res.status(200).json({_ok: true});
}