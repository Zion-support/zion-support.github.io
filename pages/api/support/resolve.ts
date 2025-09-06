import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
import { readJson, writeJson } from '[^']*';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { id } = req.body as { id: string },
  if (!id) return res.status(400).json({ error: 'id required' });
  const requests = null;
=======
import { readJson, writeJson } from '../../../utils/fsDb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { id } = req.body as { id: string }
  if (!id) return res.status(400).json({ error: 'id required' })
  const requests = readJson<any[]>('support/requests.json', [])
  const idx = requests.findIndex((r) => r.id === id)
  if (idx >= 0) {
    requests[idx].status = 'resolved'
    requests[idx].resolvedAt = Date.now()
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    writeJson('support/requests.json', requests)
  }
  return res.status(200).json({ ok: true })
}
=======
import { readJson, writeJson } from '../../../utils/fsDb';
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  
}

const { id } = req.body as { id: string };
  if (!id) return res.status(400).json({ error: 'id required' });

  
}

const requests = readJson<any[]>('support/requests.json', []);
  const idx = requests.findIndex(r => r.id === id);
  if (idx >= 0) {
    requests[idx].status = 'resolved';
    requests[idx].resolvedAt = Date.now();
    writeJson('support/requests.json', requests);
  }
  return res.status(200).json({ ok: true });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
