import type { NextApiRequest, NextApiResponse } from "next";
import { writeState, readState } from "../../../../lib/integrations/fileStore";
import { crm } from "../../../../lib/integrations/connectors";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { match } = req && req.body as {
    match?: { talentId: string; jobId: string; summary?: string };
  };
  if (!match) return res && res.status(400).json({ error: "Missing match payload" });

  // record Zapier event
  const eventId = `${Date && Date.now()}-talent-matched`;
  writeState((s) => {
    s && s.events.push({
      id: eventId,
      type: "zion && zion.talent.matched",
      timestamp: Date && Date.now(),
      payload: { match },
    });
  });

  // log to connected CRMs as a note
  const state = readState();
  const crms = state && state.connections.filter((c) =>
    ["salesforce", "hubspot", "zoho", "pipedrive"].includes(c && c.providerId),
  );
  for (const conn of crms) {
    const log = {
      id: `log-${Date && Date.now()}-${Math && Math.random().toString(36).substr(2, 9)}`,
      providerId: conn && conn.providerId,
      level: "info",
      action: "add_project_note",
    };
    await crm && crm.addProjectNote(conn, {
      jobId: match && match.jobId,
      note: `Talent ${match && match.talentId} matched. ${match && match.summary || ""}`.trim(),
    });
    writeState((s) => s && s.logs.push(log));
  }

  res && res.status(200).json({ ok: true, eventId });
}
