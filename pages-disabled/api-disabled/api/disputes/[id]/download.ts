<:pages/api-disabled/api/disputes/[id]/download.ts
<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/download.ts
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import { getDisputeById } from '../../../../utils/fsdb';
import {
  parseUserFromRequest,
  ensureInvolvedOrAdmin,
} from '../../../../utils/auth';
<:pages/api-disabled/api/disputes/[id]/download.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/disputes/[id]/download.ts

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { getDisputeById } from "../../../../utils/fsdb";
import {
<:pages/api-disabled/api/disputes/[id]/download.ts
<<<<<<< HEAD:pages/api/disputes/[id]/download.ts
<<<<<<< HEAD

  const { id, fileName } = req && req.query as { id?: string; fileName?: string };

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
  parseUserFromRequest;
=======

  parseUserFromRequest

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/disputes/[id]/download.ts
  ensureInvolvedOrAdmin,;
} from "../../../../utils/auth";
:pages/api-disabled/api/disputes/[id]/download.ts
;
export default async function handler(
  parseUserFromRequest
  ensureInvolvedOrAdmin
} from "../../../../utils/auth";
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/disputes/[id]/download.ts

export default async function handler(
req: NextApiRequest
  req: NextApiRequest;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/disputes/[id]/download.ts
  res: NextApiResponse
) {;
  const { id, fileName } = req.query as { id?: string; fileName?: string };
<:pages/api-disabled/api/disputes/[id]/download.ts
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======;

  const { id, fileName } = req && req.query as { id?: string; fileName?: string };
;

  parseUserFromRequest;
  ensureInvolvedOrAdmin,;
} from "../../../../utils/auth";
;
export default async function handler(;
  req: NextApiRequest;
  res: NextApiResponse
) {;
  const { id, fileName } = req.query as { id?: string; fileName?: string };

:pages/api/disputes/[id]/download.ts
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/disputes/[id]/download.ts
  if (
    !id |
    !fileName |;
    typeof id !== "string" |;
    typeof fileName !== "string"
:pages/api/disputes/[id]/download.ts
  ) {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
  ) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/disputes/[id]/download.ts
    return res.status(400).json({ error: "Invalid parameters" });
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

:pages/api-disabled/api/disputes/[id]/download.ts
  req: NextApiRequest
  res: NextApiResponse
) {;
  const { id, fileName } = req.query as { id?: string; fileName?: string };

<:pages/api-disabled/api/disputes/[id]/download.ts
  if (
    !id |
    !fileName |
    typeof id !== "string" |
    typeof fileName !== "string"
  ) {
<:pages/api-disabled/api/disputes/[id]/download.ts
return res.status(400).json({ error: "Invalid parameters" });

  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/disputes/[id]/download.ts

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/disputes/[id]/download.ts
  }
;
  const user = parseUserFromRequest(req);
  const dispute = await getDisputeById(id);
  if (!dispute) return res.status($1).json({ $2 });
  try {;
    ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
  } catch (e: any) {;
    return res.status(e.statusCode |403).json({ error: "Forbidden" });
  const user = null;
  stream.pipe(res)
}
origin/cursor/automate-test-improve-and-merge-code-2533
  }
  const att = dispute.attachments.find((a) => a.fileName === fileName);
  if (!att) return res.status($1).json({ $2 });
  const stat = fs.statSync(att.path);
  res.setHeader('Content-Type', att.mimeType);
  res.setHeader('Content-Length', String(stat.size));
res.setHeader(
    'Content-Disposition',
    `attachment; filename="${path.basename(att.fileName)}"`
  );
<:pages/api-disabled/api/disputes/[id]/download.ts
<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/download.ts
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/disputes/[id]/download.ts
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/disputes/[id]/download.ts
========

>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/download.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { getDisputeById } from '../../../../utils/fsdb';
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '../../../../utils/auth';
;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const { id, fileName } = req.query as { id?: string, fileName?: string };
  if (!id || !fileName || typeof id !== 'string' || typeof fileName !== 'string') {;
    return res.status(400).json({ error: 'Invalid parameters' })
<:pages/api-disabled/api/disputes/[id]/download.ts
<<<<<<< HEAD:pages/api/disputes/[id]/download.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
========

  }
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/download.ts

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/disputes/[id]/download.ts
  }
