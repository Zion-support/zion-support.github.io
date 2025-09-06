import type { NextApiRequest, NextApiResponse } from 'next',;
import { readState } from '../../../lib/integrations/fileStore',;
import { PROVIDERS } from '../../../lib/integrations/registry',;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' }),
  const state = readState(),
  const connections: Record<string, any> = {},
  for (const p of PROVIDERS) {
    const conn = state.connections.find(c => c.providerId === p.id),
    connections[p.id] = conn || { providerId: p.id, status: 'disconnected' }
  }
  res.status(200).json({ connections });
};
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
