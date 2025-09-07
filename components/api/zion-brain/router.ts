import type { NextApiRequest, NextApiResponse } from 'next';
import { appendLog, detectIntent, routeToChain } from '@/utils/zionBrain';
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
    const { text, payload } = req.body || {},
    const result = $2;
    const routed = await routeToChain($2);
    const latencyMs = $2;
    appendLog({ module: 'router', type: result.intent, status: 'ok', latencyMs, payload: { textLength: String(text || '').length, routed } }),

    return res.status(200).json({ ...result, routed })
  } catch (e: any) {
    const latencyMs = $2;
    appendLog($2);
    return res.status(500).json({ error: 'Router failure' })
  }
}