
<<<<<<< HEAD:pages/api/fraud/admin/action.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/fraud/admin/action.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { getFraudStore } from "../../../../utils/fraud/store";
import { AdminActionType } from "../../../../utils/fraud/types";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  try {
  if (req && req.method !== "POST") {
    return res && res.status(405).json({ error: "Method not allowed" });

  }
<<<<<<< HEAD:pages/api/fraud/admin/action.ts
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  const { fraudId, action, reason, adminId } = req && req.body || {};
  if (!fraudId || !action) {
    return res && res.status(400).json({ error: "Missing fraudId or action" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/fraud/admin/action.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getFraudStore } from '../../../../utils/fraud/store';
import { AdminActionType } from '../../../../utils/fraud/types';
function ensureAdmin(req: NextApiRequest): boolean {
  const token = req.headers['x-admin-token'];
  if (!process.env.ADMIN_TOKEN) return true; // allow if not configured
  return token === process.env.ADMIN_TOKEN;
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return
  }
  if (!ensureAdmin(req)) {
    res.status(401).json({ error: 'Unauthorized' });
    return
  }
  const { fraudId, action, reason, adminId } = req.body || {};
  if (!fraudId || !action) {
    res.status(400).json({ error: 'Missing fraudId or action' });
    return
  }
  const { fraudId, action, reason, adminId } = req && req.body || {};
  if (!fraudId || !action) {
    return res && res.status(400).json({ error: "Missing fraudId or action" });

import type { NextApiRequest, NextApiResponse } from "next";
import { getFraudStore } from "../../../../utils/fraud/store";
import { AdminActionType } from "../../../../utils/fraud/types";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST") {;
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { fraudId, action, reason, adminId } = req.body |{}
  if (!fraudId |!action) {
    return res.status(400).json({ error: "Missing fraudId or action" });

<<<<<<< HEAD:pages/api/fraud/admin/action.ts
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/fraud/admin/action.ts
import { getFraudStore } from '../../../../utils/fraud/store';
import { AdminActionType } from '../../../../utils/fraud/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { fraudId, action, reason, adminId } = req.body || {};
  if (!fraudId || !action) {
    res.status(400).json({ error: 'Missing fraudId or action' });
return;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }

  const act = (action as string).toUpperCase() as AdminActionType;
  if (!['SUSPEND', 'WARN', 'IGNORE'].includes(act)) {
    res.status(400).json({ error: 'Invalid action' });
    return;
origin/cursor/automate-test-improve-and-merge-code-2533
  }

  const store = getFraudStore();
<<<<<<< HEAD:pages/api/fraud/admin/action.ts
<<<<<<< HEAD
  const fraud = store && store.getById(fraudId);
  if (!fraud) {
    return res && res.status(404).json({ error: "Fraud record not found" });
  }
  const adminAction: AdminActionType = {
<<<<<<< HEAD
=======

    id: `action-${Date && Date.now()}`,
    fraudId,
    action,
    reason,
    adminId,
    timestamp: new Date().toISOString(),
  };

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  store && store.addAdminAction(adminAction);
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
}

import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { getFraudStore } from '../../../../utils/fraud/store';
import { AdminActionType } from '../../../../utils/fraud/types';
function ensureAdmin(req: NextApiRequest): boolean {;
  const token = req.headers['x-admin-token'];
  if (!process.env.ADMIN_TOKEN) return true, // allow if not configured;
  return token === process.env.ADMIN_TOKEN;
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
=======
  store.addAdminAction(adminAction);

}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD


<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
  store.addAdminAction(adminAction);

}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  store.addAdminAction(adminAction);

}



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/fraud/admin/action.ts
import type { NextApiRequest, NextApiResponse } from './next';
import { getFraudStore  } from '../../../../utils / fraud / store';
import { AdminActionType  } from '../../../../utils / fraud / types';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    return res.status (405).json ({ error: "Method not allowed" });
  }
  const { fraud_id, action, reason, admin_id } = req.body || {}
  // Check condition
if ( {) {
  $2
}
    return res.status (400).json ({ error: "Missing fraud_id or action" });
  }
  const store = getFraudStore ();
  const fraud = store.getById (fraud_id);
  // Check condition
if ( {) {
  $2
}
    return res.status (404).json ({ error: "Fraud record not found" });
  }
  const admin_action: AdminActionType = {
    id: `action-${Date.now ()}`,
    fraud_id,
    action,
    reason,
    admin_id,
    timestamp: new Date ().toISOString (),
  }
;
  store.addAdminAction (admin_action);
;
  return res.status (200).json ({ success: true, action: admin_action });
}

<<<<<<< HEAD:pages/api/fraud/admin/action.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { getFraudStore } from '../../../../utils/fraud/store';
import { AdminActionType } from '../../../../utils/fraud/types';
function ensureAdmin(req: NextApiRequest): boolean {;
  const token = req.headers['x-admin-token'];
  if (!process.env.ADMIN_TOKEN) return true, // allow if not configured;
  return token === process.env.ADMIN_TOKEN;
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
;
export default async function handler(req, res) {
  try {
  if (req.method !== '$1') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
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
  if (!ensureAdmin(req)) {;
    res.status(401).json({ error: 'Unauthorized' });
    return;
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
;
  const { fraudId, action, reason, adminId } = req.body || {};
  if (!fraudId || !action) {;
    res.status(400).json({ error: 'Missing fraudId or action' });
    return;
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
;
  const act = (action as string).toUpperCase() as AdminActionType;
  if (!['SUSPENDWARNIGNORE'].includes(act)) {;
    res.status(400).json({ error: 'Invalid action' });
    return;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/fraud/admin/action.ts
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  const store = getFraudStore();
  await store.recordAction({ fraudId, action: act, adminId: adminId || null, reason: reason || null });
  const newStatus = act === 'IGNORE' ? 'IGNORED' : act === 'WARN' ? 'WARNED' : 'SUSPENDED';
  await store.updateEventStatus(fraudId, newStatus);
  res.status(200).json({ ok: true, status: newStatus });
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
<<<<<<< HEAD:pages/api/fraud/admin/action.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======


<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/fraud/admin/action.ts
  await store.recordAction({
    fraudId,
    action: act,
    adminId: adminId || null,
    reason: reason || null,
  });
  const newStatus =
    act === 'IGNORE' ? 'IGNORED' : act === 'WARN' ? 'WARNED' : 'SUSPENDED';
  await store.updateEventStatus(fraudId, newStatus);

  res.status(200).json({ ok: true, status: newStatus });
}
<<<<<<< HEAD:pages/api/fraud/admin/action.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/fraud/admin/action.ts
