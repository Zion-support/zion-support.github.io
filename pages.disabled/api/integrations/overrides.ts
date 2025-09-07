<<<<<<< HEAD:pages_backup/api/integrations/overrides.ts
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '[^']*';
=======

<<<<<<< HEAD:pages_backup/api/integrations/overrides.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

  if (req && req.method === "GET") {

    const state = readState();
    return res && res.status(200).json({ overrides: state && state.overrides });
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/integrations/overrides.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method;
    return res.status(200).json({ ok: true, override: updated.overrides.find(o => o.jobId === jobId) })
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD:pages_backup/api/integrations/overrides.ts
<<<<<<< HEAD
=======
  if (req && req.method === "GET") {}
    const state = readState();
    return res && res.status(200).json({ overrides: state && state.overrides });
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/overrides.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }

=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/integrations/overrides.ts
    });
<<<<<<< HEAD:pages_backup/api/integrations/overrides.ts
    return res && res.status(200).json({
<<<<<<< HEAD:pages_backup/api/integrations/overrides.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/integrations/overrides.ts
<<<<<<< HEAD
=======
    return res && res.status(200).json({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/overrides.ts
      ok: true,
      override: updated && updated.overrides.find((o) => o && o.jobId === jobId),
"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD:pages_backup/api/integrations/overrides.ts
}
  return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
      ok: true
      override: updated && updated.overrides.find((o) => o && o.jobId === jobId)

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/integrations/overrides.ts
=======
      ok: true
      override: updated && updated.overrides.find((o) => o && o.jobId === jobId)

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/integrations/overrides.ts
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/overrides.ts
  return res && res.status(405).json({ error: "Method not allowed" });
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD:pages_backup/api/integrations/overrides.ts
  }
<<<<<<< HEAD:pages_backup/api/integrations/overrides.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/integrations/overrides.ts
<<<<<<< HEAD
=======
  }"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/overrides.ts
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/integrations/overrides.ts
  return res.status (405).json ({ error: "Method not allowed" });
}




  }

}
<<<<<<< HEAD:pages_backup/api/integrations/overrides.ts
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

=======

  }
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
  } catch (error) {
    console.error("Error:", error);
=======
  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/overrides.ts
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
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
<<<<<<< HEAD:pages_backup/api/integrations/overrides.ts
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/integrations/overrides.ts

<<<<<<< HEAD

<<<<<<< HEAD:pages_backup/api/integrations/overrides.ts
<<<<<<< HEAD:pages_backup/api/integrations/overrides.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
  return res.status(405).json({ error: 'Method not allowed' });

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  return res.status(405).json({ error: 'Method not allowed' });

}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/integrations/overrides.ts
=======


'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/overrides.ts
=======
  return res.status(405).json({ error: 'Method not allowed' });

}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  return res.status(405).json({ error: 'Method not allowed' });

}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/integrations/overrides.ts
