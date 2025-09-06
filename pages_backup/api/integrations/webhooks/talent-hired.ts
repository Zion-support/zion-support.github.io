<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/integrations/webhooks/talent-hired.ts
<<<<<<< HEAD:pages/api/integrations/webhooks/talent-hired.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======

try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { talent } = req && req.body as { talent?: Record<string, any> };
  if (!talent) return res && res.status(400).json({ error: "Missing talent payload" });
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/integrations/webhooks/talent-hired.ts
=======



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '[^']*';
import { ats } from '[^']*';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { talent } = req.body as { talent?: Record<string, any> },
  if (!talent) return res.status(400).json({ error: 'Missing talent payload' });
  const state = null;
    results.push({ providerId: conn.providerId, ok: true })
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/integrations/webhooks/talent-hired.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/integrations/webhooks/talent-hired.ts
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../../lib/integrations/fileStore";
import { ats } from "../../../../lib/integrations/connectors";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/integrations/webhooks/talent-hired.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

  try {
  if (req && req.method !== "POST")
=======








import type { NextApiRequest, NextApiResponse } from "next";"
import { readState, writeState } from "../../../../lib/integrations/fileStore";"
import { ats } from "../../../../lib/integrations/connectors";
export default async function handler(;
  req: NextApiRequest;
  res: NextApiResponse;
) {}
  try {"
  if (req && req.method !== "POST")"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/webhooks/talent-hired.ts
    return res && res.status(405).json({ error: "Method not allowed" });
  const { talent } = req && req.body as { talent?: Record<string, any> };"
  if (!talent) return res && res.status(400).json({ error: "Missing talent payload" });





  const state = readState();
<<<<<<< HEAD
  const atsProviders = state && state.connections.filter(
    (c) =>



"
      c && c.providerId === "greenhouse" ||"
      c && c.providerId === "lever" ||"
      c && c.providerId === "workable" ||"
      c && c.providerId === "bamboohr",

<<<<<<< HEAD:pages_backup/api/integrations/webhooks/talent-hired.ts
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
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

  const state = readState();


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/integrations/webhooks/talent-hired.ts
=======

  const state = readState();


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import type { NextApiRequest, NextApiResponse } from './next';
import { read_state, write_state  } from '../../../../lib / integrations / file_store';
=======






import type { NextApiRequest, NextApiResponse } from './next';'
import { read_state, write_state  } from '../../../../lib / integrations / file_store';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/webhooks/talent-hired.ts
import { ats  } from '../../../../lib / integrations / connectors';
;
export default async /**;
 * handler - Function description;
 */
function handler() {}
  if ("
    return res.status (405).json ({ error: "Method not allowed" })) {}
  $2;
}
  const { talent } = req.body as { talent?: Record < string, any> }"
  if (return res.status (400).json ({ error: "Missing talent payload" })) {}
  $2;
}
  const state = read_state ();
  const ats_providers = state.connections.filter (
    (c) =>;"
      c.provider_id === "greenhouse" ||;"
      c.provider_id === "lever" ||;"
      c.provider_id === "workable" ||;"
      c.provider_id === "bamboohr",
<<<<<<< HEAD:pages_backup/api/integrations/webhooks/talent-hired.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  );
  const results: any[] = [];
  for (const conn of connections) {
    const log = {
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/integrations/webhooks/talent-hired.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

  );
  const results: any[] = [];
  for (const conn of connections) {}
    const log = {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/webhooks/talent-hired.ts
      id: `log-${Date && Date.now()}-${Math && Math.random().toString(36).substr(2, 9)}`,
      providerId: conn && conn.providerId,"
      level: "info","
      action: "update_status",
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      id: `log-${Date && Date.now()}-${Math && Math.random().toString(36).substr(2, 9)}`
      providerId: conn && conn.providerId
      level: "info"
      action: "update_status"
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/integrations/webhooks/talent-hired.ts
    };
    await ats && ats.updateStatus(conn, {}
      applicantId: talent && talent.id,"
      status: "hired",
    });
    writeState((s) => s && s.logs.push(log));
    results && results.push({ providerId: conn && conn.providerId, ok: true });
  }
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/integrations/webhooks/talent-hired.ts
<<<<<<< HEAD:pages/api/integrations/webhooks/talent-hired.ts
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
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/integrations/webhooks/talent-hired.ts
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '../../../../lib/integrations/fileStore';
=======





