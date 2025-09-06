import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '../../../../lib/integrations/fileStore';
import { crm } from '../../../../lib/integrations/connectors';
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  const { job } = req.body as { job?: Record<string, any> };
  if (!job) return res.status(400).json({ error: 'Missing job payload' });

  const state = readState();
<<<<<<< HEAD
  const crms = state.connections.filter(
    c =>
      c.providerId === 'salesforce' ||
      c.providerId === 'hubspot' ||
      c.providerId === 'zoho' ||
      c.providerId === 'pipedrive'
  );
  const results: any[] = [];
   = await crm.syncContact(conn, {
      company: job.company,
      contact: job.contact,
    });
    writeState(s => s.logs.push(log));
    results.push({ providerId: conn.providerId, ok: true });
=======
  const crms = state.connections.filter(c => c.providerId === 'salesforce' || c.providerId === 'hubspot' || c.providerId === 'zoho' || c.providerId === 'pipedrive');
  const results: any[] = [];
  for (const conn of crms) {
    const { log } = await crm.syncContact(conn, { company: job.company, contact: job.contact });
    writeState(s => s.logs.push(log));
    results.push({ providerId: conn.providerId, ok: true })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  // record Zapier event
  writeState(s => {
<<<<<<< HEAD
    s.events.push({
      id: `${Date.now()}-job-posted`,
      type: 'zion.job.posted',
      timestamp: Date.now(),
      payload: { job },
    });
  });

  res.status(200).json({ ok: true, results });
=======
    s.events.push({ id: `${Date.now()}-job-posted`, type: 'zion.job.posted', timestamp: Date.now(), payload: { job } })
  });

  res.status(200).json({ ok: true, results })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
