import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed'});
  const {_providerId} = req.query as {_providerId?: string};
  const _state = readState();
  const _logs = providerId ? state.logs.filter(l => l.providerId === providerId) : state.logs;
  res.status(200).json({_logs});
}