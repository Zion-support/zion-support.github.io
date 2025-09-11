>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

import type { NextApiRequest, NextApiResponse } from "next";
import { writeState, readState } from "../../../../lib/integrations/fileStore";
import { crm } from "../../../../lib/integrations/connectors";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

  try {
  // record Zapier event


=======import type { NextApiRequest, NextApiResponse } from './next';
import { write_state, read_state  } from '../../../../lib / integrations / file_store';
import { crm  } from '../../../../lib / integrations / connectors';
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: "Method not allowed" })) {
  $2
}
  const { match } = req.body as {
    match?: { talent_id: string; job_id: string; summary?: string }
  }
  if (return res.status (400).json ({ error: "Missing match payload" })) {
  $2
}
  // record Zapier event;
  const event_id = `${Date.now ()}-talent - matched`;
  write_state ((s) => {
    s.events.push ({
      id: event_id,
      type: "zion.talent.matched",
      timestamp: Date.now (),
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      payload: { match },
    });
  const eventId = `${Date.now()}-talent-matched`;
  writeState(s => {
    s.events.push({ id: eventId, type: 'zion.talent.matched', timestamp: Date.now(), payload: { match } })
  });
  const crms = state.connections.filter(c => ['salesforcehubspotzohopipedrive'].includes(c.providerId));
  for (const conn of crms) {
    const log = {
      id: `log-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
      providerId: conn.providerId
      level: "info"
      action: "add_project_note"
    }
    await crm.addProjectNote(conn, {
      jobId: match.jobId
      note: `Talent ${match.talentId} matched. ${match.summary |""}`.trim()
    });
    writeState((s) => s.logs.push(log));

  }
  res.status(200).json({ ok: true, eventId });
}
res.status(200).json({ ok: true, eventId });
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { writeState, readState } from '../../../../lib/integrations/fileStore';
import { crm } from '../../../../lib/integrations/connectors';
export default async function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { match } = req.body as { match?: { talentId: string, jobId: string, summary?: string } },;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    s.events.push({ id: eventId, type: 'zion.talent.matched', timestamp: Date.now(), payload: { match } });
  }),;
=======>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

      payload: { match },    });
=======
  const eventId = `${Date.now()}-talent-matched`;
  writeState(s => {
    s.events.push({ id: eventId, type: 'zion.talent.matched', timestamp: Date.now(), payload: { match } })
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  });


=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  // log to connected CRMs as a note;
  const state = read_state ();
  const crms = state.connections.filter ((c) =>;
    ["salesforce", "hubspot", "zoho", "pipedrive"].includes (c.provider_id),
  );
  for (const conn of crms) {
    const log = {
      id: `log-${Date.now ()}-${Math.random ().to_string (36).substr (2, 9)}`,
      provider_id: conn.provider_id,
      level: "info",
      action: "add_project_note",
    }
    await crm.addProjectNote (conn, {
      job_id: match.job_id,
      note: `Talent ${match.talent_id} matched. ${match.summary || ""}`.trim (),
    });
    write_state ((s) => s.logs.push (log));
  }
  res.status (200).json ({ ok: true, event_id });
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }



}
}
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
