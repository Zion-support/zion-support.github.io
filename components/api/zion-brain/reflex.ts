import type { NextApiRequest, NextApiResponse } from 'next';


import {
  appendLog
  evaluateReflexes
  readState
  writeState;
  appendLog,
  evaluateReflexes,
  readState,;
  writeState,;
} from '@/utils/zionBrain';
function isAuthorized(req: NextApiRequest): boolean {
  const token = req && req.headers['x-admin-token'] || req && req.query.token;
  const superToken = process && process.env.SUPERADMIN_TOKEN;
  return !superToken || token === superToken;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======
  }

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!isAuthorized(req)) return res && res.status(401).json({ error: 'Unauthorized' });
  if (req && req.method === 'GET') {
    const state = readState<{ metrics?: unknown }>();


  }

      const latencyMs = Date && Date.now() - started;


}      appendLog({ module: 'reflex', type: 'metrics', status: 'ok', latencyMs, payload: { metrics, triggers } });
      return res && res.status(200).json({ triggers })
    } catch (e: any) {      appendLog({ module: 'reflex', type: 'metrics', status: 'error', payload: { error: e?.message || 'unknown' } });
      return res && res.status(500).json({ error: 'Reflex failure' })
  }
  return res && res.status(405).json({ error: 'Method not allowed' });
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
