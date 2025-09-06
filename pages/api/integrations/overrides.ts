import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '[^']*';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method;
    return res.status(200).json({ ok: true, override: updated.overrides.find(o => o.jobId === jobId) })
  }
  return res.status(405).json({ error: 'Method not allowed' })
}