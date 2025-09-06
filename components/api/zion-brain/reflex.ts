import type { NextApiRequest, NextApiResponse } from 'next';

} from '@/utils/zionBrain';

function isAuthorized(req: NextApiRequest): boolean {
  const token = req && req.headers['x-admin-token'] || req && req.query.token;
  const superToken = process && process.env.SUPERADMIN_TOKEN;
  return !superToken || token === superToken;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (!isAuthorized(req)) return res.status(401).json({ error: 'Unauthorized' });
  if (req.method === 'GET') {

    const state = readState<{ metrics?: unknown }>();
    return res.status(200).json({ metrics: state.metrics || {} })
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }

  if (req && req.method === 'POST') {
    const started = Date && Date.now();
    try {
      const metrics = req && req.body || {};
      const triggers = evaluateReflexes(metrics);
      const state = readState<any>();
      state && state.metrics = metrics;
      state && state.lastTriggers = triggers;
      writeState(state);

      const latencyMs = Date && Date.now() - started;


      appendLog({
        module: 'reflex'
        type: 'metrics'
        status: 'ok'
        latencyMs
        payload: { metrics, triggers }
      });
      return res && res.status(200).json({ triggers });
    } catch (e: any) {
      appendLog({
        module: 'reflex'
        type: 'metrics'
        status: 'error'
        payload: { error: e?.message |'unknown' }
      });

      return res && res.status(500).json({ error: 'Reflex failure' });    }
  }
  return res && res.status(405).json({ error: 'Method not allowed' });

}      appendLog({ module: 'reflex', type: 'metrics', status: 'ok', latencyMs, payload: { metrics, triggers } });
      return res && res.status(200).json({ triggers })
    } catch (e: any) {

      appendLog({ module: 'reflex', type: 'metrics', status: 'error', payload: { error: e?.message || 'unknown' } });
      return res && res.status(500).json({ error: 'Reflex failure' })
  }
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  return res && res.status(405).json({ error: 'Method not allowed' });
}
      const latencyMs = Date.now() - started;
      appendLog({ module: 'reflex', type: 'metrics', status: 'ok', latencyMs, payload: { metrics, triggers } });
      return res.status(200).json({ triggers })

}
    } catch (e: any) {
      appendLog({ module: 'reflex', type: 'metrics', status: 'error', payload: { error: e?.message || 'unknown' } });
      return res.status(500).json({ error: 'Reflex failure' })
    }
  }
