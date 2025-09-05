<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { readState, writeState } from '../../../../lib/integrations/fileStore',
import { crm } from '../../../../lib/integrations/connectors',
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { job } = req.body as { job?: Record<string any> },
  if (!job) return res.status(400).json({ error: 'Missing job payload' }),

  const state = readState(),
  const crms = state.connections.filter(c => c.providerId === 'salesforce' || c.providerId === 'hubspot' || c.providerId === 'zoho' || c.providerId === 'pipedrive'),
  const results: any[] = [],
  for (const conn of crms) {
    const { log } = await crm.syncContact(conn, { company: job.company, contact: job.contact }),
    writeState(s => s.logs.push(log)),
    results.push({ providerId: conn.providerId, ok: true })
  }

  // record Zapier event
  writeState(s => {
    s.events.push({ id: `${Date.now()}-job-posted`, type: 'zion.job.posted', timestamp: Date.now(), payload: { job } })
  }),

  res.status(200).json({ ok: true, results })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_job} = req.body as {_job?: Record<string, _any>};
  if (!job) return res.status(400).json({_error: 'Missing job payload'});

  const _state = readState();
  const _crms = state.connections.filter(c => c.providerId === 'salesforce' || c.providerId === 'hubspot' || c.providerId === 'zoho' || c.providerId === 'pipedrive');
  const results: unknown[] = [];
  for (const conn of crms) {_const { log} = await crm.syncContact(conn, {_company: job.company, _contact: job.contact});
    writeState(s => s.logs.push(log));
    results.push({_providerId: conn.providerId, _ok: true});
  }

  // record Zapier event
  writeState(s => {_s.events.push({ id: `${Date.now()}-job-posted`, type: 'zion.job.posted', timestamp: Date.now(), payload: {_job} });
  });

  res.status(200).json({_ok: true, _results});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}