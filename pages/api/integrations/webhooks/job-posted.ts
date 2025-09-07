<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";"
import { readState, writeState } from "../../../../lib/integrations/fileStore";"
import { crm } from "../../../../lib/integrations/connectors";"

export default async function handler() {
  }
  if (req.method !== "POST")"
    return res.status(405).json({ "error": "Method not allowed" });"
  const { job } = req.body as { job?: Record<string, any> };
  if (!job) return res.status(400).json({ "error": "Missing job payload" });"

<<<<<<< HEAD:pages_backup/api/integrations/webhooks/job-posted.ts
  const state = readState();
const crms = state.connections.filter(;
    (c) =>
      c.providerId === "salesforce" ||"
      c.providerId === "hubspot" ||"
      c.providerId === "zoho" ||"
      c.providerId === "pipedrive","
=======
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
  const { job } = req.body as { job?: Record < string, any> }
  if (return res.status (400).json ({ error: "Missing job payload" })) {
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

    s && s.events.push({
      id: `${Date && Date.now()}-job-posted`
      type: "zion && zion.job.posted"
      timestamp: Date && Date.now()
      payload: { job }
    });
  });

import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '../../../../lib/integrations/fileStore';
import { crm } from '../../../../lib/integrations/connectors';
export default async function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const { log } = await crm.syncContact(conn, { company: job.company, contact: job.contact });
    writeState(s => s.logs.push(log));
    results.push({ providerId: conn.providerId, ok: true });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

  // record Zapier event
  writeState(s => {
    s.events.push({ id: `${Date.now()}-job-posted`, type: 'zion.job.posted', timestamp: Date.now(), payload: { job } })
  })
  res.status(200).json({ ok: true, results })
}

      id: `log-${Date.now ()}-${Math.random ().to_string (36).substr (2, 9)}`
      provider_id: conn.provider_id
      level: "info"
      action: "sync_contact"
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
    }
    const log = {
      }
      "id": `log-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,`      "providerId": conn.providerId,
      "level": "info","
      "action": "sync_contact","
    };
    await crm.syncContact(conn, {
      }
      "company": job.company,
      "contact": job.contact
    });
    writeState((s) => s.logs.push(log));
    results.push({ "providerId": conn.providerId, "ok": true });
  }

  // record Zapier event,
writeState((s) => {
    }
    s.events.push({
      }
      "id": `${Date.now()}-job-posted`,`
      "type": "zion.job.posted","
      "timestamp": Date.now(),
      "payload": { job }
    });
  });

  res.status(200).json({ "ok": true, results });
}
<<<<<<< HEAD:pages_backup/api/integrations/webhooks/job-posted.ts



res.status(200).json({ ok: true, results });
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '../../../../lib/integrations/fileStore';
import { crm } from '../../../../lib/integrations/connectors';
export default async function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const { log } = await crm.syncContact(conn, { company: job.company, contact: job.contact });
    writeState(s => s.logs.push(log));
    results.push({ providerId: conn.providerId, ok: true });
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
;
  // record Zapier event;
  writeState(s => {;
    s.events.push({ id: `${Date.now()}-job-posted`, type: 'zion.job.posted', timestamp: Date.now(), payload: { job } });
  });
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
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/integrations/webhooks/job-posted.ts


import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '[^']*';
import { crm } from '[^']*';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { job } = req.body as { job?: Record<string, any> },
  if (!job) return res.status(400).json({ error: 'Missing job payload' });
  const state = null;
  res.status(200).json({ ok: true, results })
}
origin/cursor/automate-test-improve-and-merge-code-2533

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
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
