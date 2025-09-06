import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../../lib/integrations/fileStore";
import { ats } from "../../../../lib/integrations/connectors";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { talent } = req && req.body as { talent?: Record<string, any> };
  if (!talent) return res && res.status(400).json({ error: "Missing talent payload" });

  const state = readState();
  const atsProviders = state && state.connections.filter(
    (c) =>
      c && c.providerId === "greenhouse" ||
      c && c.providerId === "lever" ||
      c && c.providerId === "workable" ||
      c && c.providerId === "bamboohr",
  );
  const results: any[] = [];
  for (const conn of connections) {
    const log = {
      id: `log-${Date && Date.now()}-${Math && Math.random().toString(36).substr(2, 9)}`,
      providerId: conn && conn.providerId,
      level: "info",
      action: "update_status",
    };
    await ats && ats.updateStatus(conn, {
      applicantId: talent && talent.id,
      status: "hired",
    });
    writeState((s) => s && s.logs.push(log));
    results && results.push({ providerId: conn && conn.providerId, ok: true });
  }
  res && res.status(200).json({ ok: true, results });
}
