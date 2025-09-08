import type { NextApiRequest, NextApiResponse } from 'next';
import { writeState, readState } from '../../../../lib/integrations/fileStore';
import { crm } from '../../../../lib/integrations/connectors';
export default async function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({,
    error: 'Method not allowed' });
  const { match } = req.body as { match?: {,
    talentId: string, j,
    obId: string, summary?: string } };
  if (!match) return res.status(400).json({,
    error: 'Missing match payload' });
  // record Zapier event
  const eventId = `${Date.now()}-talent-matched`;
  writeState(s => {
    s.events.push({,
    id: eventId, t,
    ype: 'zion.talent.matched', t,
    imestamp: Date.now(), p,
    ayload: { match } })
  });
  // log to connected CRMs as a note
  const state = readState();
  const crms = state.connections.filter(c => ['salesforcehubspotzohopipedrive'].includes(c.providerId));
  for (const conn of crms) {
    const { log } = await crm.addProjectNote(conn, {,
    jobId: match.jobId, n,
    ote: `Talent ${match.talentId} matched. ${match.summary || ''}`.trim() });
    writeState(s => s.logs.push(log))
  }

  res.status(200).json({,
    ok: true, eventId })
}