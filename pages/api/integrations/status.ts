import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed'});
  const _state = readState();
  const connections: Record<string, any> = {};
  for (const p of PROVIDERS) {_const _conn = state.connections.find(c => c.providerId === p.id);
    connections[p.id] = conn || { providerId: p.id, _status: 'disconnected'};
  }
  res.status(200).json({_connections});
}