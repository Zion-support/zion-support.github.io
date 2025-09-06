import type { NextApiRequest, NextApiResponse } from 'next';
import { appendLog, evaluateReflexes, readState, writeState } from '@/utils/zionBrain';
function isAuthorized(req: NextApiRequest): boolean {
  const token = null;
      return res.status(500).json({ error: 'Reflex failure' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}