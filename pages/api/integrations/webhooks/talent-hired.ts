<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '../../../../lib/integrations/fileStore';
import { ats } from '../../../../lib/integrations/connectors';
export default async function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const { log } = await ats.updateStatus(conn, { applicantId: talent.id, status: 'hired' });
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
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../../lib/integrations/fileStore";
import { ats } from "../../../../lib/integrations/connectors";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
  const { talent } = req.body as { talent?: Record<string, any> };
  if (!talent) return res.status(400).json({ error: "Missing talent payload" });

  const state = readState();
  const atsProviders = state.connections.filter(
    (c) =>
      c.providerId === "greenhouse" ||
      c.providerId === "lever" ||
      c.providerId === "workable" ||
      c.providerId === "bamboohr",
  );
  const results: any[] = [];
  const statusResult = await ats.updateStatus(conn, {
      applicantId: talent.id,
      status: "hired",
    });
    writeState((s) => s.logs.push(log));
    results.push({ providerId: conn.providerId, ok: true });
  }
  res.status(200).json({ ok: true, results });
}
>>>>>>> main
