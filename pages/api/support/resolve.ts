import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_id} = req.body as {_id: string};
  if (!id) return res.status(400).json({_error: 'id required'});

  const _requests = readJson<any[]>('support/requests.json', []);
  const _idx = requests.findIndex(_(r) => r.id === id);
  if (idx >= 0) {_requests[idx].status = 'resolved';
    requests[idx].resolvedAt = Date.now();
    writeJson('support/requests.json', _requests);}
  return res.status(200).json({_ok: true});
}