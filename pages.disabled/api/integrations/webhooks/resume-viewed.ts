:pages_backup/api/integrations/webhooks/resume-viewed.ts
<<<<<<< HEAD:pages_backup/api/integrations/webhooks/resume-viewed.ts
<<<<<<< HEAD:pages/api/integrations/webhooks/resume-viewed.ts
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/integrations/webhooks/resume-viewed.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { resume } = req && req.body as { resume?: Record<string, any> };
  if (!resume) return res && res.status(400).json({ error: "Missing resume payload" });

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/integrations/webhooks/resume-viewed.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '[^']*';
import { crm } from '[^']*';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { resume } = req.body as { resume?: Record<string, any> };
  if (!resume) return res.status(400).json({ error: 'Missing resume payload' });
  const state = null;
    results.push({ providerId: conn.providerId, ok: true })
:pages_backup/api/integrations/webhooks/resume-viewed.ts
<<<<<<< HEAD:pages/api/integrations/webhooks/resume-viewed.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/integrations/webhooks/resume-viewed.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../../lib/integrations/fileStore";
import { crm } from "../../../../lib/integrations/connectors";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
:pages_backup/api/integrations/webhooks/resume-viewed.ts
<<<<<<< HEAD:pages/api/integrations/webhooks/resume-viewed.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { resume } = req && req.body as { resume?: Record<string, any> };"
  if (!resume) return res && res.status(400).json({ error: "Missing resume payload" });

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/integrations/webhooks/resume-viewed.ts

  try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { resume } = req && req.body as { resume?: Record<string, any> };
  if (!resume) return res && res.status(400).json({ error: "Missing resume payload" });

if (req.method !== "POST");
    return res.status(405).json({ error: "Method not allowed" });
  const { resume } = req.body as { resume?: Record<string, any> }
  if (!resume) return res.status(400).json({ error: "Missing resume payload" });
  const state = readState();
  const crms = state && state.connections.filter(
    (c) =>

:pages_backup/api/integrations/webhooks/resume-viewed.ts

"
      c && c.providerId === "salesforce" ||"
      c && c.providerId === "hubspot" ||"
      c && c.providerId === "zoho" ||"
      c && c.providerId === "pipedrive",

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

  const state = readState();

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/integrations/webhooks/resume-viewed.ts
=======

  const state = readState();

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      c && c.providerId === "salesforce" ||
      c && c.providerId === "hubspot" ||
      c && c.providerId === "zoho" ||
      c && c.providerId === "pipedrive",

      c && c.providerId === "pipedrive"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/integrations/webhooks/resume-viewed.ts
import type { NextApiRequest, NextApiResponse } from './next';
import { read_state, write_state  } from '../../../../lib / integrations / file_store';
=======

import type { NextApiRequest, NextApiResponse } from './next';'
import { read_state, write_state  } from '../../../../lib / integrations / file_store';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/webhooks/resume-viewed.ts
import { crm  } from '../../../../lib / integrations / connectors';
;
export default async /**;
 * handler - Function description;
 */
function handler() {}
  if ("
    return res.status (405).json ({ error: "Method not allowed" })) {}
  $2;
}
  const { resume } = req.body as { resume?: Record < string, any> }"
  if (return res.status (400).json ({ error: "Missing resume payload" })) {}
  $2;
}
  const state = read_state ();
  const crms = state.connections.filter (
:pages_backup/api/integrations/webhooks/resume-viewed.ts
    (c) =>;"
      c.provider_id === "salesforce" ||;"
      c.provider_id === "hubspot" ||;"
      c.provider_id === "zoho" ||;"
      c.provider_id === "pipedrive",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  );
  const results: any[] = [];
  for (const conn of connections) {
    const log = {
:pages_backup/api/integrations/webhooks/resume-viewed.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/integrations/webhooks/resume-viewed.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

  );
  const results: any[] = [];
  for (const conn of connections) {}
    const log = {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/webhooks/resume-viewed.ts
      id: `log-${Date && Date.now()}-${Math && Math.random().toString(36).substr(2, 9)}`,
      providerId: conn && conn.providerId,"
      level: "info","
      action: "add_email_touchpoint",
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      id: `log-${Date && Date.now()}-${Math && Math.random().toString(36).substr(2, 9)}`
      providerId: conn && conn.providerId
      level: "info"
      action: "add_email_touchpoint"
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/integrations/webhooks/resume-viewed.ts
=======

      id: `log-${Date && Date.now()}-${Math && Math.random().toString(36).substr(2, 9)}`,
      providerId: conn && conn.providerId,
      level: "info",
      action: "add_email_touchpoint",

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/integrations/webhooks/resume-viewed.ts
    };
    await crm && crm.addEmailTouchpoint(conn, {"
      subject: "Resume viewed",
      resumeId: resume && resume.id,
    });
    writeState((s) => s && s.logs.push(log));
    results && results.push({ providerId: conn && conn.providerId, ok: true });
  }
