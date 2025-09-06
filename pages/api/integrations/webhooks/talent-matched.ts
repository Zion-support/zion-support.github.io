import type { NextApiRequest, NextApiResponse } from 'next';
import { writeState, readState } from '../../../../lib/integrations/fileStore';
import { crm } from '../../../../lib/integrations/connectors';
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const { match } = req.body as {
    match?: { talentId: string; jobId: string; summary?: string };
  };
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { match } = req.body as { match?: { talentId: string, jobId: string, summary?: string } };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  if (!match) return res.status(400).json({ error: 'Missing match payload' });

  // record Zapier event
  const eventId = `${Date.now()}-talent-matched`;
  writeState(s => {
<<<<<<< HEAD
    s.events.push({
      id: eventId,
      type: 'zion.talent.matched',
      timestamp: Date.now(),
      payload: { match },
    });
=======
    s.events.push({ id: eventId, type: 'zion.talent.matched', timestamp: Date.now(), payload: { match } })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  });

  // log to connected CRMs as a note
  const state = readState();
<<<<<<< HEAD
  const crms = state.connections.filter(c =>
    ['salesforce', 'hubspot', 'zoho', 'pipedrive'].includes(c.providerId)
  );
   = await crm.addProjectNote(conn, {
      jobId: match.jobId,
      note: `Talent ${match.talentId} matched. ${match.summary || ''}`.trim(),
    });
    writeState(s => s.logs.push(log));
  }

  res.status(200).json({ ok: true, eventId });
=======
  const crms = state.connections.filter(c => ['salesforcehubspotzohopipedrive'].includes(c.providerId));
  for (const conn of crms) {
    const { log } = await crm.addProjectNote(conn, { jobId: match.jobId, note: `Talent ${match.talentId} matched. ${match.summary || ''}`.trim() });
    writeState(s => s.logs.push(log))
  }

  res.status(200).json({ ok: true, eventId })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
