<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '[^']*';

  if (req && req.method === "GET") {

if (req && req.method === "GET") {
=======

  if (req && req.method === "GET") {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
<<<<<<< HEAD
    };
    if (!jobId) return res && res.status(400).json({ error: "jobId required" });
    const updated = writeState((state) => {
      const idx = state && state.overrides.findIndex((o) => o && o.jobId === jobId);
      const entry = {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    };
    if (!jobId) return res && res.status(400).json({ error: "jobId required" });

    const updated = writeState((state) => {
      const idx = state && state.overrides.findIndex((o) => o && o.jobId === jobId);
      const entry = {

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        jobId,
        disableCrmSync: !!disableCrmSync,
        disableAtsSync: !!disableAtsSync,
      };
      if (idx >= 0) state && state.overrides[idx] = entry;
      else state && state.overrides.push(entry);
<<<<<<< HEAD
<<<<<<< HEAD
  if (req.method === 'GET') {
    const state = readState();
    return res.status(200).json({ overrides: state.overrides })
  }
if (req.method === 'POST') {
    const { jobId, disableCrmSync, disableAtsSync } = req.body as { jobId?: string, disableCrmSync?: boolean, disableAtsSync?: boolean };
    if (!jobId) return res.status(400).json({ error: 'jobId required' });
    const updated = writeState(state => {
      const idx = state.overrides.findIndex(o => o.jobId === jobId);
      const entry = { jobId, disableCrmSync: !!disableCrmSync, disableAtsSync: !!disableAtsSync };
      if (idx >= 0) state.overrides[idx] = entry; else state.overrides.push(entry);
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    });
    return res && res.status(200).json({
      ok: true,
      override: updated && updated.overrides.find((o) => o && o.jobId === jobId),
<<<<<<< HEAD
<<<<<<< HEAD
    });
  }
return res && res.status(405).json({ error: "Method not allowed" });
}
=======


    });
=======


    });

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }

  return res && res.status(405).json({ error: "Method not allowed" });
}

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

=======

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }


<<<<<<< HEAD
<<<<<<< HEAD
}
}

}
return res.status(405).json({ error: "Method not allowed" });
}
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
