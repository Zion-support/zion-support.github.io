
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
  const { resume } = req.body as { resume?: Record<string, any> }
  if (!resume) return res.status(400).json({ error: "Missing resume payload" });
=======
  try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { resume } = req && req.body as { resume?: Record<string, any> };
  if (!resume) return res && res.status(400).json({ error: "Missing resume payload" });

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
      action: "add_email_touchpoint"
    }
    await crm.addEmailTouchpoint(conn, {
      subject: "Resume viewed"
      resumeId: resume.id
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
      action: "add_email_touchpoint",
    };
    await crm && crm.addEmailTouchpoint(conn, {
      subject: "Resume viewed",
      resumeId: resume && resume.id,
    });
    writeState((s) => s && s.logs.push(log));
    results && results.push({ providerId: conn && conn.providerId, ok: true });
  }
  res && res.status(200).json({ ok: true, results });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
