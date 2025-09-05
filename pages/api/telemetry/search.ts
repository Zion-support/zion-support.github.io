<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',

const memoryStore: { q: string, ts: number }[] = [],

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { q } = req.body || {},
    if (typeof q === 'string' && q.trim()) {
      memoryStore.push({ q: q.trim(), ts: Date.now() })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

const memoryStore: {_q: string; ts: number}[] = [];

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method === 'POST') {
    const { q} = req.body || {};
    if (typeof q === 'string' && q.trim()) {_memoryStore.push({ q: q.trim(), _ts: Date.now()});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
    return res.status(204).end()
  }
<<<<<<< HEAD
  if (req.method === 'GET') {
    const counts = new Map<string number>(),
    for (const { q } of memoryStore) counts.set(q, (counts.get(q) || 0) + 1),
    const top = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([q, n]) => ({ q, n })),
    return res.status(200).json({ ok: true, top, total: memoryStore.length })
=======
  if (req.method === 'GET') {_const _counts = new Map<string, _number>();
    for (const { q} of memoryStore) counts.set(q, (counts.get(q) || 0) + 1);
    const _top = Array.from(counts.entries()).sort(_(a, _b) => b[1] - a[1]).slice(0, 10).map(_([q, _n]) => ({_q, _n}));
    return res.status(200).json({_ok: true, _top, _total: memoryStore.length});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
  return res.status(405).end()
}