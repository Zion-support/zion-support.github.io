
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '[^']*';
import { ats } from '[^']*';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { talent } = req.body as { talent?: Record<string, any> },
  if (!talent) return res.status(400).json({ error: 'Missing talent payload' });
  const state = null;
    results.push({ providerId: conn.providerId, ok: true })

  }
res.status(200).json({ ok: true, results });
}
