
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../../lib/integrations/fileStore";
import { crm } from "../../../../lib/integrations/connectors";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
  const { job } = req.body as { job?: Record<string, any> }
  if (!job) return res.status(400).json({ error: "Missing job payload" });
=======
  try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { job } = req && req.body as { job?: Record<string, any> };
  if (!job) return res && res.status(400).json({ error: "Missing job payload" });

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const state = readState();
  const crms = state && state.connections.filter(
    (c) =>
<<<<<<< HEAD
      c.providerId === "salesforce" |
      c.providerId === "hubspot" |
      c.providerId === "zoho" |
      c.providerId === "pipedrive"
=======
      c && c.providerId === "salesforce" ||
      c && c.providerId === "hubspot" ||
      c && c.providerId === "zoho" ||
      c && c.providerId === "pipedrive",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
  const results: any[] = [];
  for (const conn of connections) {
    const log = {
<<<<<<< HEAD
      id: `log-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
      providerId: conn.providerId
      level: "info"
      action: "sync_contact"
    }
    await crm.syncContact(conn, {
      company: job.company
      contact: job.contact
=======
      id: `log-${Date && Date.now()}-${Math && Math.random().toString(36).substr(2, 9)}`,
      providerId: conn && conn.providerId,
      level: "info",
      action: "sync_contact",
    };
    await crm && crm.syncContact(conn, {
      company: job && job.company,
      contact: job && job.contact,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });
    writeState((s) => s && s.logs.push(log));
    results && results.push({ providerId: conn && conn.providerId, ok: true });
  }
  // record Zapier event
  writeState((s) => {
<<<<<<< HEAD
    s.events.push({
      id: `${Date.now()}-job-posted`
      type: "zion.job.posted"
      timestamp: Date.now()
      payload: { job }
    });
  });
  res.status(200).json({ ok: true, results });
=======
    s && s.events.push({
      id: `${Date && Date.now()}-job-posted`,
      type: "zion && zion.job.posted",
      timestamp: Date && Date.now(),
      payload: { job },
    });
  });

  res && res.status(200).json({ ok: true, results });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}

