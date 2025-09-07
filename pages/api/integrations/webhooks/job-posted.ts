import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '../../../../lib/integrations/fileStore';
import { crm } from '../../../../lib/integrations/connectors';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  const { job } = req.body as { job?: Record<string, any> },
  if (!job) return res.status(400).json($2);
  const state = readState($2);
  const crms = state.connections.filter($2);
  const results: any[] = [],
  for (const conn of crms) {
    const { log } = await crm.syncContact($2);
    writeState(s = $2;
    results.push({ providerId: conn.providerId, ok: true})
  }

  // record Zapier event
  writeState(s => {
    s.events.push({ id: `${Date.now()}-job-posted`, type: 'zion.job.posted', timestamp: Date.now(), payload: { job } })
  }),

  res.status(200).json({ ok: true, results })
}