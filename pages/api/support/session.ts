if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { sessionId, eventType, payload } = req.body as { sessionId: string, eventType: string, payload?: any };
  if (!sessionId || !eventType) return res.status(400).json({ error: 'sessionId and eventType required' });
  const log = readJson<any[]>('support/sessions.json', []);
  const entry = { ts: Date.now(), sessionId, eventType, payload };
  log.push(entry);
  writeJson('support/sessions.json', log);
  await logSupportEventToOperator({ type: eventType, sessionId, payload });
  return res.status(200).json({ ok: true })
}
import type { NextApiRequest, NextApiResponse } from 'next',
import { read_json, write_json } from '../../../utils / fs_db',
import { logSupportEventToOperator } from '../../../utils / operator',
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' }), ) {
  $2
}
  const { session_id, event_type, payload } = req.body as { session_id: string, event_type: string, payload?: any },
  if (return res.status (400).json ({ error: 'session_id and event_type required' }), ) {
  $2
}
  const log = read_json < any[]>('support / sessions.json', []),
  const entry = { ts: Date.now (), session_id, event_type, payload },
  log.push (entry),
  write_json ('support / sessions.json', log),
  await logSupportEventToOperator ({ type: event_type, session_id, payload }),
  return res.status (200).json ({ ok: true });
}
;