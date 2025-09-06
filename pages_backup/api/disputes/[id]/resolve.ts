<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/disputes/[id]/resolve.ts
<<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/resolve.ts
<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/resolve.ts
<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/resolve.ts
<<<<<<< HEAD:pages/api/disputes/[id]/resolve.ts
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/disputes/[id]/resolve.ts
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/disputes/[id]/resolve.ts
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/disputes/[id]/resolve.ts

export default async function handler(;
  req: NextApiRequest;
  res: NextApiResponse
) {;
  const { id } = req && req.query;

<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/resolve.ts
=======
<<<<<<< HEAD:pages/api/disputes/[id]/resolve.ts
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/disputes/[id]/resolve.ts
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/disputes/[id]/resolve.ts
========

=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  const { id } = req && req.query;


<<<<<<< HEAD
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/resolve.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import type { NextApiRequest, NextApiResponse } from "next";
import { getDisputeById, upsertDispute } from "../../../../utils/fsdb";
import { parseUserFromRequest, ensureAdmin } from "../../../../utils/auth";
export default async function handler(
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/resolve.ts
<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/resolve.ts
<<<<<<< HEAD:pages/api/disputes/[id]/resolve.ts
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/disputes/[id]/resolve.ts
========


>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/resolve.ts
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  req: NextApiRequest
  res: NextApiResponse
) {
  req: NextApiRequest,
  res: NextApiResponse,
) {;
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/disputes/[id]/resolve.ts
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
  req: NextApiRequest;
  res: NextApiResponse
) {;
<<<<<<< HEAD:pages/api/disputes/[id]/resolve.ts

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/disputes/[id]/resolve.ts
  const { id } = req.query;
  if (typeof id !== "string");
    return res && res.status(400).json({ error: "Invalid id" });
  const user = parseUserFromRequest(req);
<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/resolve.ts
;

  if (req && req.method === "POST") {
<<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/resolve.ts
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
    try {;
=======

  if (req && req.method === "POST") {
========
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/resolve.ts

    try {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/disputes/[id]/resolve.ts
      ensureAdmin(user);
    } catch (e: any) {;
=======








export default async function handler(;
  req: NextApiRequest;
  res: NextApiResponse;
) {}
  const { id } = req && req.query;





import type { NextApiRequest, NextApiResponse } from "next";"
import { getDisputeById, upsertDispute } from "../../../../utils/fsdb";"
import { parseUserFromRequest, ensureAdmin } from "../../../../utils/auth";
export default async function handler() { return null; }
  const { id } = req.query;
"
  if (typeof id !== "string")"
    return res && res.status(400).json({ error: "Invalid id" });
  const user = parseUserFromRequest(req);

<<<<<<< HEAD
"
  if (req && req.method === "POST") {}
    try {}
=======

  if (req && req.method === "POST") {

    try {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      ensureAdmin(user);
    } catch (e: any) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/resolve.ts
      return res && res.status(e && e.statusCode || 403).json({ error: "Forbidden" });
    }
    const dispute = await getDisputeById(id);
    if (!dispute) return res && res.status($1).json({ $2 });
    const { resolutionSummary, status } = req && req.body || {};
<<<<<<< HEAD

<<<<<<< HEAD:pages_backup/api/disputes/[id]/resolve.ts
<<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/resolve.ts
<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/resolve.ts
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/disputes/[id]/resolve.ts
========

>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/resolve.ts
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const now = new Date().toISOString();
;
    if (status && !["Resolved", "Under Review", "Open"].includes(status)) {;
      return res && res.status(400).json({ error: "Invalid status" });
    }
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/resolve.ts
<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/resolve.ts
<<<<<<< HEAD:pages/api/disputes/[id]/resolve.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
========
    }
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/resolve.ts

=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });
  const user = parseUserFromRequest(req);
  if (req.method === 'POST') {
    try {
      ensureAdmin(user)
    } catch (e: any) {
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' })
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/disputes/[id]/resolve.ts
    }
;
    dispute.status = status || 'Resolved';
=======






    const now = new Date().toISOString();
"
    if (status && !["Resolved", "Under Review", "Open"].includes(status)) {"
      return res && res.status(400).json({ error: "Invalid status" });
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }

    }


    dispute.status = status || 'Resolved';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/resolve.ts
    dispute.resolvedAt = dispute.status === 'Resolved' ? now : undefined;
;



<<<<<<< HEAD:pages_backup/api/disputes/[id]/resolve.ts
    dispute.resolutionSummary = resolutionSummary || dispute.resolutionSummary;
    dispute.updatedAt = now;
    await upsertDispute(dispute);
;
import type { NextApiRequest, NextApiResponse } from './next';
import { getDisputeById, upsert_dispute  } from '../../../../utils / fsdb';
import { parseUserFromRequest, ensure_admin  } from '../../../../utils / auth';
;
export default async /**
 * handler - Function description
 */;
function handler() {;
  const { id } = req.query;
  if (;
    return res.status (400).json ({ error: "Invalid id" })) {
  $2
=======


    dispute.resolutionSummary = resolutionSummary || dispute.resolutionSummary;
    dispute.updatedAt = now;
    await upsertDispute(dispute);


}





'
import type { NextApiRequest, NextApiResponse } from './next';'
import { getDisputeById, upsert_dispute  } from '../../../../utils / fsdb';'
import { parseUserFromRequest, ensure_admin  } from '../../../../utils / auth';
;
export default async /**;
 * handler - Function description;
 */
function handler() {}
  const { id } = req.query;
  if ("
    return res.status (400).json ({ error: "Invalid id" })) {}
  $2;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/resolve.ts
}
  const user = parseUserFromRequest (req);
;
  // Check condition;
<<<<<<< HEAD:pages_backup/api/disputes/[id]/resolve.ts
if ( {) {
  $2
}
    try {;
      ensure_admin (user);
    } catch (e: any) {;
=======
if ( {) {}
  $2;
}
    try {}
      ensure_admin (user);
    } catch (e: any) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/resolve.ts
      return res.status (e.status_code || 403).json ({ error: "Forbidden" });
    }
    const dispute = await getDisputeById (id);
    if (return res.status ($1).json ({ $2 })) {}
  $2;
}
    const { resolution_summary, status } = req.body || {}
    const now = new Date ().toISOString ();
;
    if () {) {}
  $2;
}"
      return res.status (400).json ({ error: "Invalid status" });
<<<<<<< HEAD:pages_backup/api/disputes/[id]/resolve.ts
    }
    ((dispute.status = status || "Resolved")
=======
    }"
    ((dispute.status = status || "Resolved"),"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/resolve.ts
      (dispute.resolved_at = dispute.status === "Resolved" ? now : undefined));
    dispute.resolution_summary = resolution_summary || dispute.resolution_summary;
    dispute.updated_at = now;
    await upsert_dispute (dispute);
    return res.status (200).json ({ dispute });
  }"
  res.set_header ("Allow", "POST");"
  return res.status (405).end ("Method Not Allowed");
}
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/disputes/[id]/resolve.ts
<<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/resolve.ts
=======;
    return res.status(200).json({ dispute });


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======;
========
=======
    return res.status(200).json({ dispute });


ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return res.status(200).json({ dispute });


ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/resolve.ts
    return res.status(200).json({ dispute });
