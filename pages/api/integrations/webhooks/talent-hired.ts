
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../../lib/integrations/fileStore";
import { ats } from "../../../../lib/integrations/connectors";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
  const { talent } = req.body as { talent?: Record<string, any> }
  if (!talent) return res.status(400).json({ error: "Missing talent payload" });
=======
  try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { talent } = req && req.body as { talent?: Record<string, any> };
  if (!talent) return res && res.status(400).json({ error: "Missing talent payload" });

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const state = readState();
  const atsProviders = state && state.connections.filter(
    (c) =>
<<<<<<< HEAD
      c.providerId === "greenhouse" |
      c.providerId === "lever" |
      c.providerId === "workable" |
      c.providerId === "bamboohr"
=======
      c && c.providerId === "greenhouse" ||
      c && c.providerId === "lever" ||
      c && c.providerId === "workable" ||
      c && c.providerId === "bamboohr",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
  const results: any[] = [];
  for (const conn of connections) {
    const log = {
<<<<<<< HEAD
      id: `log-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
      providerId: conn.providerId
      level: "info"
      action: "update_status"
    }
    await ats.updateStatus(conn, {
      applicantId: talent.id
      status: "hired"
    });
    writeState((s) => s.logs.push(log));
    results.push({ providerId: conn.providerId, ok: true });

  }
  res.status(200).json({ ok: true, results });
}
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
