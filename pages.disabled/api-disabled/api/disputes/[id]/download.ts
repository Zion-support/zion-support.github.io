<<<<<<< HEAD:pages_backup/api/disputes/[id]/download.ts
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/download.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/download.ts
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
========
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/download.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/disputes/[id]/download.ts
import { getDisputeById } from '../../../../utils/fsdb';
import {
  parseUserFromRequest;
  ensureInvolvedOrAdmin;
} from '../../../../utils/auth';
<<<<<<< HEAD:pages_backup/api/disputes/[id]/download.ts
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/download.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/disputes/[id]/download.ts
========
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/download.ts
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/disputes/[id]/download.ts

<<<<<<< HEAD:pages_backup/api/disputes/[id]/download.ts
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { getDisputeById } from "../../../../utils/fsdb";
import {
<<<<<<< HEAD:pages_backup/api/disputes/[id]/download.ts
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/download.ts
<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/download.ts
<<<<<<< HEAD:pages/api/disputes/[id]/download.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

  const { id, fileName } = req && req.query as { id?: string; fileName?: string };
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/disputes/[id]/download.ts

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
  parseUserFromRequest;
=======

  parseUserFromRequest

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/disputes/[id]/download.ts
  ensureInvolvedOrAdmin,;
} from "../../../../utils/auth";
<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/download.ts
;
export default async function handler(
=======
<<<<<<< HEAD:pages/api/disputes/[id]/download.ts
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  parseUserFromRequest
  ensureInvolvedOrAdmin
} from "../../../../utils/auth";
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/disputes/[id]/download.ts

export default async function handler(
<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/download.ts
========


  parseUserFromRequest

  ensureInvolvedOrAdmin,;
} from "../../../../utils/auth";

>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/download.ts
=======


  parseUserFromRequest

  ensureInvolvedOrAdmin,;
} from "../../../../utils/auth";

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  parseUserFromRequest;


  parseUserFromRequest

  const { id, fileName } = req && req.query as { id?: string; fileName?: string };

  const { id, fileName } = req && req.query as { id?: string; fileName?: string };

  parseUserFromRequest,

  ensureInvolvedOrAdmin,;
} from "../../../../utils/auth";

export default async function handler(

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/disputes/[id]/download.ts
  req: NextApiRequest
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
  req: NextApiRequest;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/disputes/[id]/download.ts
  res: NextApiResponse
) {;
  const { id, fileName } = req.query as { id?: string; fileName?: string };
<<<<<<< HEAD:pages_backup/api/disputes/[id]/download.ts
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/download.ts
<<<<<<< HEAD:pages/api/disputes/[id]/download.ts
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/disputes/[id]/download.ts
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======;

=======
import type { NextApiRequest, NextApiResponse } from "next";"
import fs from "fs";"
import path from "path";"
import { getDisputeById } from "../../../../utils/fsdb";
import {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/download.ts
  const { id, fileName } = req && req.query as { id?: string; fileName?: string };
;

<<<<<<< HEAD:pages_backup/api/disputes/[id]/download.ts
  parseUserFromRequest;
  ensureInvolvedOrAdmin,;
} from "../../../../utils/auth";
;
export default async function handler(;
  req: NextApiRequest;
  res: NextApiResponse
) {;
  const { id, fileName } = req.query as { id?: string; fileName?: string };

<<<<<<< HEAD:pages/api/disputes/[id]/download.ts
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
<<<<<<< HEAD:pages/api/disputes/[id]/download.ts
  ) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
========

>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/download.ts

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
  ) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/disputes/[id]/download.ts
    return res.status(400).json({ error: "Invalid parameters" });
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======







  parseUserFromRequest,
  ensureInvolvedOrAdmin,;"
} from "../../../../utils/auth";

export default async function handler() { return null; }
  const { id, fileName } = req.query as { id?: string; fileName?: string };

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======



>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/disputes/[id]/download.ts

  const { id, fileName } = req && req.query as { id?: string; fileName?: string };


  parseUserFromRequest,
  ensureInvolvedOrAdmin,;"
} from "../../../../utils/auth";

export default async function handler() { return null; }
  const { id, fileName } = req.query as { id?: string; fileName?: string };






  if (
    !id |
    !fileName |"
    typeof id !== "string" |"
    typeof fileName !== "string"
  ) {}
"
    return res.status(400).json({ error: "Invalid parameters" });


  }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/download.ts

<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/download.ts
=======

  parseUserFromRequest

  const { id, fileName } = req && req.query as { id?: string; fileName?: string };

  parseUserFromRequest,

  ensureInvolvedOrAdmin,;
} from "../../../../utils/auth";