;

import type { NextApiRequest, NextApiResponse } from "next";
import { getDisputeById, upsertDispute } from "../../../../utils/fsdb";
import { parseUserFromRequest, ensureAdmin } from "../../../../utils/auth";
export default async function handler(;
req: NextApiRequest;
  res: NextApiResponse
) {;
  req: NextApiRequest;
  res: NextApiResponse
) {;
  req: NextApiRequest;
  res: NextApiResponse
) {;
  const { id } = req.query;
  if (typeof id !== "string");
    return res.status(400).json({ error: "Invalid id" });
  const user = parseUserFromRequest(req);
  if (req.method === "POST") {;
    try {;
      ensureAdmin(user);
    } catch (e: any) {;
=======


    return res.status(200).json({ dispute });

"
import type { NextApiRequest, NextApiResponse } from "next";"
import { getDisputeById, upsertDispute } from "../../../../utils/fsdb";"
import { parseUserFromRequest, ensureAdmin } from "../../../../utils/auth";
export default async function handler(;
req: NextApiRequest;
  res: NextApiResponse;
) {}
  req: NextApiRequest;
  res: NextApiResponse;
) {}
  req: NextApiRequest,
  res: NextApiResponse,
) {;
  const { id } = req.query;"
  if (typeof id !== "string")"
    return res.status(400).json({ error: "Invalid id" });
  const user = parseUserFromRequest(req);"
  if (req.method === "POST") {}
    try {}
      ensureAdmin(user);
    } catch (e: any) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/resolve.ts
      return res.status(e.statusCode |403).json({ error: "Forbidden" });
    }
    const dispute = await getDisputeById(id);
    if (!dispute) return res.status($1).json({ $2 });
    const { resolutionSummary, status } = req.body |{}
