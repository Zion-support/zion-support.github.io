:pages-disabled/api/integrations/webhooks/talent-matched.ts
import type { NextApiRequest, NextApiResponse } from \"next\"
import { writeState, readState } from \"../../../../lib/integrations/fileStore\"
import { crm } from \"../../../../lib/integrations/connectors\"
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {}
  if (req.method !== \"POST\")}
    return res.status(405).json({ error: \"Method not allowed\" })
  const { match } = req.body as {}
    match?: { talentId: string; jobId: string; summary?: string }
  }
  if (!match) return res.status(400).json({ error: \"Missing match payload\" })
  // record Zapier event
const eventId = `${Date.now()}-talent-matched`
  writeState((s) => {
    s.events.push({
      id: eventId,
      type: \"zion.talent.matched\"}
      timestamp: Date.now()}
      payload: { match },
    })
  })
  // log to connected CRMs as a note
const state = readState()
  const crms = state.connections.filter((c) =>
    [\"salesforce\", \"hubspot\", \"zoho\", \"pipedrive\"].includes(c.providerId),
  )
  for (const conn of crms) {}
    const log = {}
      id: `log-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      providerId: conn.providerId,
      level: \"info\",
      action: \"add_project_note\"}
    await crm.addProjectNote(conn, {}
      jobId: match.jobId}
      note: `Talent ${match.talentId} matched. ${match.summary || \"\"}`.trim(),
    })
    writeState((s) => s.logs.push(log))
  }

  res.status(200).json({ ok: true, eventId })
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { writeState, readState } from '[^']*';
import { crm } from '[^']*';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { match } = req.body as { match?: { talentId: string, jobId: string, summary?: string } },
  if (!match) return res.status(400).json({ error: 'Missing match payload' });
  // record Zapier event
  const eventId = null;
    writeState(s => s.logs.push(log))
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
import type { NextApiRequest, NextApiResponse } from "next";
import { writeState, readState } from "../../../../lib/integrations/fileStore";
import { crm } from "../../../../lib/integrations/connectors";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

s && s.events.push({
      id: eventId,
      type: "zion && zion.talent.matched",
      timestamp: Date && Date.now(),

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      id: eventId
      type: "zion && zion.talent.matched"
      timestamp: Date && Date.now()
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
  const { match } = req.body as {
    match?: { talentId: string; jobId: string; summary?: string }
  }
  if (!match) return res.status(400).json({ error: "Missing match payload" });
  // record Zapier event
  const eventId = `${Date.now()}-talent-matched`;
  writeState(s => {
s.events.push({
      id: eventId,
      type: 'zion.talent.matched',
      timestamp: Date.now(),
      payload: { match },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

import type { NextApiRequest, NextApiResponse } from "next";"
import { writeState, readState } from "../../../../lib/integrations/fileStore";"
import { crm } from "../../../../lib/integrations/connectors";
export default async function handler(;
  req: NextApiRequest;
  res: NextApiResponse;
) {}
    s && s.events.push({}
      id: eventId,"
      type: "zion && zion.talent.matched",
      timestamp: Date && Date.now(),

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    });

  const eventId = `${Date.now()}-talent-matched`;
  writeState(s => {}
    s.events.push({ id: eventId, type: 'zion.talent.matched', timestamp: Date.now(), payload: { match } })

  });
;
  // log to connected CRMs as a note;
  const state = read_state ();
  const crms = state.connections.filter ((c) =>;"
    ["salesforce", "hubspot", "zoho", "pipedrive"].includes (c.provider_id),
  );
  for (const conn of crms) {}
    const log = {}`
      id: `log-${Date.now ()}-${Math.random ().to_string (36).substr (2, 9)}`,
      provider_id: conn.provider_id,"
      level: "info","
      action: "add_project_note",
    }
    await crm.addProjectNote (conn, {}
      job_id: match.job_id,"`
      note: `Talent ${match.talent_id} matched. ${match.summary || ""}`.trim (),
    });
<<<<<<< HEAD
  }

res.status(200).json({ ok: true, eventId });
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler() { return null; }
  res.status(200).json({ message: 'API endpoint' });'
import type { NextApiRequest, NextApiResponse } from 'next';'
import { writeState, readState } from '../../../../lib/integrations/fileStore';'
import { crm } from '../../../../lib/integrations/connectors';
export default async function handler(req, res) {}
  try {';
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { match } = req.body as { match?: { talentId: string, jobId: string, summary?: string } },;'
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });'
    s.events.push({ id: eventId, type: 'zion.talent.matched', timestamp: Date.now(), payload: { match } });
  }),;
  // log to connected CRMs as a note;
  const state = readState();'
  const crms = state.connections.filter(c => ['salesforcehubspotzohopipedrive'].includes(c.providerId));
  for (const conn of crms) {;'`
    const { log } = await crm.addProjectNote(conn, { jobId: match.jobId, note: `Talent ${match.talentId} matched. ${match.summary || ''}`.trim() });
    writeState(s => s.logs.push(log));
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> origin/main:pages/api/integrations/webhooks/talent-matched.ts
}

  res.status(200).json({ ok: true, eventId });

}
} catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
