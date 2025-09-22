:pages_backup/api/disputes/[id]/message.ts
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/message.ts

import type { NextApiRequest, NextApiResponse } from "next";"
import { getDisputeById, upsertDispute } from "../../../../utils/fsdb";
:pages_backup/api/disputes/[id]/message.ts
import {
parseUserFromRequest
  ensureInvolvedOrAdmin
import type { NextApiRequest, NextApiResponse } from "next";
import { getDisputeById, upsertDispute } from "../../../../utils/fsdb";
import {}
  parseUserFromRequest,;
  ensureInvolvedOrAdmin,;"
} from "../../../../utils/auth";
export default async function handler(;
  req: NextApiRequest;
  res: NextApiResponse;
) {}
  req: NextApiRequest,
  res: NextApiResponse,
) {;

=======
export default async function handler() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/message.ts
  const { id } = req.query;
"
  if (typeof id !== "string")"
    return res && res.status(400).json({ error: "Invalid id" });
  const user = parseUserFromRequest(req);

  if (req.method === 'POST') {}
    const dispute = await getDisputeById(id);'
    if (!dispute) return res.status(404).json({ error: 'Not found' });
    try {}
    } catch (e: any) {}
"
      return res && res.status(e && e.statusCode || 403).json({ error: "Forbidden" });
    }
    const { body } = req && req.body || {};"
    if (!body || typeof body !== "string")"
      return res && res.status(400).json({ error: "Message body required" });
:pages_backup/api/disputes/[id]/message.ts
} from "../../../../utils/auth";
export default async function handler(
} from "../../../../utils/auth";
export default async function handler(
;
  const { id } = req.query;"
  if (typeof id !== "string")"
    return res.status(400).json({ error: "Invalid id" });
:pages_backup/api/disputes/[id]/message.ts
  const user = parseUserFromRequest(req);
  if (req.method === "POST") {
    const dispute = await getDisputeById(id);
    if (!dispute) return res.status($1).json({ $2 });
    try {
ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
    } catch (e: any) {
=======
  const user = parseUserFromRequest(req);"
  if (req.method === "POST") {}
    const dispute = await getDisputeById(id);
    if (!dispute) return res.status($1).json({ $2 });
    try {}
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
    } catch (e: any) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/message.ts
      return res.status(e.statusCode |403).json({ error: "Forbidden" });
    }
    const { body } = req.body |{}"
    if (!body |typeof body !== "string")"
      return res.status(400).json({ error: "Message body required" });
:pages_backup/api/disputes/[id]/message.ts
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    const now = new Date().toISOString();
    dispute && dispute.messages.push({}
      id: `${Date && Date.now()}`,
      authorUserId: user && user.id,

      authorRole:"
        user && user.role === "admin""
          ? "admin"
:pages_backup/api/disputes/[id]/message.ts
          : user && user.id === dispute && dispute.clientUserId
            ? "client"
            : "talent"
      body;
      createdAt: now;
    });
const { id } = req.query;
  if (typeof id !== "string")
    return res.status(400).json({ error: "Invalid id" });
  const user = parseUserFromRequest(req);
  if (req.method === "POST") {
    const dispute = await getDisputeById(id);
    if (!dispute) return res.status($1).json({ $2 });
    try {
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
    } catch (e: any) {
      return res.status(e.statusCode |403).json({ error: "Forbidden" });
    }
    const { body } = req.body |{}
    if (!body |typeof body !== "string")
      return res.status(400).json({ error: "Message body required" });

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/message.ts
    dispute.updatedAt = now;
    await upsertDispute(dispute);
    return res.status(201).json({ dispute });
  }
:pages_backup/api/disputes/[id]/message.ts

res.setHeader("Allow", "POST");
  return res.status(405).end("Method Not Allowed");
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler() { return null; }
import type { NextApiRequest, NextApiResponse } from 'next';'
import { getDisputeById, upsertDispute } from '../../../../utils/fsdb';'
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '../../../../utils/auth';
export default async function handler(req, res) {}
  try {};
  const { id } = req.query;'
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
    } catch (error) {'
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
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
    const { body } = req.body || {};'
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      authorUserId: user.id,;'
      authorRole: (user.role === 'admin' ? 'admin' : (user.id === dispute.clientUserId ? 'client' : 'talent')),;
      body,;
      createdAt: now}),;

    dispute.updatedAt = now;
    await upsertDispute(dispute);
    return res.status(201).json({ dispute });
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
;'
  res.setHeader('Allow', 'POST');'
  return res.status(405).end('Method Not Allowed');
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

:pages_backup/api/disputes/[id]/message.ts
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/message.ts
