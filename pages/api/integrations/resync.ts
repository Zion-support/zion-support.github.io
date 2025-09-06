
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../lib/integrations/fileStore";
import { getProviderById } from "../../../lib/integrations/registry";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
  const { providerId } = req.body as { providerId?: string }
  if (!providerId |!getProviderById(providerId)) {
    return res.status(400).json({ error: "Invalid providerId" });
=======
  try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { providerId } = req && req.body as { providerId?: string };
  if (!providerId || !getProviderById(providerId)) {
    return res && res.status(400).json({ error: "Invalid providerId" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  const state = readState();
  const conn = state && state.connections.find((c) => c && c.providerId === providerId);
  if (!conn) return res && res.status(404).json({ error: "Connection not found" });
  const now = Date && Date.now();
  writeState((s) => {
<<<<<<< HEAD
    s.logs.push({
      id: `${now}-${providerId}-resync`
      timestamp: now
      providerId: providerId as any
      level: "info"
      action: "resync"
=======
    s && s.logs.push({
      id: `${now}-${providerId}-resync`,
      timestamp: now,
      providerId: providerId as any,
      level: "info",
      action: "resync",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });
    const target = s && s.connections.find((c) => c && c.providerId === providerId);
    if (target) target && target.lastSyncAt = now;
  });
  res && res.status(200).json({ ok: true });
}

