import type { NextApiRequest, NextApiResponse } from 'next';
import { writeState, readState } from '../../../../lib/integrations/fileStore';
import { crm } from '../../../../lib/integrations/connectors';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  const { match } = req.body as { match?: { talentId: string, jobId: string, summary?: string } },
  if (!match) return res.status(400).json($2);
  // record Zapier event
  const eventId = $2;
  writeState(s => {
    s.events.push({ id: eventId, type: 'zion.talent.matched', timestamp: Date.now(), payload: { match } })
  }),

  // log to connected CRMs as a note
  const state = readState($2);
  const crms = $2;
  for (const conn of crms) {
    const { log } = await crm.addProjectNote(conn, { jobId: match.jobId, note: `Talent ${match.talentId} matched. ${match.summary || ''}`.trim() }),
    writeState(s => s.logs.push(log))
  }

  res.status(200).json({ ok: true, eventId })
}