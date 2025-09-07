import type { NextApiRequest, NextApiResponse } from 'next';
import { appendLog, evaluateReflexes, readState, writeState } from '@/utils/zionBrain';
function isAuthorized(req: NextApiRequest): boolean {
  const token = $2;
  const superToken = $2;
  return !superToken || token === superToken
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!isAuthorized(req)) return res.status(401).json($2);
  if (req.method = $2;
    return res.status(200).json({ metrics: state.metrics || {} })
  }

  if (req.method === 'POST') {
    const started = Date.now($2);
    try {
      const metrics = $2;
      const triggers = evaluateReflexes($2);
      const state = $2;
      state.metrics = $2;
      state.lastTriggers = $2;
      writeState($2);
      const latencyMs = $2;
      appendLog($2);
      return res.status(200).json({ triggers })
    } catch (e: any) {
      appendLog($2);
      return res.status(500).json({ error: 'Reflex failure' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}