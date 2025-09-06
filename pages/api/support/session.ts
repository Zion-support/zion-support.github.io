<<<<<<< HEAD

<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { sessionId, eventType, payload } = req.body as { sessionId: string, eventType: string, payload?: any }
  if (!sessionId |!eventType) return res.status(400).json({ error: 'sessionId and eventType required' })
  const log = readJson<any[]>('support/sessions.json', [])
  const entry = { ts: Date.now(), sessionId, eventType, payload }
  log.push(entry)
  writeJson('support/sessions.json', log)
  await logSupportEventToOperator({ type: eventType, sessionId, payload })

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
=======
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
=======
<<<<<<< HEAD
if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const { sessionId, eventType, payload } = req.body as { sessionId: string, eventType: string, payload?: any };
  if (!sessionId || !eventType) return res.status(400).json({ error: 'sessionId and eventType required' });
  const log = readJson<any[]>('support/sessions.json', []);
  const entry = { ts: Date.now(), sessionId, eventType, payload };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  log.push(entry);
  writeJson('support/sessions.json', log);
  await logSupportEventToOperator({ type: eventType, sessionId, payload });
<<<<<<< HEAD
<<<<<<< HEAD
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

=======

  return res.status(200).json({ ok: true })
}

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
}

=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

import { readJson, writeJson } from '../../../utils/fsDb';
import { logSupportEventToOperator } from '../../../utils/operator';
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { readJson, writeJson } from '../../../utils/fsDb',;
import { logSupportEventToOperator } from '../../../utils/operator',;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { sessionId, eventType, payload } = req.body as { sessionId: string, eventType: string, payload?: any }
  if (!sessionId |!eventType) return res.status(400).json({ error: 'sessionId and eventType required' })
  const log = readJson<any[]>('support/sessions.json', [])
  const entry = { ts: Date.now(), sessionId, eventType, payload }
  log.push(entry)
  writeJson('support/sessions.json', log)
  await logSupportEventToOperator({ type: eventType, sessionId, payload })

<<<<<<< HEAD
  return res.status(200).json({ ok: true })
=======
=======
  return res.status(200).json({ ok: true });
};
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
