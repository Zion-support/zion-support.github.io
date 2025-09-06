import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '../../../../lib/integrations/fileStore';
import { crm } from '../../../../lib/integrations/connectors';
export default async function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({,
    error: 'Method not allowed' });
  const { job } = req.body as { job?: Record<string, any> };
  if (!job) return res.status(400).json({,
    error: 'Missing job payload' });
  const state = readState();
  const crms = state.connections.filter(c => c.providerId === 'salesforce' || c.providerId === 'hubspot' || c.providerId === 'zoho' || c.providerId === 'pipedrive');
  const,
    results: any[] = [];
  for (const conn of crms) {
    const { log } = await crm.syncContact(conn, {,
    company: job.company, c,
    ontact: job.contact });
    writeState(s => s.logs.push(log));
    results.push({,
    providerId: conn.providerId, o,
    k: true })
  }

  // record Zapier event
  writeState(s => {
    s.events.push({,
    id: `${Date.now()}-job-posted`, t,
    ype: 'zion.job.posted', t,
    imestamp: Date.now(), p,
    ayload: { job } })
  });
  res.status(200).json({,
    ok: true, results })
}