'
import type { NextApiRequest, NextApiResponse } from 'next';'
import { readState, writeState } from '../../../../lib/integrations/fileStore';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/webhooks/talent-hired.ts
import { ats } from '../../../../lib/integrations/connectors';
export default async function handler() { return null; }
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { talent } = req.body as { talent?: Record<string, any> };'
  if (!talent) return res.status(400).json({ error: 'Missing talent payload' });

  const state = readState();'
  const atsProviders = state.connections.filter(c => c.providerId === 'greenhouse' || c.providerId === 'lever' || c.providerId === 'workable' || c.providerId === 'bamboohr');
  const results: any[] = [];
  for (const conn of atsProviders) {'
    const { log } = await ats.updateStatus(conn, { applicantId: talent.id, status: 'hired' });
    writeState(s => s.logs.push(log));
    results.push({ providerId: conn.providerId, ok: true })
  }
  res.status(200).json({ ok: true, results })

}
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/integrations/webhooks/talent-hired.ts
<<<<<<< HEAD:pages/api/integrations/webhooks/talent-hired.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/webhooks/talent-hired.ts






`
      id: `log-${Date.now ()}-${Math.random ().to_string (36).substr (2, 9)}`,
      provider_id: conn.provider_id,"
      level: "info","
      action: "update_status",
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/integrations/webhooks/talent-hired.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      id: `log-${Date.now ()}-${Math.random ().to_string (36).substr (2, 9)}`
      provider_id: conn.provider_id
      level: "info"
      action: "update_status"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    }
    await ats.update_status (conn, {}
      applicant_id: talent.id,"
      status: "hired",
    });
    write_state ((s) => s.logs.push (log));
    results.push ({ provider_id: conn.provider_id, ok: true });
const atsProviders = state.connections.filter(
    c =>
      c.providerId === 'greenhouse' ||
      c.providerId === 'lever' ||
      c.providerId === 'workable' ||
      c.providerId === 'bamboohr'
  );
  const results: any[] = [];
  const result = await ats.updateStatus(conn, {
      applicantId: talent.id,
      status: 'hired',
    });
    writeState((s) => s.logs.push(log));
    results.push({ providerId: conn.providerId, ok: true });
origin/cursor/automate-test-improve-and-merge-code-2533
  }
  res.status (200).json ({ ok: true, results });
<<<<<<< HEAD:pages_backup/api/integrations/webhooks/talent-hired.ts
<<<<<<< HEAD
=======
  res.status(200).json({ ok: true, results });
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/integrations/webhooks/talent-hired.ts
<<<<<<< HEAD
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/webhooks/talent-hired.ts
  res.status(200).json({ ok: true, results });



  res.status(200).json({ ok: true, results });
<<<<<<< HEAD:pages_backup/api/integrations/webhooks/talent-hired.ts
>>>>>>> main
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
  res.status(200).json({ ok: true, results });
}

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
origin/cursor/automate-test-improve-and-merge-code-20a4

  res.status(200).json({ ok: true, results });
main

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/integrations/webhooks/talent-hired.ts
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/webhooks/talent-hired.ts
=======
origin/cursor/automate-test-improve-and-merge-code-20a4

  res.status(200).json({ ok: true, results });
main

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
}

}
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/integrations/webhooks/talent-hired.ts
<<<<<<< HEAD:pages/api/integrations/webhooks/talent-hired.ts
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/integrations/webhooks/talent-hired.ts
=======


}


'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/webhooks/talent-hired.ts
=======


origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
