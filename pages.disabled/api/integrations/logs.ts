

import type { NextApiRequest, NextApiResponse } from 'next';
import { readState } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  const { providerId } = req.query as { providerId?: string },
  const state = null;
  res.status(200).json({ logs })
}

