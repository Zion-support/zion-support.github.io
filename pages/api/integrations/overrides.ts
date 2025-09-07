import type { NextApiRequest, NextApiResponse } from "next";"
import { readState, writeState } from "../../../lib/integrations/fileStore";"
export default function handler() {
  }
  if (req.method === "GET") {"
    }
    const state = readState();
    return res.status(200).json({ "overrides": state.overrides });
  }
  if (req.method === "POST") {"
    }
    const { jobId, disableCrmSync, disableAtsSync } = req.body as {
      }
      jobId?: string;
      disableCrmSync?: boolean;
      disableAtsSync?: boolean;
    };
    if (!jobId) return res.status(400).json({ "error": "jobId required" });"
    const updated = writeState((state) => {
      }
      const idx = state.overrides.findIndex((o) => o.jobId === jobId);
      const entry = {
        }
        jobId,
        "disableCrmSync": !!disableCrmSync,
        "disableAtsSync": !!disableAtsSync
      };
      if (idx >= 0) state.overrides[idx] = entry;
      else state.overrides.push(entry);
    });
    return res.status(200).json({
      }
      "ok": true,
      "override": updated.overrides.find((o) => o.jobId === jobId)
    });
  }
  return res.status(405).json({ "error": "Method not allowed" });"
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
>>>>>>> origin/main
