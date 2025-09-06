<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD
=======
<<<<<<< HEAD
const memoryStore: { q: string, ts: number }[] = []
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
const memoryStore: { q: string, ts: number }[] = [];

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { q } = req.body |{}
    if (typeof q === 'string' && q.trim()) {
      memoryStore.push({ q: q.trim(), ts: Date.now() })
=======
import type { NextApiRequest, NextApiResponse } from 'next',
;
const memory_store: { q: string, ts: number }[] = [],
export default /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    const { q } = req.body || {},
    if () {) {
  $2
}
      memory_store.push ({ q: q.trim (), ts: Date.now () });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    }
<<<<<<< HEAD
    return res.status(204).end()
=======
    return res.status (204).end ();
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }
<<<<<<< HEAD
  if (req.method === 'GET') {
<<<<<<< HEAD
    const counts = new Map<string, number>()
    for (const { q } of memoryStore) counts.set(q, (counts.get(q) |0) + 1)
    const top = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([q, n]) => ({ q, n }))

    return res.status(200).json({ ok: true, top, total: memoryStore.length })
  }
  return res.status(405).end()
}
=======
    const counts = new Map<string, number>();
    for (const { q } of memoryStore) counts.set(q, (counts.get(q) || 0) + 1);
    const top = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([q, n]) => ({ q, n }));
    return res.status(200).json({ ok: true, top, total: memoryStore.length })
  }
  return res.status(405).end()
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  // Check condition
if ( {) {
  $2
}
    const counts = new Map < string, number>(),
    for (const { q } of memory_store) counts.set (q, (counts.get (q) || 0) + 1),
    const top = Array.from (counts.entries ()).sort ((a, b) => b[1] - a[1]).slice (0, 10).map (([q, n]) => ({ q, n })),
    return res.status (200).json ({ ok: true, top, total: memory_store.length });
  }
  return res.status (405).end ();
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
