<<<<<<< HEAD:pages/api/support/session.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // TODO: Implement session logic
    res.status(200).json({ message: 'session endpoint' });
  } catch (error) {
    console.error('Error in session:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
=======
import type { NextApiRequest, NextApiResponse } from 'next',;

import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb',;
import { logSupportEventToOperator } from '../../../utils/operator',;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { sessionId, eventType, payload } = req.body as { sessionId: string, eventType: string, payload?: any }
  if (!sessionId || !eventType) return res.status(400).json({ error: 'sessionId and eventType required' })

  const log = readJson<any[]>('support/sessions.json', [])
  const entry = { ts: Date.now(), sessionId, eventType, payload }
  log.push(entry)
  writeJson('support/sessions.json', log)

  await logSupportEventToOperator({ type: eventType, sessionId, payload })

  return res.status(200).json({ ok: true })
};
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages-disabled/api/support/session.ts
