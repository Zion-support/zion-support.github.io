import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_sessionId, _eventType, _payload} = req.body as {_sessionId: string; eventType: string; payload?: unknown};
  if (!sessionId || !eventType) return res.status(400).json({_error: 'sessionId and eventType required'});

  const _log = readJson<any[]>('support/sessions.json', []);
  const _entry = {_ts: Date.now(), _sessionId, _eventType, _payload};
  log.push(entry);
  writeJson('support/sessions.json', log);

  await logSupportEventToOperator({_type: eventType, _sessionId, _payload});

  return res.status(200).json({_ok: true});
}