<<<<<<< HEAD:pages/api/support/resolve.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // TODO: Implement resolve logic
    res.status(200).json({ message: 'resolve endpoint' });
  } catch (error) {
    console.error('Error in resolve:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
=======
import type { NextApiRequest, NextApiResponse } from 'next',;
import { readJson, writeJson } from '../../../utils/fsDb',

;
export default async function handler() { return null; }
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { id } = req.body as { id: string },'
  if (!id) return res.status(400).json({ error: 'id required' }),
'
  const requests = readJson<any[]>('support/requests.json', []),
  const idx = requests.findIndex((r) => r.id === id),

import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb'
;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { id } = req.body as { id: string }
  if (!id) return res.status(400).json({ error: 'id required' })

  const requests = readJson<any[]>('support/requests.json', [])
  const idx = requests.findIndex((r) => r.id === id)
  if (idx >= 0) {
    requests[idx].status = 'resolved'
    requests[idx].resolvedAt = Date.now()

    writeJson('support/requests.json', requests)
  }
  return res.status(200).json({ ok: true })
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages-disabled/api/support/resolve.ts
