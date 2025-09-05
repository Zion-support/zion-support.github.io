import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method === 'GET') {
    const _requests = readJson<any[]>('support/requests.json', _[]);
    return res.status(200).json({ requests});
  }
  if (req.method === 'POST') {_const { sessionId, _reason, _tag} = req.body as {_sessionId: string; reason?: string; tag?: string};
    const _requests = readJson<any[]>('support/requests.json', []);
    const _id = `sr_${_Math.random().toString(36).slice(2)}_${_Date.now()}`;
    const _record = {_id, _sessionId, _reason: reason ?? 'User request', _tag: tag ?? 'manual', _status: 'open', _createdAt: Date.now()};
    requests.push(record);
    writeJson('support/requests.json', requests);
    return res.status(200).json({_ok: true, _id});
  }
  return res.status(405).json({_error: 'Method not allowed'});
}