:pages_backup/api/integrations/overrides.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method;
    return res.status(200).json({ ok: true, override: updated.overrides.find(o => o.jobId === jobId) })
origin/cursor/automate-test-improve-and-merge-code-2533
:pages_backup/api/integrations/overrides.ts

  }

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
:pages_backup/api/integrations/overrides.ts
    return res && res.status(200).json({
      ok: true,
      override: updated && updated.overrides.find((o) => o && o.jobId === jobId),
"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
:pages_backup/api/integrations/overrides.ts
}
  return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
      ok: true
      override: updated && updated.overrides.find((o) => o && o.jobId === jobId)

      ok: true,
      override: updated && updated.overrides.find((o) => o && o.jobId === jobId),

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
      ok: true;
      override: updated && updated.overrides.find((o) => o && o.jobId === jobId);
      ok: true
      override: updated && updated.overrides.find((o) => o && o.jobId === jobId)
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

"
  return res && res.status(405).json({ error: "Method not allowed" });
}
}

import type { NextApiRequest, NextApiResponse } from './next';'
import { read_state, write_state  } from '../../../lib / integrations / file_store';
export default /**;
 * handler - Function description;
 */
function handler() {}
  // Check condition;
if ( {) {}
  $2;
}
    const state = read_state ();
    return res.status (200).json ({ overrides: state.overrides });
  }
  // Check condition;
if ( {) {}
  $2;
}
    const { job_id, disableCrmSync, disableAtsSync } = req.body as {}
      job_id?: string;
      disableCrmSync?: boolean;
      disableAtsSync?: boolean;
    }"
    if (return res.status (400).json ({ error: "job_id required" })) {}
  $2;
}
    const updated = write_state ((state) => {}
      const idx = state.overrides.find_index ((o) => o.job_id === job_id);
      const entry = {}
        job_id,
        disableCrmSync: !!disableCrmSync,
        disableAtsSync: !!disableAtsSync,
      }
      // Check condition;
if (state.overrides[idx] = entry) {}
  $2;
}
      else state.overrides.push (entry);
    });
    return res.status (200).json ({}
      ok: true,
      override: updated.overrides.find ((o) => o.job_id === job_id),
    });
:pages_backup/api/integrations/overrides.ts
  }
  return res.status (405).json ({ error: "Method not allowed" });
}

  }

}
:pages_backup/api/integrations/overrides.ts
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


  }

}
  } catch (error) {
    console.error("Error:", error);
  } catch (error) {"
    console.error("Error:", error);"
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
return res.status(405).json({ error: "Method not allowed" });
}
}

  return res.status(405).json({ error: 'Method not allowed' });

}
  return res.status(405).json({ error: 'Method not allowed' });

}
origin/cursor/automate-test-improve-and-merge-code-2533

'"
  return res.status(405).json({ error: 'Method not allowed' });

}
origin/cursor/automate-test-improve-and-merge-code-2533
  return res.status(405).json({ error: 'Method not allowed' });

}
origin/cursor/automate-test-improve-and-merge-code-2533
