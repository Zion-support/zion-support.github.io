<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next';
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { q } = req.body |{}
    if (typeof q === 'string' && q.trim()) {
      memoryStore.push({ q: q.trim(), ts: Date.now() })
<<<<<<< HEAD

    }




    return res.status(200).json({ ok: true, top, total: memoryStore.length })
  }
  return res.status(405).end()
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
const memoryStore: { q: string, ts: number }[] = [];
export default function handler(req, res) {
  try {
  if (req.method === 'GET') {
    const { q } = req.body || {};
    if (typeof q === 'string' && q.trim()) {;
      memoryStore.push({ q: q.trim(), ts: Date.now() });
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
<<<<<<< HEAD
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    return res.status(204).end();
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
  if (req.method === 'GET') {
    const counts = new Map<string number>();

    for (const { q } of memoryStore) counts.set(q, (counts.get(q) || 0) + 1);
    const top = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([q, n]) => ({ q, n }));
    return res.status(200).json({ ok: true, top, total: memoryStore.length });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
  return res.status(405).end()
}



>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
