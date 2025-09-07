<<<<<<< HEAD

try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { resume } = req && req.body as { resume?: Record<string, any> };
  if (!resume) return res && res.status(400).json({ error: "Missing resume payload" });

=======


<<<<<<< HEAD:pages.disabled/api-disabled/api/integrations/webhooks/resume-viewed.ts




try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { resume } = req && req.body as { resume?: Record<string, any> };
  if (!resume) return res && res.status(400).json({ error: "Missing resume payload" });


import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '[^']*';
import { crm } from '[^']*';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { resume } = req.body as { resume?: Record<string, any> };
  if (!resume) return res.status(400).json({ error: 'Missing resume payload' });
  const state = null;
    results.push({ providerId: conn.providerId, ok: true })
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/integrations/webhooks/resume-viewed.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../../lib/integrations/fileStore";
import { crm } from "../../../../lib/integrations/connectors";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  if (req.method !== "POST");
    return res.status(405).json({ error: "Method not allowed" });
  const { resume } = req.body as { resume?: Record<string, any> }
  if (!resume) return res.status(400).json({ error: "Missing resume payload" });
=======



  try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { resume } = req && req.body as { resume?: Record<string, any> };
  if (!resume) return res && res.status(400).json({ error: "Missing resume payload" });

<<<<<<< HEAD:pages.disabled/api-disabled/api/integrations/webhooks/resume-viewed.ts
if (req.method !== "POST");
    return res.status(405).json({ error: "Method not allowed" });
  const { resume } = req.body as { resume?: Record<string, any> }
  if (!resume) return res.status(400).json({ error: "Missing resume payload" });
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/integrations/webhooks/resume-viewed.ts
  const state = readState();
  const crms = state && state.connections.filter(
    (c) =>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      c && c.providerId === "salesforce" ||
      c && c.providerId === "hubspot" ||
      c && c.providerId === "zoho" ||
      c && c.providerId === "pipedrive",
<<<<<<< HEAD
=======

<<<<<<< HEAD:pages.disabled/api-disabled/api/integrations/webhooks/resume-viewed.ts

      c && c.providerId === "pipedrive"
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/integrations/webhooks/resume-viewed.ts
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
<<<<<<< HEAD:pages.disabled/api-disabled/api/integrations/webhooks/resume-viewed.ts
c.provider_id === "pipedrive",
=======
      c.provider_id === "pipedrive",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/integrations/webhooks/resume-viewed.ts
  );
  const results: any[] = [];
  for (const conn of connections) {
    const log = {
<<<<<<< HEAD
=======

<<<<<<< HEAD:pages.disabled/api-disabled/api/integrations/webhooks/resume-viewed.ts

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/integrations/webhooks/resume-viewed.ts
      id: `log-${Date && Date.now()}-${Math && Math.random().toString(36).substr(2, 9)}`,
      providerId: conn && conn.providerId,
      level: "info",
      action: "add_email_touchpoint",

    };
    await crm && crm.addEmailTouchpoint(conn, {
      subject: "Resume viewed"
      resumeId: resume && resume.id
    });
    writeState((s) => s && s.logs.push(log));
    results && results.push({ providerId: conn && conn.providerId, ok: true });
  }
<<<<<<< HEAD:pages.disabled/api-disabled/api/integrations/webhooks/resume-viewed.ts


  res && res.status(200).json({ ok: true, results });



  res && res.status(200).json({ ok: true, results });

res.status(200).json({ ok: true, results });
res.status(200).json({ ok: true, results });

=======
<<<<<<< HEAD
  res.status(200).json({ ok: true, results });
}
res.status(200).json({ ok: true, results });
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
  res && res.status(200).json({ ok: true, results });

res && res.status(200).json({ ok: true, results });
}
=======
  res && res.status(200).json({ ok: true, results });

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/integrations/webhooks/resume-viewed.ts
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
}
<<<<<<< HEAD
=======

<<<<<<< HEAD:pages.disabled/api-disabled/api/integrations/webhooks/resume-viewed.ts
      id: `log-${Date.now ()}-${Math.random ().to_string (36).substr (2, 9)}`
      provider_id: conn.provider_id
      level: "info"
      action: "add_email_touchpoint"




=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/integrations/webhooks/resume-viewed.ts
      id: `log-${Date.now ()}-${Math.random ().to_string (36).substr (2, 9)}`,
      provider_id: conn.provider_id,
      level: "info",
      action: "add_email_touchpoint",

    }
    await crm.addEmailTouchpoint (conn, {
      subject: "Resume viewed"
      resume_id: resume.id
    });
    write_state ((s) => s.logs.push (log));
    results.push ({ provider_id: conn.provider_id, ok: true });
const crms = state.connections.filter(
    c =>
      c.providerId === 'salesforce' ||
      c.providerId === 'hubspot' ||
      c.providerId === 'zoho' ||
      c.providerId === 'pipedrive'
  );
  const results: any[] = [];
  const result = await crm.addEmailTouchpoint(conn, {
      subject: 'Resume viewed';
      resumeId: resume.id;
    });
    writeState((s) => s.logs.push(log));
    results.push({ providerId: conn.providerId, ok: true });
origin/cursor/automate-test-improve-and-merge-code-2533
  }
  res.status (200).json ({ ok: true, results });
<<<<<<< HEAD:pages.disabled/api-disabled/api/integrations/webhooks/resume-viewed.ts

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/integrations/webhooks/resume-viewed.ts
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  res.status(200).json({ ok: true, results });
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


}
<<<<<<< HEAD:pages.disabled/api-disabled/api/integrations/webhooks/resume-viewed.ts
  res.status(200).json({ ok: true, results });
}

}
origin/cursor/automate-test-improve-and-merge-code-20a4
  res.status(200).json({ ok: true, results });
main
}
}



}


}
}

origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
}

}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/integrations/webhooks/resume-viewed.ts
