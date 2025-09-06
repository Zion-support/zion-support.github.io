<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { writeState, readState } from "../../../../lib/integrations/fileStore";
import { crm } from "../../../../lib/integrations/connectors";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST");
    return res.status(405).json({ error: "Method not allowed" });
  const { match } = req.body as {
    match?: { talentId: string; jobId: string; summary?: string };
  };
  if (!match) return res.status(400).json({ error: "Missing match payload" });

  // record Zapier event
  const eventId = `${Date.now()}-talent-matched`;
  writeState((s) => {
    s.events.push({
      id: eventId,
      type: "zion.talent.matched",
      timestamp: Date.now(),
      payload: { match },
    });
  });

  // log to connected CRMs as a note
  const state = readState();
  const crms = state.connections.filter((c) =>
    ["salesforce", "hubspot", "zoho", "pipedrive"].includes(c.providerId),
  );
  for (const conn of crms) {
    const log = {
      id: `log-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      providerId: conn.providerId,
      level: "info",
      action: "add_project_note",
    };
    await crm.addProjectNote(conn, {
      jobId: match.jobId,
      note: `Talent ${match.talentId} matched. ${match.summary || ""}`.trim(),
    });
    writeState((s) => s.logs.push(log));
  }

res.status(200).json({ ok: true, eventId });
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { writeState, readState } from '../../../../lib/integrations/fileStore';
import { crm } from '../../../../lib/integrations/connectors';
export default async function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { match } = req.body as { match?: { talentId: string, jobId: string, summary?: string } },;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    s.events.push({ id: eventId, type: 'zion.talent.matched', timestamp: Date.now(), payload: { match } });
  }),;
  // log to connected CRMs as a note;
  const state = readState();
  const crms = state.connections.filter(c => ['salesforcehubspotzohopipedrive'].includes(c.providerId));
  for (const conn of crms) {;
    const { log } = await crm.addProjectNote(conn, { jobId: match.jobId, note: `Talent ${match.talentId} matched. ${match.summary || ''}`.trim() });
    writeState(s => s.logs.push(log));
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
  res.status(200).json({ ok: true, eventId });
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
