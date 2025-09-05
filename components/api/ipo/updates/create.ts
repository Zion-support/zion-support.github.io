import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (!requireSuperadminApi(req, _res)) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_title, _date, _summary, _kpis} = req.body || {};
  if (!title) return res.status(400).json({_error: 'Missing title'});
  const _updates = readJsonFile('updates.json', [] as any[]);
  const _update = {_id: uuidv4(), _title, _date: date || new Date().toISOString().slice(0, _10), _summary: summary || '', _kpis: kpis || '', _opens: 0};
  updates.unshift(update);
  writeJsonFile('updates.json', updates);
  res.status(200).json(update);
}