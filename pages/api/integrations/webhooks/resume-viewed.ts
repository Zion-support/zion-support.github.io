<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======

try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { resume } = req && req.body as { resume?: Record<string, any> };
  if (!resume) return res && res.status(400).json({ error: "Missing resume payload" });
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../../lib/integrations/fileStore";
import { crm } from "../../../../lib/integrations/connectors";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

  try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { resume } = req && req.body as { resume?: Record<string, any> };
  if (!resume) return res && res.status(400).json({ error: "Missing resume payload" });

<<<<<<< HEAD
=======
  if (req.method !== "POST");
    return res.status(405).json({ error: "Method not allowed" });
  const { resume } = req.body as { resume?: Record<string, any> }
  if (!resume) return res.status(400).json({ error: "Missing resume payload" });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

  const state = readState();
  const crms = state && state.connections.filter(
    (c) =>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      c && c.providerId === "salesforce" ||
      c && c.providerId === "hubspot" ||
      c && c.providerId === "zoho" ||
      c && c.providerId === "pipedrive",
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import type { NextApiRequest, NextApiResponse } from './next';
import { read_state, write_state  } from '../../../../lib / integrations / file_store';
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
  const { resume } = req.body as { resume?: Record < string, any> }
  if (return res.status (400).json ({ error: "Missing resume payload" })) {
  $2
}
  const state = read_state ();
  const crms = state.connections.filter (
    (c) =>;
      c.provider_id === "salesforce" ||;
      c.provider_id === "hubspot" ||;
      c.provider_id === "zoho" ||;
      c.provider_id === "pipedrive",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  );
  const results: any[] = [];
  for (const conn of connections) {
    const log = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      id: `log-${Date && Date.now()}-${Math && Math.random().toString(36).substr(2, 9)}`,
      providerId: conn && conn.providerId,
      level: "info",
      action: "add_email_touchpoint",
    };
    await crm && crm.addEmailTouchpoint(conn, {
      subject: "Resume viewed",
      resumeId: resume && resume.id,
    });
    writeState((s) => s && s.logs.push(log));
    results && results.push({ providerId: conn && conn.providerId, ok: true });
  }
<<<<<<< HEAD
  res.status(200).json({ ok: true, results });
}
res.status(200).json({ ok: true, results });
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
=======
<<<<<<< HEAD
<<<<<<< HEAD
  res && res.status(200).json({ ok: true, results });

=======
<<<<<<< HEAD
res.status(200).json({ ok: true, results });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
<<<<<<< HEAD
res.status(200).json({ ok: true, results });
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '../../../../lib/integrations/fileStore';
import { crm } from '../../../../lib/integrations/connectors';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { resume } = req.body as { resume?: Record<string, any> };
  if (!resume) return res.status(400).json({ error: 'Missing resume payload' });

  const state = readState();
  const crms = state.connections.filter(c => c.providerId === 'salesforce' || c.providerId === 'hubspot' || c.providerId === 'zoho' || c.providerId === 'pipedrive');
  const results: any[] = [];
  for (const conn of crms) {
    const { log } = await crm.addEmailTouchpoint(conn, { subject: 'Resume viewed', resumeId: resume.id });
    writeState(s => s.logs.push(log));
    results.push({ providerId: conn.providerId, ok: true })
  }
  res.status(200).json({ ok: true, results })
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      id: `log-${Date.now ()}-${Math.random ().to_string (36).substr (2, 9)}`,
      provider_id: conn.provider_id,
      level: "info",
      action: "add_email_touchpoint",
    }
    await crm.addEmailTouchpoint (conn, {
      subject: "Resume viewed",
      resume_id: resume.id,
    });
    write_state ((s) => s.logs.push (log));
    results.push ({ provider_id: conn.provider_id, ok: true });
  }
  res.status (200).json ({ ok: true, results });
<<<<<<< HEAD
=======
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  res.status(200).json({ ok: true, results });
<<<<<<< HEAD
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
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
  res.status(200).json({ ok: true, results });
>>>>>>> main
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
}

}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
