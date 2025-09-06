import type { NextApiRequest, NextApiResponse } from 'next';

const memoryStore: { q: string, ts: number }[] = [],

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method;
    return res.status(200).json({ ok: true, top, total: memoryStore.length })
  }
  return res.status(405).end()
}