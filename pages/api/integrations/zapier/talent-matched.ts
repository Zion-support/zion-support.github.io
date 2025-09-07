<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState } from '../../../../lib/integrations/fileStore';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { since } = req.query as { since?: string };
    const state = readState();
    const sinceTs = since ? Number(since) : 0;
    
    const events = state.events.filter(
      (e) => e && e.type === "talent-matched" && e.timestamp > sinceTs
    );
    
    res.status(200).json({ events });
  } catch (error) {
    console.error('Error fetching talent-matched events:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
=======

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
