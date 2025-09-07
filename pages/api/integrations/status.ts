<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState } from '../../../lib/integrations/fileStore';
import { getAllProviders } from '../../../lib/integrations/registry';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
=======
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a

  const state = readState();
  const providers = getAllProviders();
  const connections: Record<string, any> = {};
  
  for (const p of providers) {
    const conn = state.connections.find(c => c.providerId === p.id);
    connections[p.id] = conn || { providerId: p.id, status: 'disconnected' };
  }

  res.status(200).json({ connections });
}