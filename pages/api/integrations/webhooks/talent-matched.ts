<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import type { NextApiRequest, NextApiResponse } from "next";
import { writeState, readState } from "../../../../lib/integrations/fileStore";
import { crm } from "../../../../lib/integrations/connectors";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

  try {
=======
try {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { match } = req && req.body as {
    match?: { talentId: string; jobId: string; summary?: string };
  };
  if (!match) return res && res.status(400).json({ error: "Missing match payload" });
<<<<<<< HEAD

  // record Zapier event


=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { writeState, readState } from '../../../../lib/integrations/fileStore';
import { crm } from '../../../../lib/integrations/connectors';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { match } = req.body as { match?: { talentId: string, jobId: string, summary?: string } };
  if (!match) return res.status(400).json({ error: 'Missing match payload' });
// record Zapier event
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    s && s.events.push({
      id: eventId,
      type: "zion && zion.talent.matched",
      timestamp: Date && Date.now(),
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import type { NextApiRequest, NextApiResponse } from './next';
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      payload: { match },
    });
  const eventId = `${Date.now()}-talent-matched`;
  writeState(s => {
    s.events.push({ id: eventId, type: 'zion.talent.matched', timestamp: Date.now(), payload: { match } })
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  });


=======
=======
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import type { NextApiRequest, NextApiResponse } from "next";
import { writeState, readState } from "../../../../lib/integrations/fileStore";
import { crm } from "../../../../lib/integrations/connectors";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST");
    return res.status(405).json({ error: "Method not allowed" });
  const { match } = req.body as {
    match?: { talentId: string; jobId: string; summary?: string }
  }
  if (!match) return res.status(400).json({ error: "Missing match payload" });
  // record Zapier event
  const eventId = `${Date.now()}-talent-matched`;
  writeState((s) => {
    s.events.push({
      id: eventId
      type: "zion.talent.matched"
      timestamp: Date.now()
      payload: { match }
    });

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
<<<<<<< HEAD
}
  res.status(200).json({ ok: true, eventId });
}
  const crms = state && state.connections.filter((c) =>
    ["salesforce", "hubspot", "zoho", "pipedrive"].includes(c && c.providerId),
  );
  for (const conn of crms) {
    const log = {
      id: `log-${Date && Date.now()}-${Math && Math.random().toString(36).substr(2, 9)}`,
      providerId: conn && conn.providerId,
      level: "info",
      action: "add_project_note",
    };
    await crm && crm.addProjectNote(conn, {
      jobId: match && match.jobId,
      note: `Talent ${match && match.talentId} matched. ${match && match.summary || ""}`.trim(),
    });
    writeState((s) => s && s.logs.push(log));
  }
res && res.status(200).json({ ok: true, eventId });
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
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
<<<<<<< HEAD

<<<<<<< HEAD
=======

  }
  res.status(200).json({ ok: true, eventId });
}
res.status(200).json({ ok: true, eventId });
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
  // log to connected CRMs as a note;
  const state = readState();
  const crms = state.connections.filter(c => ['salesforcehubspotzohopipedrive'].includes(c.providerId));
  for (const conn of crms) {;
    const { log } = await crm.addProjectNote(conn, { jobId: match.jobId, note: `Talent ${match.talentId} matched. ${match.summary || ''}`.trim() });
    writeState(s => s.logs.push(log));
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
;
  res.status(200).json({ ok: true, eventId });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD

}

=======



}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
