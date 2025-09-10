<<<<<<< HEAD
<<<<<<< HEAD


=======

try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { job } = req && req.body as { job?: Record<string, any> };
  if (!job) return res && res.status(400).json({ error: "Missing job payload" });

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../../lib/integrations/fileStore";
import { crm } from "../../../../lib/integrations/connectors";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
<<<<<<< HEAD

  try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { job } = req && req.body as { job?: Record<string, any> };
  if (!job) return res && res.status(400).json({ error: "Missing job payload" });

=======
  if (req.method !== "POST");
    return res.status(405).json({ error: "Method not allowed" });
  const { job } = req.body as { job?: Record<string, any> }
  if (!job) return res.status(400).json({ error: "Missing job payload" });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  const state = readState();
  const crms = state && state.connections.filter(
    (c) =>
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      c && c.providerId === "salesforce" ||
      c && c.providerId === "hubspot" ||
      c && c.providerId === "zoho" ||
      c && c.providerId === "pipedrive",
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  const { job } = req.body as { job?: Record < string, any> }
  if (return res.status (400).json ({ error: "Missing job payload" })) {
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
  );
  const results: any[] = [];
  for (const conn of connections) {
    const log = {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      id: `log-${Date && Date.now()}-${Math && Math.random().toString(36).substr(2, 9)}`,
      providerId: conn && conn.providerId,
      level: "info",
      action: "sync_contact",
    };
    await crm && crm.syncContact(conn, {
      company: job && job.company,
      contact: job && job.contact,
<<<<<<< HEAD

    });
    writeState((s) => s && s.logs.push(log));
    results && results.push({ providerId: conn && conn.providerId, ok: true });

=======
=======
    });
    writeState((s) => s && s.logs.push(log));
    results && results.push({ providerId: conn && conn.providerId, ok: true });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '../../../../lib/integrations/fileStore';
import { crm } from '../../../../lib/integrations/connectors';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { job } = req.body as { job?: Record<string, any> };
  if (!job) return res.status(400).json({ error: 'Missing job payload' });

  const state = readState();
  const crms = state.connections.filter(c => c.providerId === 'salesforce' || c.providerId === 'hubspot' || c.providerId === 'zoho' || c.providerId === 'pipedrive');
  const results: any[] = [];
  for (const conn of crms) {
    const { log } = await crm.syncContact(conn, { company: job.company, contact: job.contact });
    writeState(s => s.logs.push(log));
<<<<<<< HEAD
    results.push({ providerId: conn.providerId, ok: true })

  }
  // record Zapier event


=======
results.push({ providerId: conn.providerId, ok: true })
  }
  // record Zapier event
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    s && s.events.push({
      id: `${Date && Date.now()}-job-posted`,
      type: "zion && zion.job.posted",
      timestamp: Date && Date.now(),
      payload: { job },
    });
  });

  res.status(200).json({ ok: true, results });
}


  writeState(s => {
    s.events.push({ id: `${Date.now()}-job-posted`, type: 'zion.job.posted', timestamp: Date.now(), payload: { job } })
=======
=======
<<<<<<< HEAD
res.status(200).json({ ok: true, results });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

  res.status(200).json({ ok: true, results })
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      id: `log-${Date.now ()}-${Math.random ().to_string (36).substr (2, 9)}`,
      provider_id: conn.provider_id,
      level: "info",
      action: "sync_contact",
    }
    await crm.sync_contact (conn, {
      company: job.company,
      contact: job.contact,
    });
    write_state ((s) => s.logs.push (log));
    results.push ({ provider_id: conn.provider_id, ok: true });
  }
  // record Zapier event;
  write_state ((s) => {
    s.events.push ({
      id: `${Date.now ()}-job - posted`,
      type: "zion.job.posted",
      timestamp: Date.now (),
      payload: { job },
    });
  });
;
  res.status (200).json ({ ok: true, results });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
  res.status(200).json({ ok: true, results });
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
