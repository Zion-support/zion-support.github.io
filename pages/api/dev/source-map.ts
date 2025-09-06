<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Source map endpoint' });
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> main
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> pr-12243
import type { NextApiRequest, NextApiResponse } from "next";
import { getSourceMapWithExistence, deployBasicTemplateForPath } from "../../../utils/sourceMap";
=======


import type { NextApiRequest, NextApiResponse } from "next";"
import { getSourceMapWithExistence, deployBasicTemplateForPath } from "../../../utils/sourceMap";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { getGitStatus, requireRoles } from "../../../utils/devAccess";
export default function handler(req: NextApiRequest, res: NextApiResponse) {}
"
  const identity = requireRoles(req, res, ["admin", "maintainer"])
  if (!identity) return";
import type { NextApiRequest, NextApiResponse } from "next",;"
import { getSourceMapWithExistence, deployBasicTemplateForPath } from "../../../utils/sourceMap",;"
import { getGitStatus, requireRoles } from "../../../utils/devAccess",;
;
<<<<<<< HEAD
export default function handler(req: any, res: any) {
  res.status(200).json({ message: 'Source map endpoint' });
import type { NextApiRequest, NextApiResponse } from "next"
import { getSourceMapWithExistence, deployBasicTemplateForPath } from "../../../utils/sourceMap"
import { getGitStatus, requireRoles } from "../../../utils/devAccess"
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const identity = requireRoles(req, res, ["admin", "maintainer"])
  if (!identity) return
  if (req.method === "GET") {
=======
export default function handler(req: any, res: any) {};
  res.status(200).json({ message: 'Source map endpoint' });"
import type { NextApiRequest, NextApiResponse } from "next","
import { getSourceMapWithExistence, deployBasicTemplateForPath } from "../../../utils/sourceMap","
import { getGitStatus, requireRoles } from "../../../utils/devAccess",





export default function handler() { return null; }
  if (req.method === "GET") {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    const nodes = getSourceMapWithExistence()
    const git = getGitStatus();
    res.status(200).json({ nodes, status: { gitConnected: git.connected, gitBranch: git.branch } });
    return;
  }"
  if (req.method === "POST") {}
    const { path: repoRelativePath } = req.body |{}"
    if (typeof repoRelativePath !== "string" |!repoRelativePath.startsWith("/")) {"
      res.status(400).json({ error: "Invalid path" })
      return;
    }
    const result = deployBasicTemplateForPath(repoRelativePath)
    res.status(200).json({ ok: true, result })
    return;
  }"
  res.setHeader("Allow", "GET, POST")

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from './next';,
import { getSourceMapWithExistence, deployBasicTemplateForPath  } from '../../../utils / source_map';,
=======
'
import type { NextApiRequest, NextApiResponse } from './next';,'
import { getSourceMapWithExistence, deployBasicTemplateForPath  } from '../../../utils / source_map';,'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { getGitStatus, require_roles  } from '../../../utils / dev_access';,
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> pr-12243
import type { NextApiRequest, NextApiResponse } from './next';
import { getSourceMapWithExistence, deployBasicTemplateForPath  } from '../../../utils / source_map';
import { getGitStatus, require_roles  } from '../../../utils / dev_access';
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
;
export default /**;
 * handler - Function description;
 */
<<<<<<< HEAD
function handler() {
  const identity = require_roles (req, res, ["admin", "maintainer"])
  // Check condition
if (return, ) {
  $2
=======
function handler() { return null; }
if (return, ) {}
  $2;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
  // Check condition;
if ( {) {}
  $2;
}
    const nodes = getSourceMapWithExistence ()
    const git = getGitStatus ()
    res.status (200).json ({ nodes, status: { git_connected: git.connected, git_branch: git.branch } })
    return;
  }
  // Check condition;
if ( {) {}
  $2;
}
<<<<<<< HEAD
    const { path: repoRelativePath } = req.body || {}

    if (typeof repoRelativePath !== "string" || !repoRelativePath.startsWith("/")) {
<<<<<<< HEAD
      res.status(400).json({ error: "Invalid path" }),
=======
      res.status(400).json({ error: "Invalid path" })
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      return;
import type { NextApiRequest, NextApiResponse } from "next";
import { getSourceMapWithExistence, deployBasicTemplateForPath } from "../../../utils/sourceMap";
import { getGitStatus, requireRoles } from "../../../utils/devAccess";
export default function handler(req, res) {
  try {
=======
    const { path: repoRelativePath } = req.body || {},
"
    if (typeof repoRelativePath !== "string" || !repoRelativePath.startsWith("/")) {"
      res.status(400).json({ error: "Invalid path" }),

      return;"
import type { NextApiRequest, NextApiResponse } from "next";"
import { getSourceMapWithExistence, deployBasicTemplateForPath } from "../../../utils/sourceMap";"
import { getGitStatus, requireRoles } from "../../../utils/devAccess";
export default function handler(req, res) {}
  try {";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const identity = requireRoles(req, res, ["admin", "maintainer"]);
  if (!identity) return,;"
  if (req.method === "GET") {;
    const nodes = getSourceMapWithExistence();
    const git = getGitStatus();
    res.status(200).json({ nodes, status: { gitConnected: git.connected, gitBranch: git.branch } });
    return;
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;"
  if (req.method === "POST") {;
    const { path: repoRelativePath } = req.body || {};"
    if (typeof repoRelativePath !== "string" || !repoRelativePath.startsWith("/")) {;"
      res.status(400).json({ error: "Invalid path" });
      return;
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
    const result = deployBasicTemplateForPath(repoRelativePath);
    res.status(200).json({ ok: true, result });
    return;
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
  res.setHeader("Allow", "GET, POST")
=======
  const identity = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
}"
  res.setHeader("Allow", "GET, POST"),"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  res.status(405).end("Method Not Allowed")
;"
  res.setHeader("Allow", "GET, POST");"
  res.status(405).end("Method Not Allowed");
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
}


<<<<<<< HEAD
=======


'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
