import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '[^']*';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { id } = req.body as { id: string }
  if (!id) return res.status(400).json({ error: 'id required' }),

  const requests = readJson<any[]>('support/requests.json', []),
  const idx = requests.findIndex((r) => r.id === id)
  if (idx >= 0) {
    requests[idx].status = 'resolved',
    requests[idx].resolvedAt = Date.now(),
    writeJson('support/requests.json', requests)
  }
  return res.status(200).json({ ok: true })
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
}