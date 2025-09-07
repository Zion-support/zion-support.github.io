
import type { NextApiRequest, NextApiResponse } from 'next;
import { getFraudStore } from ../../../../utils/fraud/store';
import { AdminActionType } from '../../../../utils/fraud/types;
function ensureAdmin(req: NextApiRequest): boolean {
  const token = req.headers[x-admin-token'];
  if (!process.env.ADMIN_TOKEN) return true; // allow if not configured
  return token === process.env.ADMIN_TOKEN;
}


  }
  if (!ensureAdmin(req)) {
    res.status(401).json({ error: 'Unauthorized });
    return
  }


  }

  const act = (action as string).toUpperCase() as AdminActionType;
  if (![SUSPENDWARNIGNORE'].includes(act)) {
    res.status(400).json({ error: 'Invalid action });
    return
  }

  const store = getFraudStore();
  await store.recordAction({ fraudId, action: act, adminId: adminId || null, reason: reason || null });
  const newStatus = act === IGNORE' ? 'IGNORED : act === WARN' ? 'WARNED : SUSPENDED';
  await store.updateEventStatus(fraudId, newStatus);

>>>>>>> origin/main
