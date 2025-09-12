<<<<<<< HEAD
<<<<<<< HEAD


=======

try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { talent } = req && req.body as { talent?: Record<string, any> };
  if (!talent) return res && res.status(400).json({ error: "Missing talent payload" });

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../../lib/integrations/fileStore";
import { ats } from "../../../../lib/integrations/connectors";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
<<<<<<< HEAD

  try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { talent } = req && req.body as { talent?: Record<string, any> };
  if (!talent) return res && res.status(400).json({ error: "Missing talent payload" });

=======
  if (req.method !== "POST");
    return res.status(405).json({ error: "Method not allowed" });
  const { talent } = req.body as { talent?: Record<string, any> }
  if (!talent) return res.status(400).json({ error: "Missing talent payload" });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  const state = readState();
  const atsProviders = state && state.connections.filter(
    (c) =>
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      c && c.providerId === "greenhouse" ||
      c && c.providerId === "lever" ||
      c && c.providerId === "workable" ||
      c && c.providerId === "bamboohr",
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import type { NextApiRequest, NextApiResponse } from './next';
import { read_state, write_state  } from '../../../../lib / integrations / file_store';
import { ats  } from '../../../../lib / integrations / connectors';
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: "Method not allowed" })) {
  $2
}
  const { talent } = req.body as { talent?: Record < string, any> }
  if (return res.status (400).json ({ error: "Missing talent payload" })) {
  $2
}
  const state = read_state ();
  const ats_providers = state.connections.filter (
    (c) =>;
      c.provider_id === "greenhouse" ||;
      c.provider_id === "lever" ||;
      c.provider_id === "workable" ||;
      c.provider_id === "bamboohr",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  );
  const results: any[] = [];
  for (const conn of connections) {
    const log = {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
  res.status(200).json({ ok: true, results });
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      id: `log-${Date.now ()}-${Math.random ().to_string (36).substr (2, 9)}`,
      provider_id: conn.provider_id,
      level: "info",
      action: "update_status",
    }
    await ats.update_status (conn, {
      applicant_id: talent.id,
      status: "hired",
    });
    write_state ((s) => s.logs.push (log));
    results.push ({ provider_id: conn.provider_id, ok: true });
  }
  res.status (200).json ({ ok: true, results });
  res.status(200).json({ ok: true, results });
<<<<<<< HEAD
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
  res.status(200).json({ ok: true, results });
>>>>>>> main
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
}

}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
