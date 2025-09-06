
import type { NextApiRequest, NextApiResponse } from 'next';

import { readJson, writeJson } from '../../../utils/fsDb';
import { logSupportEventToOperator } from '../../../utils/operator';
import type { NextApiRequest, NextApiResponse } from 'next',;
import { readJson, writeJson } from '../../../utils/fsDb',;
import { logSupportEventToOperator } from '../../../utils/operator',;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { sessionId, eventType, payload } = req.body as { sessionId: string, eventType: string, payload?: any }
  if (!sessionId |!eventType) return res.status(400).json({ error: 'sessionId and eventType required' })
  const log = readJson<any[]>('support/sessions.json', [])
  const entry = { ts: Date.now(), sessionId, eventType, payload }
  log.push(entry)
  writeJson('support/sessions.json', log)
  await logSupportEventToOperator({ type: eventType, sessionId, payload })


  return res.status(200).json({ ok: true })
  return res.status(200).json({ ok: true });
};
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb';
import { logSupportEventToOperator } from '../../../utils/operator';
export default async function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { sessionId, eventType, payload } = req.body as { sessionId: string, eventType: string, payload?: any },;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const log = readJson<any[]>('support/sessions.json', []),;
  const entry = { ts: Date.now(), sessionId, eventType, payload },;
  log.push(entry);
  writeJson('support/sessions.json', log);
  await logSupportEventToOperator({ type: eventType, sessionId, payload });
  return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
}

