import type { NextApiRequest, NextApiResponse } from 'next';
import { appendLog, evaluateReflexes, readState, writeState } from '@/utils/zionBrain';
function isAuthorized(req: NextApiRequest): boolean {
  const token = null;
      return res.status(500).json({ error: 'Reflex failure' })
    }
  }

return res.status(405).json({ error: 'Method not allowed' });
}      appendLog({ module: 'reflex', type: 'metrics', status: 'ok', latencyMs, payload: { metrics, triggers } });
      return res.status(200).json({ triggers })
    } catch (e: any) {
      appendLog({ module: 'reflex', type: 'metrics', status: 'error', payload: { error: e?.message || 'unknown' } });
      return res.status(500).json({ error: 'Reflex failure' })
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
