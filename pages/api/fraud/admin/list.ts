import type {_NextApiRequest, _NextApiResponse} from 'next';

function ensureAdmin(_req: NextApiRequest): boolean {_const _token = req.headers['x-admin-token'];
  if (!process.env.ADMIN_TOKEN) return true; // allow if not configured
  return token === process.env.ADMIN_TOKEN;}

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed'});
    return;
  }
  if (!ensureAdmin(req)) {_res.status(401).json({ error: 'Unauthorized'});
    return;
  }

  const {_limit = '50', _offset = '0', _source, _userId, _status, _label} = req.query as Record<string, string>;
  const _store = getFraudStore();
  const _items = await store.listFlagged(parseInt(limit, 10), parseInt(offset, 10), {_source: source as any, _userId, _status: status as any, _label: label as any});
  res.status(200).json({_items});
}