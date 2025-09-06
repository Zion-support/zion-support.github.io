import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '../../../../lib/integrations/fileStore';
import { crm } from '../../../../lib/integrations/connectors';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  const { resume } = req.body as { resume?: Record<string, any> },
  if (!resume) return res.status(400).json($2);
  const state = readState($2);
  const crms = state.connections.filter($2);
  const results: any[] = [],
  for (const conn of crms) {
    const { log } = await crm.addEmailTouchpoint($2);
    writeState(s = $2;
    results.push({ providerId: conn.providerId, ok: true})
  }
  res.status(200).json({ ok: true, results })
}