<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { sessionId, eventType, payload } = req.body as { sessionId: string, eventType: string, payload?: any };
  if (!sessionId || !eventType) return res.status(400).json({ error: 'sessionId and eventType required' });
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  const log = readJson<any[]>('support/sessions.json', []);
  const entry = { ts: Date.now(), sessionId, eventType, payload };
  log.push(entry);
  writeJson('support/sessions.json', log);
<<<<<<< HEAD

  await logSupportEventToOperator({ type: eventType, sessionId, payload });

=======
  await logSupportEventToOperator({ type: eventType, sessionId, payload });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  return res.status(200).json({ ok: true })
}

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  return res.status(200).json({ ok: true })
}



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

import type { NextApiRequest, NextApiResponse } from 'next';

import { readJson, writeJson } from '../../../utils/fsDb';
import { logSupportEventToOperator } from '../../../utils/operator';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { sessionId, eventType, payload } = req.body as { sessionId: string, eventType: string, payload?: any };
  if (!sessionId || !eventType) return res.status(400).json({ error: 'sessionId and eventType required' });

  const log = readJson<any[]>('support/sessions.json', []);
  const entry = { ts: Date.now(), sessionId, eventType, payload };
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
}
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
}



>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
