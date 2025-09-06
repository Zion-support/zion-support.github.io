<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { readState, writeState } from '[^']*';

  if (req && req.method === "GET") {

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

        jobId,
        disableCrmSync: !!disableCrmSync,
        disableAtsSync: !!disableAtsSync,
      };
      if (idx >= 0) state && state.overrides[idx] = entry;
      else state && state.overrides.push(entry);

    });
    return res && res.status(200).json({
      ok: true,
      override: updated && updated.overrides.find((o) => o && o.jobId === jobId),


    });

  }
  return res.status(405).json({ error: "Method not allowed" });
=======
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../lib/integrations/fileStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {;
    const state = readState();
    return res.status(200).json({ overrides: state.overrides });
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

=======

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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
<<<<<<< HEAD
return res.status(405).json({ error: "Method not allowed" });
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
