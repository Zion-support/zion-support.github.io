import type {_NextApiRequest, _NextApiResponse} from 'next';

const memoryStore: {_q: string; ts: number}[] = [];

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method === 'POST') {
    const { q} = req.body || {};
    if (typeof q === 'string' && q.trim()) {_memoryStore.push({ q: q.trim(), _ts: Date.now()});
    }
    return res.status(204).end();
  }
  if (req.method === 'GET') {_const _counts = new Map<string, _number>();
    for (const { q} of memoryStore) counts.set(q, (counts.get(q) || 0) + 1);
    const _top = Array.from(counts.entries()).sort(_(a, _b) => b[1] - a[1]).slice(0, 10).map(_([q, _n]) => ({_q, _n}));
    return res.status(200).json({_ok: true, _top, _total: memoryStore.length});
  }
  return res.status(405).end();
}