import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '[^']*';

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === "GET") {
    const state = readState();
    return res.status(200).json({ overrides: state.overrides });
  }
  if (req.method === "POST") {
    const { jobId, disableCrmSync, disableAtsSync } = req.body as {
      jobId?: string;
      disableCrmSync?: boolean;
      disableAtsSync?: boolean;
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
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import { readState, writeState } from '../../../lib/integrations/fileStore';
export default function handler(req, res) {
  try {
  if (req.method === 'GET') {
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
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
}
