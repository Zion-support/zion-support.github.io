
import type { NextApiRequest, NextApiResponse } from 'next';


const memoryStore: { q: string, ts: number }[] = [],

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method;
    return res.status(200).json({ ok: true, top, total: memoryStore.length })
  }
  return res.status(405).end()
};
=======
import { NextApiRequest, NextApiResponse } from 'next';

const memoryStore: Array<{ q: string; ts: number }> = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { q } = req.body || {};
    if (typeof q === 'string' && q.trim()) {
      memoryStore.push({ q: q.trim(), ts: Date.now() });
    }
    return res.status(204).end();
  }

  if (req.method === 'GET') {
    const { limit = '10' } = req.query;
    const limited = memoryStore
      .sort((a, b) => b.ts - a.ts)
      .slice(0, parseInt(limit as string));
    return res.status(200).json({ searches: limited });
  }

  res.setHeader('Allow', 'GET, POST');
  return res.status(405).end('Method Not Allowed');
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-10dd
