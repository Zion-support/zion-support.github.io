import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '../../../../lib/integrations/fileStore';
import { ats } from '../../../../lib/integrations/connectors';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  const { talent } = req.body as { talent?: Record<string, any> },
  if (!talent) return res.status(400).json($2);
  const state = readState($2);
  const atsProviders = state.connections.filter($2);
  const results: any[] = [],
  for (const conn of atsProviders) {
    const { log } = await ats.updateStatus($2);
    writeState(s = $2;
    results.push({ providerId: conn.providerId, ok: true})
  }
  res.status(200).json({ ok: true, results })
}