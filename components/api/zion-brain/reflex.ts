import type { NextApiRequest, NextApiResponse } from 'next';
=======
import { appendLog, evaluateReflexes, readState, writeState } from '@/utils/zionBrain';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

function isAuthorized(req: NextApiRequest): boolean {
  const token = req.headers['x-admin-token'] || req.query.token,
  const superToken = process.env.SUPERADMIN_TOKEN,


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!isAuthorized(req)) return res.status(401).json({ error: 'Unauthorized' }),

  if (req.method === 'GET') {
    const state = readState<{ metrics?: unknown }>(),

=======
    return res.status(200).json({ metrics: state.metrics || {} })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  if (req.method === 'POST') {
    const started = Date.now(),
    try {
      const metrics = req.body || {},
      const triggers = evaluateReflexes(metrics),
      const state = readState<any>(),
      state.metrics = metrics,
      state.lastTriggers = triggers,
      writeState(state),
      const latencyMs = Date.now() - started,


=======
      appendLog({ module: 'reflex', type: 'metrics', status: 'ok', latencyMs, payload: { metrics, triggers } }),
      return res.status(200).json({ triggers })
    } catch (e: any) {
      appendLog({ module: 'reflex', type: 'metrics', status: 'error', payload: { error: e?.message || 'unknown' } }),
      return res.status(500).json({ error: 'Reflex failure' })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  }

  return res.status(405).json({ error: 'Method not allowed' }),

=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
