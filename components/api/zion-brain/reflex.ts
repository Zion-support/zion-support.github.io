import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import {
  appendLog,
  evaluateReflexes,
  readState,
  writeState,;
} from '@/utils/zionBrain';
=======
import { appendLog, evaluateReflexes, readState, writeState } from '@/utils/zionBrain';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

function isAuthorized(req: NextApiRequest): boolean {
  const token = req.headers['x-admin-token'] || req.query.token;
  const superToken = process.env.SUPERADMIN_TOKEN;
<<<<<<< HEAD
  return !superToken || token === superToken;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!isAuthorized(req))
    return res.status(401).json({ error: 'Unauthorized' });

  if (req.method === 'GET') {
    const state = readState<{ metrics?: unknown }>();
    return res.status(200).json({ metrics: state.metrics || {} });
=======
  return !superToken || token === superToken
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!isAuthorized(req)) return res.status(401).json({ error: 'Unauthorized' });

  if (req.method === 'GET') {
    const state = readState<{ metrics?: unknown }>();
    return res.status(200).json({ metrics: state.metrics || {} })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  if (req.method === 'POST') {
    const started = Date.now();
    try {
      const metrics = req.body || {};
      const triggers = evaluateReflexes(metrics);
      const state = readState<any>();
      state.metrics = metrics;
      state.lastTriggers = triggers;
      writeState(state);
      const latencyMs = Date.now() - started;

<<<<<<< HEAD
      appendLog({
        module: 'reflex',
        type: 'metrics',
        status: 'ok',
        latencyMs,
        payload: { metrics, triggers },
      });
      return res.status(200).json({ triggers });
    } catch (e: any) {
      appendLog({
        module: 'reflex',
        type: 'metrics',
        status: 'error',
        payload: { error: e?.message || 'unknown' },
      });
      return res.status(500).json({ error: 'Reflex failure' });
=======
      appendLog({ module: 'reflex', type: 'metrics', status: 'ok', latencyMs, payload: { metrics, triggers } });
      return res.status(200).json({ triggers })
    } catch (e: any) {
      appendLog({ module: 'reflex', type: 'metrics', status: 'error', payload: { error: e?.message || 'unknown' } });
      return res.status(500).json({ error: 'Reflex failure' })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
