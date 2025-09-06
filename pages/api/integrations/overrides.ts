<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  if (req && req.method === "GET") {

    const state = readState();
    return res && res.status(200).json({ overrides: state && state.overrides });
  }
<<<<<<< HEAD
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

        jobId,
        disableCrmSync: !!disableCrmSync,
        disableAtsSync: !!disableAtsSync,
      };
      if (idx >= 0) state && state.overrides[idx] = entry;
      else state && state.overrides.push(entry);

=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '[^']*';

  if (req && req.method === "GET") {

if (req && req.method === "GET") {
    const state = readState();
    return res && res.status(200).json({ overrides: state && state.overrides });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
  if (req.method === 'GET') {
    const { jobId, disableCrmSync, disableAtsSync } = req.body as { jobId?: string, disableCrmSync?: boolean, disableAtsSync?: boolean },;
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      const entry = { jobId, disableCrmSync: !!disableCrmSync, disableAtsSync: !!disableAtsSync };
      if (idx >= 0) state.overrides[idx] = entry, else state.overrides.push(entry);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    });
    return res && res.status(200).json({
      ok: true,
      override: updated && updated.overrides.find((o) => o && o.jobId === jobId),
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    });

  }

  return res && res.status(405).json({ error: "Method not allowed" });
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

  return res && res.status(405).json({ error: "Method not allowed" });
}
}
import type { NextApiRequest, NextApiResponse } from './next';
import { read_state, write_state  } from '../../../lib / integrations / file_store';
export default /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    const state = read_state ();
    return res.status (200).json ({ overrides: state.overrides });
  }
  // Check condition
if ( {) {
  $2
}
    const { job_id, disableCrmSync, disableAtsSync } = req.body as {
      job_id?: string;
      disableCrmSync?: boolean;
      disableAtsSync?: boolean;
    }
    if (return res.status (400).json ({ error: "job_id required" })) {
  $2
}
    const updated = write_state ((state) => {
      const idx = state.overrides.find_index ((o) => o.job_id === job_id);
      const entry = {
        job_id,
        disableCrmSync: !!disableCrmSync,
        disableAtsSync: !!disableAtsSync,
      }
      // Check condition
if (state.overrides[idx] = entry) {
  $2
}
      else state.overrides.push (entry);
    });
    return res.status (200).json ({
      ok: true,
      override: updated.overrides.find ((o) => o.job_id === job_id),
    });
  }
  return res.status (405).json ({ error: "Method not allowed" });
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


  }
<<<<<<< HEAD
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

=======


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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
  return res.status(405).json({ error: "Method not allowed" });
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

