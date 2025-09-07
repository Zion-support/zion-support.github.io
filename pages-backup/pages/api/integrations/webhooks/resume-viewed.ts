<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";"
import { readState, writeState } from "../../../../lib/integrations/fileStore";"
import { crm } from "../../../../lib/integrations/connectors";"

export default async function handler() {
  }
  if (req.method !== "POST")"
    return res.status(405).json({ "error": "Method not allowed" });"
  const { resume } = req.body as { resume?: Record<string, any> };
  if (!resume) return res.status(400).json({ "error": "Missing resume payload" });"

  const state = readState();
const crms = state.connections.filter(;
    (c) =>
      c.providerId === "salesforce" ||"
      c.providerId === "hubspot" ||"
      c.providerId === "zoho" ||"
      c.providerId === "pipedrive","
=======
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../../lib/integrations/fileStore";
import { crm } from "../../../../lib/integrations/connectors";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

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
  { error: "Invalid request" }
}
  const { resume } = req.body as { resume?: Record < string, any> }
  if (return res.status (400).json ({ error: "Missing resume payload" })) {
  { error: "Invalid request" }
}
  const state = read_state ();
  const crms = state.connections.filter (
    (c) =>;
      c.provider_id === "salesforce" ||;
      c.provider_id === "hubspot" ||;
      c.provider_id === "zoho" ||;
      c.provider_id === "pipedrive"
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
  );
  const "results": any[] = [];
  for (const conn of connections) {
<<<<<<< HEAD
=======
    const log = {

import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '../../../../lib/integrations/fileStore';
import { crm } from '../../../../lib/integrations/connectors';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: "Invalid request" });
  const { resume } = req.body as { resume?: Record<string, any> }
  if (!resume) return res.status(400).json({ error: "Invalid request" });
  const state = readState({ error: "Invalid request" });
  const crms = state.connections.filter({ error: "Invalid request" });
  const results: any[] = []
  for (const conn of crms) {
    const { log } = await crm.addEmailTouchpoint({ error: "Invalid request" });
    writeState(s = { error: "Invalid request" };
    results.push({ providerId: conn.providerId, ok: true})
  }
  res.status(200).json({ ok: true, results })
}

      id: `log-${Date.now ()}-${Math.random ().to_string (36).substr (2, 9)}`
      provider_id: conn.provider_id
      level: "info"
      action: "add_email_touchpoint"
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
    }
    const log = {
      }
      "id": `log-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,`
      "providerId": conn.providerId,
      "level": "info","
      "action": "add_email_touchpoint","
    };
    await crm.addEmailTouchpoint(conn, {
      }
      "subject": "Resume viewed","
      "resumeId": resume.id
    });
    writeState((s) => s.logs.push(log));
    results.push({ "providerId": conn.providerId, "ok": true });
  }
  res.status(200).json({ "ok": true, results });
}

}
}

}

<<<<<<< HEAD
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
