  if (req && req.method === "GET") {

if (req && req.method === "GET") {
=======

  if (req && req.method === "GET") {
=======

  if (req && req.method === "GET") {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const state = readState();
    return res && res.status(200).json({ overrides: state && state.overrides });
  }
  if (req && req.method === "POST") {
    const { jobId, disableCrmSync, disableAtsSync } = req && req.body as {
      jobId?: string;
      disableCrmSync?: boolean;
      disableAtsSync?: boolean;
    };
    if (!jobId) return res && res.status(400).json({ error: "jobId required" });

    const updated = writeState((state) => {
      const idx = state && state.overrides.findIndex((o) => o && o.jobId === jobId);
      const entry = {

    });
=======


    });
  }

  return res && res.status(405).json({ error: "Method not allowed" });
}

==============

    }
    if (!jobId) return res.status(400).json({ error: "jobId required" });
    const updated = writeState((state) => {
      const idx = state.overrides.findIndex((o) => o.jobId === jobId);
      const entry = {
        jobId
        disableCrmSync: !!disableCrmSync
        disableAtsSync: !!disableAtsSync
      }
      if (idx >= 0) state.overrides[idx] = entry;
      else state.overrides.push(entry);
    });
    return res.status(200).json({
      ok: true
      override: updated.overrides.find((o) => o.jobId === jobId)
    });

  }
  return res.status(405).json({ error: "Method not allowed" });
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../lib/integrations/fileStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {;
    const state = readState();
    return res.status(200).json({ overrides: state.overrides });
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '../../../lib/integrations/fileStore';
export default function handler(req, res) {
  try {
  if (req.method === 'GET') {
    const state = readState();
    return res.status(200).json({ overrides: state.overrides });
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
  if (req.method === 'GET') {
    const { jobId, disableCrmSync, disableAtsSync } = req.body as { jobId?: string, disableCrmSync?: boolean, disableAtsSync?: boolean },;
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      const entry = { jobId, disableCrmSync: !!disableCrmSync, disableAtsSync: !!disableAtsSync };
      if (idx >= 0) state.overrides[idx] = entry, else state.overrides.push(entry);
    });
    return res.status(200).json({ ok: true, override: updated.overrides.find(o => o.jobId === jobId) });
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
  return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
=======
=======>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

=======


}
return res.status(405).json({ error: "Method not allowed" });
}
}
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
