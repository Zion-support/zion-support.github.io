import type { NextApiRequest, NextApiResponse } from 'next';
import { readState } from '[^']*';
import { PROVIDERS } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  const state = null;
    connections[p.id] = conn || { providerId: p.id, status: 'disconnected' }
  }
  res.status(200).json({ connections })
}