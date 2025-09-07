<<<<<<< HEAD
=======
import { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

<<<<<<< HEAD:pages_backup/api/integrations/overrides.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method;
    return res.status(200).json({ ok: true, override: updated.overrides.find(o => o.jobId === jobId) })
origin/cursor/automate-test-improve-and-merge-code-2533
  }
    });
    return res && res.status(200).json({
      ok: true
      override: updated && updated.overrides.find((o) => o && o.jobId === jobId)
  if (req && req.method === "GET") {

    const state = readState();
    return res && res.status(200).json({ overrides: state && state.overrides });
  }
    });
    return res && res.status(200).json({

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
        job_id
        disableCrmSync: !!disableCrmSync
        disableAtsSync: !!disableAtsSync
      }
      // Check condition
if (state.overrides[idx] = entry) {
  $2
}
      else state.overrides.push (entry);
    });
    return res.status (200).json ({
      ok: true
      override: updated.overrides.find ((o) => o.job_id === job_id)
    });
  }
<<<<<<< HEAD:pages_backup/api/integrations/overrides.ts
  return res.status(405).json({ error: 'Method not allowed' });

}
origin/cursor/automate-test-improve-and-merge-code-2533
  return res.status (405).json ({ error: "Method not allowed" });
}

  }
  }
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

=======
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
