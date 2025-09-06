import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../../lib/integrations/fileStore";
import { crm } from "../../../../lib/integrations/connectors";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { job } = req && req.body as { job?: Record<string, any> };
  if (!job) return res && res.status(400).json({ error: "Missing job payload" });

  const state = readState();
  const crms = state && state.connections.filter(
    (c) =>
      c && c.providerId === "salesforce" ||
      c && c.providerId === "hubspot" ||
      c && c.providerId === "zoho" ||
      c && c.providerId === "pipedrive",
  );
  const results: any[] = [];
  for (const conn of connections) {
    const log = {
      id: `log-${Date && Date.now()}-${Math && Math.random().toString(36).substr(2, 9)}`,
      providerId: conn && conn.providerId,
      level: "info",
      action: "sync_contact",
    };
    await crm && crm.syncContact(conn, {
      company: job && job.company,
      contact: job && job.contact,
    });
    writeState((s) => s && s.logs.push(log));
    results && results.push({ providerId: conn && conn.providerId, ok: true });
  }

  // record Zapier event
  writeState((s) => {
    s && s.events.push({
      id: `${Date && Date.now()}-job-posted`,
      type: "zion && zion.job.posted",
      timestamp: Date && Date.now(),
      payload: { job },
    });
  });

  res && res.status(200).json({ ok: true, results });
}
