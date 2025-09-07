<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";"
import { readState, writeState } from "../../../../lib/integrations/fileStore";"
import { ats } from "../../../../lib/integrations/connectors";"

export default async function handler() {
  }
  if (req.method !== "POST")"
    return res.status(405).json({ "error": "Method not allowed" });"
  const { talent } = req.body as { talent?: Record<string, any> };
  if (!talent) return res.status(400).json({ "error": "Missing talent payload" });"

  const state = readState();
const atsProviders = state.connections.filter(;
    (c) =>
      c.providerId === "greenhouse" ||"
      c.providerId === "lever" ||"
      c.providerId === "workable" ||"
      c.providerId === "bamboohr","
=======
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../../lib/integrations/fileStore";
import { ats } from "../../../../lib/integrations/connectors";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

import type { NextApiRequest, NextApiResponse } from './next';
import { read_state, write_state  } from '../../../../lib / integrations / file_store';
import { ats  } from '../../../../lib / integrations / connectors';
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: "Method not allowed" })) {
  { error: "Invalid request" }
}
  const { talent } = req.body as { talent?: Record < string, any> }
  if (return res.status (400).json ({ error: "Missing talent payload" })) {
  { error: "Invalid request" }
}
  const state = read_state ();
  const ats_providers = state.connections.filter (
    (c) =>;
      c.provider_id === "greenhouse" ||;
      c.provider_id === "lever" ||;
      c.provider_id === "workable" ||;
      c.provider_id === "bamboohr"
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
  );
  const "results": any[] = [];
  for (const conn of connections) {
<<<<<<< HEAD
=======
    const log = {

import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '../../../../lib/integrations/fileStore';
import { ats } from '../../../../lib/integrations/connectors';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: "Invalid request" });
  const { talent } = req.body as { talent?: Record<string, any> }
  if (!talent) return res.status(400).json({ error: "Invalid request" });
  const state = readState({ error: "Invalid request" });
  const atsProviders = state.connections.filter({ error: "Invalid request" });
  const results: any[] = []
  for (const conn of atsProviders) {
    const { log } = await ats.updateStatus({ error: "Invalid request" });
    writeState(s = { error: "Invalid request" };
    results.push({ providerId: conn.providerId, ok: true})
  }
  res.status(200).json({ ok: true, results })
}

      id: `log-${Date.now ()}-${Math.random ().to_string (36).substr (2, 9)}`
      provider_id: conn.provider_id
      level: "info"
      action: "update_status"
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
    }
    const log = {
      }
      "id": `log-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,`
      "providerId": conn.providerId,
      "level": "info","
      "action": "update_status","
    };
    await ats.updateStatus(conn, {
      }
      "applicantId": talent.id,
      "status": "hired","
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