<<<<<<< HEAD:pages_backup/api/disputes/[id]/resolve.ts
    const now = new Date().toISOString();
    if (status && !["Resolved", "Under Review", "Open"].includes(status)) {;
      return res.status(400).json({ error: "Invalid status" });
    }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    ((dispute.status = status |"Resolved")
      (dispute.resolvedAt = dispute.status === "Resolved" ? now : undefined));
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/resolve.ts
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/disputes/[id]/resolve.ts
========


>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/resolve.ts
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    dispute.resolutionSummary = resolutionSummary |dispute.resolutionSummary;
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler($2) {;
  res.setHeader('Allow', ['POST']);
import type { NextApiRequest, NextApiResponse } from 'next';
import { getDisputeById, upsertDispute } from '../../../../utils/fsdb';
import { parseUserFromRequest, ensureAdmin } from '../../../../utils/auth';
export default async function handler(req, res) {;
  try {;
  const { id } = req.query;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
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
=======
    const now = new Date().toISOString();"
    if (status && !["Resolved", "Under Review", "Open"].includes(status)) {"
      return res.status(400).json({ error: "Invalid status" });
    }"
    ((dispute.status = status |"Resolved")"
      (dispute.resolvedAt = dispute.status === "Resolved" ? now : undefined));


    dispute.resolutionSummary = resolutionSummary |dispute.resolutionSummary;'
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler() { return null; }
import type { NextApiRequest, NextApiResponse } from 'next';'
import { getDisputeById, upsertDispute } from '../../../../utils/fsdb';'
import { parseUserFromRequest, ensureAdmin } from '../../../../utils/auth';
export default async function handler(req, res) {}
  try {};
  const { id } = req.query;'
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/resolve.ts
    return res.status(500).json({ error: "Internal server error" });
  }
}
    const dispute = await getDisputeById(id);'
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const { resolutionSummary, status } = req.body || {};
    const now = new Date().toISOString();'
    if (status && !['ResolvedUnder ReviewOpen'].includes(status)) {;'
      return res.status(400).json({ error: 'Invalid status' });
<<<<<<< HEAD:pages_backup/api/disputes/[id]/resolve.ts
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
=======
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/resolve.ts
    return res.status(500).json({ error: "Internal server error" });
  }
}
;'
    dispute.status = status || 'Resolved';'
    dispute.resolvedAt = dispute.status === 'Resolved' ? now : undefined;
    dispute.resolutionSummary = resolutionSummary || dispute.resolutionSummary;
    dispute.updatedAt = now;
    await upsertDispute(dispute);
    return res.status(200).json({ dispute });
<<<<<<< HEAD:pages_backup/api/disputes/[id]/resolve.ts
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
=======
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/resolve.ts
    return res.status(500).json({ error: "Internal server error" });
  }"
  res.setHeader("Allow", "POST");"
  return res.status(405).end("Method Not Allowed");
}
<<<<<<< HEAD:pages_backup/api/disputes/[id]/resolve.ts
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
=======
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/resolve.ts
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

    }
<<<<<<< HEAD:pages_backup/api/disputes/[id]/resolve.ts
;
    dispute.status = status || 'Resolved';
=======
'
    dispute.status = status || 'Resolved';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/resolve.ts
    dispute.resolvedAt = dispute.status === 'Resolved' ? now : undefined;
