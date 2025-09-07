<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState } from '../../../lib/integrations/fileStore';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { providerId } = req.query as { providerId?: string };
  const state = readState();
  
  const logs = providerId
    ? state.logs.filter((l) => l.providerId === providerId)
    : state.logs;
    
  res.status(200).json({ logs });
}
=======

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
