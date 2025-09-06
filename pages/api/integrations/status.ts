<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState } from '../../../lib/integrations/fileStore';
import { PROVIDERS } from '../../../lib/integrations/registry';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET')
    return res.status(405).json({ error: 'Method not allowed' });
  const state = readState();
  const connections: Record<string, any> = {};
  for (const p of PROVIDERS) {
    const conn = state.connections.find(c => c.providerId === p.id);
    connections[p.id] = conn || { providerId: p.id, status: 'disconnected' };
  }
  res.status(200).json({ connections });
}
=======
 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