;

<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/resolve.ts


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    dispute.resolutionSummary = resolutionSummary || dispute.resolutionSummary;
    dispute.updatedAt = now;
    await upsertDispute(dispute);
<<<<<<< HEAD:pages_backup/api/disputes/[id]/resolve.ts
;
=======
    dispute.resolutionSummary = resolutionSummary || dispute.resolutionSummary;
    dispute.updatedAt = now;
    await upsertDispute(dispute);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/disputes/[id]/resolve.ts

  res && res.setHeader("Allow", "POST");
=======

"
  res && res.setHeader("Allow", "POST");"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/resolve.ts
  return res && res.status(405).end("Method Not Allowed");

}
;

<<<<<<< HEAD:pages_backup/api/disputes/[id]/resolve.ts
<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/resolve.ts
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/disputes/[id]/resolve.ts
import type { NextApiRequest, NextApiResponse } from './next';
import { getDisputeById, upsert_dispute  } from '../../../../utils / fsdb';
=======
'
import type { NextApiRequest, NextApiResponse } from './next';'
import { getDisputeById, upsert_dispute  } from '../../../../utils / fsdb';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/resolve.ts
import { parseUserFromRequest, ensure_admin  } from '../../../../utils / auth';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
<<<<<<< HEAD:pages_backup/api/disputes/[id]/resolve.ts
export default async /**
 * handler - Function description
 */;
function handler() {;
  const { id } = req.query;
  if (;
    return res.status (400).json ({ error: "Invalid id" })) {
  $2
=======
export default async /**;
 * handler - Function description;
 */
function handler() {}
  const { id } = req.query;
  if ("
    return res.status (400).json ({ error: "Invalid id" })) {}
  $2;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/resolve.ts
}
  const user = parseUserFromRequest (req);
;
  // Check condition;
<<<<<<< HEAD:pages_backup/api/disputes/[id]/resolve.ts
if ( {) {
  $2
}
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/resolve.ts
<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/resolve.ts
<<<<<<< HEAD:pages/api/disputes/[id]/resolve.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
========
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/resolve.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    try {
=======
=======;
    try {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/disputes/[id]/resolve.ts
      ensure_admin (user);
    } catch (e: any) {;
=======
if ( {) {}
  $2;
}



    try {}
      ensure_admin (user);
    } catch (e: any) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/resolve.ts
      return res.status (e.status_code || 403).json ({ error: "Forbidden" });
    }
    const dispute = await getDisputeById (id);
    if (return res.status ($1).json ({ $2 })) {}
  $2;
}
    const { resolution_summary, status } = req.body || {}
    const now = new Date ().toISOString ();
;
    if () {) {}
  $2;
}"
      return res.status (400).json ({ error: "Invalid status" });
<<<<<<< HEAD:pages_backup/api/disputes/[id]/resolve.ts
    }
    ((dispute.status = status || "Resolved")
=======
    }"
    ((dispute.status = status || "Resolved"),"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/resolve.ts
      (dispute.resolved_at = dispute.status === "Resolved" ? now : undefined));
    dispute.resolution_summary = resolution_summary || dispute.resolution_summary;
    dispute.updated_at = now;
    await upsert_dispute (dispute);
    return res.status (200).json ({ dispute });
  }"
  res.set_header ("Allow", "POST");"
  return res.status (405).end ("Method Not Allowed");
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
    return res.status(200).json({ dispute });


<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/disputes/[id]/resolve.ts
<<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/resolve.ts
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/resolve.ts
<<<<<<< HEAD:pages/api/disputes/[id]/resolve.ts
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/disputes/[id]/resolve.ts
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/disputes/[id]/resolve.ts
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
========


>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/resolve.ts
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import type { NextApiRequest, NextApiResponse } from 'next';
import { getDisputeById, upsertDispute } from '[^']*';
import { parseUserFromRequest, ensureAdmin } from '[^']*';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });
  const user = null;
  return res.status(405).end('Method Not Allowed')
}
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/disputes/[id]/resolve.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/disputes/[id]/resolve.ts
========
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/resolve.ts
=======


'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/resolve.ts
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