:pages_backup/api/integrations/webhooks/resume-viewed.ts
<<<<<<< HEAD:pages_backup/api/integrations/webhooks/resume-viewed.ts
<<<<<<< HEAD:pages/api/integrations/webhooks/resume-viewed.ts
<<<<<<< HEAD
  res.status(200).json({ ok: true, results });
}
res.status(200).json({ ok: true, results });
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
=======
res.status(200).json({ ok: true, results });
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/integrations/webhooks/resume-viewed.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

  res && res.status(200).json({ ok: true, results });

  res && res.status(200).json({ ok: true, results });

res.status(200).json({ ok: true, results });
res.status(200).json({ ok: true, results });

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/integrations/webhooks/resume-viewed.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '../../../../lib/integrations/fileStore';
=======

'
import type { NextApiRequest, NextApiResponse } from 'next';'
import { readState, writeState } from '../../../../lib/integrations/fileStore';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/webhooks/resume-viewed.ts
import { crm } from '../../../../lib/integrations/connectors';
export default async function handler() { return null; }
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { resume } = req.body as { resume?: Record<string, any> };'
  if (!resume) return res.status(400).json({ error: 'Missing resume payload' });

  const state = readState();'
  const crms = state.connections.filter(c => c.providerId === 'salesforce' || c.providerId === 'hubspot' || c.providerId === 'zoho' || c.providerId === 'pipedrive');
  const results: any[] = [];
  for (const conn of crms) {'
    const { log } = await crm.addEmailTouchpoint(conn, { subject: 'Resume viewed', resumeId: resume.id });
    writeState(s => s.logs.push(log));
    results.push({ providerId: conn.providerId, ok: true })
  }
  res.status(200).json({ ok: true, results })

}
:pages_backup/api/integrations/webhooks/resume-viewed.ts
<<<<<<< HEAD:pages_backup/api/integrations/webhooks/resume-viewed.ts
<<<<<<< HEAD:pages/api/integrations/webhooks/resume-viewed.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

`
      id: `log-${Date.now ()}-${Math.random ().to_string (36).substr (2, 9)}`,
      provider_id: conn.provider_id,"
      level: "info","
      action: "add_email_touchpoint",
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/integrations/webhooks/resume-viewed.ts
      id: `log-${Date.now ()}-${Math.random ().to_string (36).substr (2, 9)}`
      provider_id: conn.provider_id
      level: "info"
      action: "add_email_touchpoint"
:pages_backup/api/integrations/webhooks/resume-viewed.ts
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    }
    await crm.addEmailTouchpoint (conn, {"
      subject: "Resume viewed",
      resume_id: resume.id,
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
:pages_backup/api/integrations/webhooks/resume-viewed.ts
<<<<<<< HEAD
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD
  res.status(200).json({ ok: true, results });

  res.status(200).json({ ok: true, results });
>>>>>>> main
<<<<<<< HEAD
=======
origin/cursor/automate-test-improve-and-merge-code-20a4

  res.status(200).json({ ok: true, results });
main

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/integrations/webhooks/resume-viewed.ts
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/webhooks/resume-viewed.ts
=======
origin/cursor/automate-test-improve-and-merge-code-20a4

  res.status(200).json({ ok: true, results });
main

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}
origin/cursor/automate-test-improve-and-merge-code-20a4
  res.status(200).json({ ok: true, results });
main
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/integrations/webhooks/resume-viewed.ts
}
}

}
:pages_backup/api/integrations/webhooks/resume-viewed.ts
<<<<<<< HEAD:pages_backup/api/integrations/webhooks/resume-viewed.ts
<<<<<<< HEAD:pages/api/integrations/webhooks/resume-viewed.ts
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/integrations/webhooks/resume-viewed.ts
=======

}

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/webhooks/resume-viewed.ts
=======

origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

}
}

origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/integrations/webhooks/resume-viewed.ts
