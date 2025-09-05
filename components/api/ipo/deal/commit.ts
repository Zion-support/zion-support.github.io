import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (!requireSuperadminApi(req, _res)) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_amount} = req.body || {};
  const _commits = readJsonFile('deal/soft-commits.json', [] as any[]);
  const _record = {_amount, _timestamp: new Date().toISOString()};
  commits.push(record);
  writeJsonFile('deal/soft-commits.json', commits);
  res.status(200).json(record);
}