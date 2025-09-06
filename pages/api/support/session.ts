import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb';
import { logSupportEventToOperator } from '../../../utils/operator';
<<<<<<< HEAD
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const { sessionId, eventType, payload } = req.body as {
    sessionId: string;
    eventType: string;
    payload?: any;
  };
  if (!sessionId || !eventType)
    return res.status(400).json({ error: 'sessionId and eventType required' });
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { sessionId, eventType, payload } = req.body as { sessionId: string, eventType: string, payload?: any };
  if (!sessionId || !eventType) return res.status(400).json({ error: 'sessionId and eventType required' });
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  const log = readJson<any[]>('support/sessions.json', []);
  const entry = { ts: Date.now(), sessionId, eventType, payload };
  log.push(entry);
  writeJson('support/sessions.json', log);

  await logSupportEventToOperator({ type: eventType, sessionId, payload });

<<<<<<< HEAD
<<<<<<< HEAD
  return res.status(200).json({ ok: true });
=======
  return res.status(200).json({ ok: true })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  return res.status(200).json({ ok: true })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
