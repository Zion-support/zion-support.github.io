import type { NextApiRequest, NextApiResponse } from 'next';
import { getFraudStore } from '../../../../utils/fraud/store';
import { AdminActionType } from '../../../../utils/fraud/types';
  }

  const { fraudId, action, reason, adminId } = req.body || {};
  if (!fraudId || !action) {
    res.status(400).json({ error: 'Missing fraudId or action' });
    return;
  }

  const act = (action as string).toUpperCase() as AdminActionType;
  if (!['SUSPEND', 'WARN', 'IGNORE'].includes(act)) {
    res.status(400).json({ error: 'Invalid action' });
    return;
  }

  const store = getFraudStore();
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