<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
 

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  if (!isAuthorized(req))
    return res.status(401).json({ error: 'Unauthorized' });
<<<<<<< HEAD
=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { appendLog, detectIntent, routeToChain } from '@/utils/zionBrain';

=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { appendLog, detectIntent, routeToChain } from '@/utils/zionBrain';

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
function isAuthorized(req: NextApiRequest): boolean {
  const token = req.headers['x-admin-token'] || req.query.token;
  const superToken = process.env.SUPERADMIN_TOKEN;
  return !superToken || token === superToken
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  if (!isAuthorized(req)) return res.status(401).json({ error: 'Unauthorized' });
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const started = Date.now();
  try {
    const { text, payload } = req.body || {};
    const result = detectIntent(String(text || ''));
    const routed = await routeToChain(result.intent, payload || {});
    const latencyMs = Date.now() - started;

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    appendLog({
      module: 'router',
      type: result.intent,
      status: 'ok',
      latencyMs,
      payload: { textLength: String(text || '').length, routed },
    });
<<<<<<< HEAD
=======
=======
    appendLog({ module: 'router', type: result.intent, status: 'ok', latencyMs, payload: { textLength: String(text || '').length, routed } });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    return res.status(200).json({ ...result, routed });
  } catch (e: any) {
    const latencyMs = Date.now() - started;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    appendLog({
      module: 'router',
      type: 'audit',
      status: 'error',
      latencyMs,
      payload: { error: e?.message || 'unknown' },
    });
    return res.status(500).json({ error: 'Router failure' });
<<<<<<< HEAD
  }
=======
  }
=======
    appendLog({ module: 'router', type: result.intent, status: 'ok', latencyMs, payload: { textLength: String(text || '').length, routed } });

    return res.status(200).json({ ...result, routed })
  } catch (e: any) {
    const latencyMs = Date.now() - started;
    appendLog({ module: 'router', type: 'audit', status: 'error', latencyMs, payload: { error: e?.message || 'unknown' } });
    return res.status(500).json({ error: 'Router failure' })
  };
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    appendLog({ module: 'router', type: 'audit', status: 'error', latencyMs, payload: { error: e?.message || 'unknown' } });
    return res.status(500).json({ error: 'Router failure' })
  };
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