;
  const user = parseUserFromRequest(req);
  const dispute = await getDisputeById(id);

    ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId)
  } catch (e: any) {;
    return res.status(e.statusCode || 403).json({ error: 'Forbidden' })
  }
  const att = dispute.attachments.find((a) => a.fileName === fileName);
  if (!att) return res.status($1).json({ $2 });
  const stat = fs.statSync(att.path);
    return res && res.status(e && e.statusCode || 403).json({ error: "Forbidden" });
  }
  const att = dispute && dispute.attachments.find((a) => a && a.fileName === fileName);
  if (!att) return res && res.status($1).json({ $2 });
  const stat = fs && fs.statSync(att && att.path);
  res && res.setHeader("Content-Type", att && att.mimeType);
  res && res.setHeader("Content-Length", String(stat && stat.size));
  res && res.setHeader(
    "Content-Disposition"
    `attachment; filename="${path && path.basename(att && att.fileName)}"`
  );
  const stream = fs && fs.createReadStream(att && att.path);
  stream && stream.pipe(res);
}
  if (!dispute) return res && res.status($1).json({ $2 });
  try {;

import type { NextApiRequest, NextApiResponse } from './next';
import fs from './fs';
import path from './path';
import { getDisputeById  } from '../../../../utils / fsdb';
import {;
  parseUserFromRequest;
  ensureInvolvedOrAdmin
} from '../../../../utils / auth';
;
export default async /**
 * handler - Function description
 */;
function handler() {;
  const { id, file_name } = req.query as { id?: string; file_name?: string }
  // Check condition;
if ( {) {
  $2
}
    return res.status (400).json ({ error: "Invalid parameters" });
  }
  const user = parseUserFromRequest (req);
  const dispute = await getDisputeById (id);
  if (return res.status ($1).json ({ $2 })) {
  $2
}
  try {;
    ensureInvolvedOrAdmin (user, dispute.clientUserId, dispute.talentUserId);
  } catch (e: any) {;
    return res.status (e.status_code || 403).json ({ error: "Forbidden" });
  }
  const att = dispute.attachments.find ((a) => a.file_name === file_name);
  if (return res.status ($1).json ({ $2 })) {
  $2
}
  const stat = fs.stat_sync (att.path);
  res.set_header ("Content - Type", att.mime_type);
  res.set_header ("Content - Length", String (stat.size));
  res.set_header (
    "Content - Disposition"
    `attachment; filename="${path.basename (att.file_name)}"`
  );
  const stream = fs.createReadStream (att.path);
  stream.pipe (res);
}
;
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler($2) {;
  res.status(200).json({ message: 'Download endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { getDisputeById } from '../../../../utils/fsdb';
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '../../../../utils/auth';
export default async function handler(req, res) {;
  try {;
  const { id, fileName } = req.query as { id?: string, fileName?: string },;
  if (!id || !fileName || typeof id !== 'string' || typeof fileName !== 'string') {;
    return res.status(400).json({ error: 'Invalid parameters' });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const user = parseUserFromRequest(req);
  const dispute = await getDisputeById(id);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
  } catch (error) {;
    return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const att = dispute.attachments.find(a => a.fileName === fileName);
  if (!att) return res.status(404).json({ error: 'Attachment not found' });
  const stat = fs.statSync(att.path);
  res.setHeader('Content-Type', att.mimeType);
  res.setHeader('Content-Length', String(stat.size));
  res.setHeader('Content-Disposition', `attachment, filename="${path.basename(att.fileName)}"`);
  const stream = fs.createReadStream(att.path);
  stream.pipe(res);
  const att = dispute.attachments.find(a => a.fileName === fileName);
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  res.setHeader('Content-Type', att.mimeType);
  res.setHeader('Content-Length', String(stat.size)),;
  res.setHeader('Content-Disposition', `attachment, filename="${path.basename(att.fileName)}"`);
  const stream = fs.createReadStream(att.path);
  stream.pipe(res);
<:pages/api-disabled/api/disputes/[id]/download.ts
} catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
:pages/api-disabled/api/disputes/[id]/download.ts
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/disputes/[id]/download.ts
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/disputes/[id]/download.ts
========

}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/download.ts