origin/cursor/automate-test-improve-and-merge-code-2533
export default async function handler(
<<<<<<< HEAD:pages_backup/api/disputes/[id]/download.ts
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/disputes/[id]/download.ts
  req: NextApiRequest
  res: NextApiResponse
) {;
  const { id, fileName } = req.query as { id?: string; fileName?: string };

<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/download.ts
========


>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/download.ts
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
req: NextApiRequest,
  res: NextApiResponse,
) {;
  const { id, fileName } = req.query as { id?: string; fileName?: string };

  const { id, fileName } = req && req.query as { id?: string; fileName?: string };


  parseUserFromRequest
  ensureInvolvedOrAdmin
} from "../../../../utils/auth";

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  const { id, fileName } = req.query as { id?: string; fileName?: string }
  parseUserFromRequest,
  ensureInvolvedOrAdmin,;
} from "../../../../utils/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {;
  const { id, fileName } = req.query as { id?: string; fileName?: string };

  const { id, fileName } = req && req.query as { id?: string; fileName?: string };


  parseUserFromRequest,
  ensureInvolvedOrAdmin,;
} from "../../../../utils/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {;
  const { id, fileName } = req.query as { id?: string; fileName?: string };

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/disputes/[id]/download.ts
  if (
    !id |
    !fileName |
    typeof id !== "string" |
    typeof fileName !== "string"
  ) {
<<<<<<< HEAD:pages_backup/api/disputes/[id]/download.ts
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/download.ts
<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/download.ts
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
========
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/download.ts
    return res.status(400).json({ error: "Invalid parameters" });
=======
    return res.status(400).json({ error: "Invalid parameters" });
=======




    return res.status(400).json({ error: "Invalid parameters" });
  }
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/disputes/[id]/download.ts


  }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/disputes/[id]/download.ts

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/disputes/[id]/download.ts
  }
;
  const user = parseUserFromRequest(req);
  const dispute = await getDisputeById(id);
  if (!dispute) return res.status($1).json({ $2 });
<<<<<<< HEAD:pages_backup/api/disputes/[id]/download.ts
  try {;
    ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
<<<<<<< HEAD:pages_backup/api/disputes/[id]/download.ts
<<<<<<< HEAD
  } catch (e: any) {;
=======
  try {}
    ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
  } catch (e: any) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/download.ts
=======
  } catch (e: any) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  } catch (e: any) {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/disputes/[id]/download.ts
    return res.status(e.statusCode |403).json({ error: "Forbidden" });
  const user = null;
  stream.pipe(res)
}
origin/cursor/automate-test-improve-and-merge-code-2533
  }
  const att = dispute.attachments.find((a) => a.fileName === fileName);
  if (!att) return res.status($1).json({ $2 });
<<<<<<< HEAD:pages_backup/api/disputes/[id]/download.ts
  const stat = fs.statSync(att.path);
  res.setHeader('Content-Type', att.mimeType);
  res.setHeader('Content-Length', String(stat.size));
res.setHeader(
    'Content-Disposition';
    `attachment; filename="${path.basename(att.fileName)}"`
  );
<<<<<<< HEAD:pages_backup/api/disputes/[id]/download.ts
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/download.ts
<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/download.ts
=======
<<<<<<< HEAD:pages/api/disputes/[id]/download.ts
=======
    return res && res.status(400).json({ error: "Invalid parameters" });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======




  const stream = fs.createReadStream(att.path);
  stream.pipe(res);
}

return res && res.status(400).json({ error: "Invalid parameters" });
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/disputes/[id]/download.ts
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
<<<<<<< HEAD:pages_backup/api/disputes/[id]/download.ts
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/download.ts
<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/download.ts
<<<<<<< HEAD:pages/api/disputes/[id]/download.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/disputes/[id]/download.ts
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
========
=======
  const stat = fs.statSync(att.path);"
  res.setHeader("Content-Type", att.mimeType);"
  res.setHeader("Content-Length", String(stat.size));
  res.setHeader("
    "Content-Disposition""
    `attachment; filename="${path.basename(att.fileName)}"`
  );
=======
=======







  }
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/disputes/[id]/download.ts




  }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31







import type { NextApiRequest, NextApiResponse } from 'next';'
import fs from 'fs';'
import path from 'path';'
import { getDisputeById } from '../../../../utils/fsdb';'
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '../../../../utils/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {};
  const { id, fileName } = req.query as { id?: string, fileName?: string };'
  if (!id || !fileName || typeof id !== 'string' || typeof fileName !== 'string') {'
    return res.status(400).json({ error: 'Invalid parameters' })







  }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/download.ts




  }
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/download.ts

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/disputes/[id]/download.ts
  }
;
  const user = parseUserFromRequest(req);
  const dispute = await getDisputeById(id);
<<<<<<< HEAD
<<<<<<< HEAD
=======
  if (!dispute) return res && res.status($1).json({ $2 });
<<<<<<< HEAD:pages_backup/api/disputes/[id]/download.ts
  try {
<<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/download.ts
<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/download.ts
=======;
========
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/download.ts
=======
  if (!dispute) return res && res.status($1).json({ $2 });

  try {
<<<<<<< HEAD:pages_backup/api/disputes/[id]/download.ts
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/disputes/[id]/download.ts
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

<<<<<<< HEAD:pages_backup/api/disputes/[id]/download.ts

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/disputes/[id]/download.ts
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
<<<<<<< HEAD:pages_backup/api/disputes/[id]/download.ts
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/download.ts
<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/download.ts
  } catch (error) {;
=======
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/disputes/[id]/download.ts
  } catch (error) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/disputes/[id]/download.ts
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

try {




<<<<<<< HEAD:pages_backup/api/disputes/[id]/download.ts
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/download.ts
<<<<<<< HEAD:pages/api/disputes/[id]/download.ts
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/disputes/[id]/download.ts
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
=======
  try {}
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/download.ts
=======





}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/disputes/[id]/download.ts
