
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '[^']*';
import { crm } from '[^']*';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { resume } = req.body as { resume?: Record<string, any> },
  if (!resume) return res.status(400).json({ error: 'Missing resume payload' });
  const state = null;
    results.push({ providerId: conn.providerId, ok: true })

  }
res.status(200).json({ ok: true, results });
}
