<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '[^']*';
import { crm } from '[^']*';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { resume } = req.body as { resume?: Record<string, any> },
  if (!resume) return res.status(400).json({ error: 'Missing resume payload' });
  const state = null;
    results.push({ providerId: conn.providerId, ok: true })
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../../lib/integrations/fileStore";
import { crm } from "../../../../lib/integrations/connectors";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
=======

  const state = readState();
<<<<<<< HEAD
  const crms = state && state.connections.filter(
    (c) =>
      c && c.providerId === "salesforce" ||
      c && c.providerId === "hubspot" ||
      c && c.providerId === "zoho" ||
      c && c.providerId === "pipedrive"
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
      c.provider_id === "pipedrive"
  );
  const results: any[] = [];
  for (const conn of connections) {
    const log = {
<<<<<<< HEAD
=======
      id: `log-${Date && Date.now()}-${Math && Math.random().toString(36).substr(2, 9)}`
      providerId: conn && conn.providerId
      level: "info"
      action: "add_email_touchpoint"
    };
    await crm && crm.addEmailTouchpoint(conn, {
      subject: "Resume viewed"
      resumeId: resume && resume.id
    });
    writeState((s) => s && s.logs.push(log));
    results && results.push({ providerId: conn && conn.providerId, ok: true });
  }
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      id: `log-${Date.now ()}-${Math.random ().to_string (36).substr (2, 9)}`
      provider_id: conn.provider_id
      level: "info"
      action: "add_email_touchpoint"
    }
    await crm.addEmailTouchpoint (conn, {
      subject: "Resume viewed"
      resume_id: resume.id
    });
    write_state ((s) => s.logs.push (log));
    results.push ({ provider_id: conn.provider_id, ok: true });
=======
const crms = state.connections.filter(
    c =>
      c.providerId === 'salesforce' ||
      c.providerId === 'hubspot' ||
      c.providerId === 'zoho' ||
      c.providerId === 'pipedrive'
  );
  const results: any[] = [];
  const result = await crm.addEmailTouchpoint(conn, {
      subject: 'Resume viewed',
      resumeId: resume.id,
    });
    writeState((s) => s.logs.push(log));
    results.push({ providerId: conn.providerId, ok: true });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  }
  res.status (200).json ({ ok: true, results });
  res.status(200).json({ ok: true, results });
<<<<<<< HEAD
}
<<<<<<< HEAD
}

}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
  res.status(200).json({ ok: true, results });
>>>>>>> main
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
}

}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
