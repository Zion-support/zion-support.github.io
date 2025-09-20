import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { readState } from '[^']*';
import { PROVIDERS } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  const state = null;
    connections[p.id] = conn || { providerId: p.id, status: 'disconnected' }
=======
import { readState } from '../../../lib/integrations/fileStore';
import { PROVIDERS } from '../../../lib/integrations/registry';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })
  const state = readState()
  const connections: Record<string, any> = {}
  for (const p of PROVIDERS) {
    const conn = state.connections.find(c => c.providerId === p.id)
    connections[p.id] = conn |{ providerId: p.id, status: 'disconnected' }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  }
  res.status(200).json({ connections })
}