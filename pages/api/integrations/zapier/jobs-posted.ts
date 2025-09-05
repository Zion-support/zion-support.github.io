import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed'});
  const {_since} = req.query as {_since?: string};
  const _state = readState();
  const _sinceTs = since ? Number(since) : 0;
  const _events = state.events.filter(e => e.type === 'zion.job.posted' && e.timestamp > sinceTs);
  res.status(200).json({_events});
}