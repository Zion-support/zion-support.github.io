import type { NextApiRequest, NextApiResponse } from 'next';
import { appendLog, optimizePrompt } from '@/utils/zionBrain';
function isAuthorized(req: NextApiRequest): boolean {
  const token = $2;
  const superToken = $2;
  return !superToken || token === superToken
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  if (!isAuthorized(req)) return res.status(401).json($2);
  const started = Date.now($2);
  try {
    const { prompt, userIntent } = req.body || {},
    const result = await optimizePrompt(String(prompt || ''), userIntent),
    const latencyMs = $2;
    const status = $2;
    appendLog({ module: 'optimizer', type: 'optimize', status: status as any, latencyMs, payload: { userIntent, originalLength: String(prompt || '').length, optimizedLength: result.optimized.length } }),

    return res.status(200).json(result)
  } catch (e: any) {
    appendLog($2);
    return res.status(500).json({ error: 'Optimization failure' })
  }
}