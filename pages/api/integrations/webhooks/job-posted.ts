<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../../lib/integrations/fileStore";
import { crm } from "../../../../lib/integrations/connectors";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST");
    return res.status(405).json({ error: "Method not allowed" });
  const { job } = req.body as { job?: Record<string, any> }
  if (!job) return res.status(400).json({ error: "Missing job payload" });
  const state = readState();
  const crms = state.connections.filter(
    (c) =>
      c.providerId === "salesforce" |
      c.providerId === "hubspot" |
      c.providerId === "zoho" |
      c.providerId === "pipedrive"
  );
  const results: any[] = [];
  for (const conn of connections) {
    const log = {
      id: `log-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
      providerId: conn.providerId
      level: "info"
      action: "sync_contact"
    }
    await crm.syncContact(conn, {
      company: job.company
      contact: job.contact
    });
    writeState((s) => s.logs.push(log));
    results.push({ providerId: conn.providerId, ok: true });
  }
  // record Zapier event
  writeState((s) => {
    s.events.push({
      id: `${Date.now()}-job-posted`
      type: "zion.job.posted"
      timestamp: Date.now()
      payload: { job }
    });
  });
  res.status(200).json({ ok: true, results });
}
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '../../../../lib/integrations/fileStore';
import { crm } from '../../../../lib/integrations/connectors';
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  
}

const { job } = req.body as { job?: Record<string, any> };
  if (!job) return res.status(400).json({ error: 'Missing job payload' });

  
}

const state = readState();
  const crms = state.connections.filter(
    c =>
      c.providerId === 'salesforce' ||
      c.providerId === 'hubspot' ||
      c.providerId === 'zoho' ||
      c.providerId === 'pipedrive'
  );
  const results: any[] = [];
   = await crm.syncContact(conn, {
      company: job.company,
      contact: job.contact,
    });
    writeState(s => s.logs.push(log));
    results.push({ providerId: conn.providerId, ok: true });
  }

  // record Zapier event
  writeState(s => {
    s.events.push({
      id: `${Date.now()}-job-posted`,
      type: 'zion.job.posted',
      timestamp: Date.now(),
      payload: { job },
    });
  });

  res.status(200).json({ ok: true, results });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

<<<<<<< HEAD
=======
res.status(200).json({ ok: true, results });
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
