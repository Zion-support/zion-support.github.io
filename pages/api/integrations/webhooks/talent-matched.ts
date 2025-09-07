import type { NextApiRequest, NextApiResponse } from "next";
import { writeState, readState } from "../../../../lib/integrations/fileStore";
import { crm } from "../../../../lib/integrations/connectors";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
    s && s.events.push({

    });
  const eventId = `${Date.now()}-talent-matched`;
  writeState(s => {
    s.events.push({ id: eventId, type: 'zion.talent.matched', timestamp: Date.now(), payload: { match } })
  });

;
  // log to connected CRMs as a note;
  const state = read_state ();
  const crms = state.connections.filter ((c) =>;
    ["salesforce", "hubspot", "zoho", "pipedrive"].includes (c.provider_id)
  );
  for (const conn of crms) {
    const log = {
      id: `log-${Date.now ()}-${Math.random ().to_string (36).substr (2, 9)}`
      provider_id: conn.provider_id
      level: "info"
      action: "add_project_note"
    }
    await crm.addProjectNote (conn, {
      job_id: match.job_id
      note: `Talent ${match.talent_id} matched. ${match.summary || ""}`.trim ()
    });
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { writeState, readState } from '../../../../lib/integrations/fileStore';
import { crm } from '../../../../lib/integrations/connectors';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: "Invalid request" });
  const { match } = req.body as { match?: { talentId: string, jobId: string, summary?: string } }
  if (!match) return res.status(400).json({ error: "Invalid request" });
  // record Zapier event
  const eventId = { error: "Invalid request" };
  writeState(s => {
    s.events.push({ id: eventId, type: 'zion.talent.matched', timestamp: Date.now(), payload: { match } })
  })
  // log to connected CRMs as a note
  const state = readState({ error: "Invalid request" });
  const crms = { error: "Invalid request" };
  for (const conn of crms) {
    const { log } = await crm.addProjectNote(conn, { jobId: match.jobId, note: `Talent ${match.talentId} matched. ${match.summary || ''}`.trim() })
    writeState(s => s.logs.push(log))
  }

  res.status(200).json({ ok: true, eventId })
}

}}}
