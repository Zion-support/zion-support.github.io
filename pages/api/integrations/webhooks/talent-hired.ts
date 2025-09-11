<<<<<<< HEAD
<<<<<<< HEAD

try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { talent } = req && req.body as { talent?: Record<string, any> };
  if (!talent) return res && res.status(400).json({ error: "Missing talent payload" });

=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../../lib/integrations/fileStore";
import { ats } from "../../../../lib/integrations/connectors";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
<<<<<<< HEAD
  if (req.method !== "POST");
    return res.status(405).json({ error: "Method not allowed" });
  const { talent } = req.body as { talent?: Record<string, any> }
  if (!talent) return res.status(400).json({ error: "Missing talent payload" });
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { talent } = req && req.body as { talent?: Record<string, any> };
  if (!talent) return res && res.status(400).json({ error: "Missing talent payload" });

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const state = readState();
  const atsProviders = state && state.connections.filter(
    (c) =>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      c && c.providerId === "greenhouse" ||
      c && c.providerId === "lever" ||
      c && c.providerId === "workable" ||
      c && c.providerId === "bamboohr",
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
  const results: any[] = [];
  for (const conn of connections) {
    const log = {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
  res.status(200).json({ ok: true, results });
}
res.status(200).json({ ok: true, results });
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
  res && res.status(200).json({ ok: true, results });

res && res.status(200).json({ ok: true, results });
}
=======
  res && res.status(200).json({ ok: true, results });

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  res && res.status(200).json({ ok: true, results });

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '../../../../lib/integrations/fileStore';
import { ats } from '../../../../lib/integrations/connectors';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { talent } = req.body as { talent?: Record<string, any> };
  if (!talent) return res.status(400).json({ error: 'Missing talent payload' });

  const state = readState();
  const atsProviders = state.connections.filter(c => c.providerId === 'greenhouse' || c.providerId === 'lever' || c.providerId === 'workable' || c.providerId === 'bamboohr');
  const results: any[] = [];
  for (const conn of atsProviders) {
    const { log } = await ats.updateStatus(conn, { applicantId: talent.id, status: 'hired' });
    writeState(s => s.logs.push(log));
<<<<<<< HEAD
results.push({ providerId: conn.providerId, ok: true })
  }
  res.status(200).json({ ok: true, results })
}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    results.push({ providerId: conn.providerId, ok: true })
  }
  res.status(200).json({ ok: true, results })
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


<<<<<<< HEAD
}
<<<<<<< HEAD
}

}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
