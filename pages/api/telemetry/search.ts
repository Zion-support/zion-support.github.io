import type { NextApiRequest, NextApiResponse } from 'next';

const memoryStore: { q: string, ts: number }[] = [],

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { q } = req.body || {}
    if (typeof q === 'string' && q.trim()) {
      memoryStore.push({ q: q.trim(), ts: Date.now() })
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
    }
    return res.status(204).end()
  }
  if (req.method === 'GET') {
  }
  return res.status(405).end()
}