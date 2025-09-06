import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

const memoryStore: { q: string; ts: number }[] = [];
=======
const memoryStore: { q: string; ts: number }[] = [],
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { q } = req.body || {},
    if (typeof q === 'string' && q.trim()) {
<<<<<<< HEAD
      memoryStore.push({ q: q.trim(), ts: Date.now() });
    }
    return res.status(204).end();  }
  if (req.method === 'GET') {
    const counts = new Map<string, number>();
    for (const { q } of memoryStore) counts.set(q, (counts.get(q) || 0) + 1);
    const top = Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([q, n]) => ({ q, n }));
    return res.status(200).json({ ok: true, top, total: memoryStore.length });
  }
  return res.status(405).end();
=======
      memoryStore.push({ q: q.trim(), ts: Date.now() })
    }
    return res.status(204).end()
  }
  if (req.method === 'GET') {
    const counts = new Map<string, number>();
    for (const { q } of memoryStore) counts.set(q, (counts.get(q) || 0) + 1);
    const top = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([q, n]) => ({ q, n }));
    return res.status(200).json({ ok: true, top, total: memoryStore.length })
  }
  return res.status(405).end()
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
