import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD
<<<<<<< HEAD
const memoryStore: { q: string; ts: number }[] = [];
=======
const memoryStore: { q: string, ts: number }[] = [];
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
const memoryStore: { q: string, ts: number }[] = [];
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { q } = req.body || {};
    if (typeof q === 'string' && q.trim()) {
<<<<<<< HEAD
<<<<<<< HEAD
      memoryStore.push({ q: q.trim(), ts: Date.now() });
    }
    return res.status(204).end();
=======
      memoryStore.push({ q: q.trim(), ts: Date.now() })
    }
    return res.status(204).end()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      memoryStore.push({ q: q.trim(), ts: Date.now() })
    }
    return res.status(204).end()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
  if (req.method === 'GET') {
    const counts = new Map<string, number>();
    for (const { q } of memoryStore) counts.set(q, (counts.get(q) || 0) + 1);
<<<<<<< HEAD
<<<<<<< HEAD
    const top = Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([q, n]) => ({ q, n }));
    return res.status(200).json({ ok: true, top, total: memoryStore.length });
  }
  return res.status(405).end();
=======
    const top = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([q, n]) => ({ q, n }));
    return res.status(200).json({ ok: true, top, total: memoryStore.length })
  }
  return res.status(405).end()
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    const top = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([q, n]) => ({ q, n }));
    return res.status(200).json({ ok: true, top, total: memoryStore.length })
  }
  return res.status(405).end()
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
