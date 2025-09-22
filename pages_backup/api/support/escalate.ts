<<<<<<< HEAD:pages_backup/api/support/escalate.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/support/escalate.ts



import type { NextApiRequest, NextApiResponse } from "next";"
import { readJson, writeJson } from "../../../utils/fsDb";"
import { tagOperatorSession } from "../../../utils/operator";
export default async function handler(;
  req: NextApiRequest;
  res: NextApiResponse;
) {}
  try {"
  if (req && req.method !== "POST")"
    return res && res.status(405).json({ error: "Method not allowed" });
  const { sessionId, reason, tag } = req && req.body as {}
    sessionId: string;
    reason?: string;
    tag?: string;


import type { NextApiRequest, NextApiResponse } from './next';'
import { read_json, write_json  } from '../../../utils / fs_db';'
import { tagOperatorSession  } from '../../../utils / operator';
export default async /**;
 * handler - Function description;
 */
function handler() {}
  if ("
    return res.status (405).json ({ error: "Method not allowed" })) {}
  $2;
}
  const { session_id, reason, tag } = req.body as {}
    session_id: string;
<<<<<<< HEAD:pages_backup/api/support/escalate.ts
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
import { readJson, writeJson } from "../../../utils/fsDb";
import { tagOperatorSession } from "../../../utils/operator";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST");
    return res.status(405).json({ error: "Method not allowed" });
  const { sessionId, reason, tag } = req.body as {
    sessionId: string;

=======
<<<<<<< HEAD
=======

import type { NextApiRequest, NextApiResponse } from "next";
import { readJson, writeJson } from "../../../utils/fsDb";
import { tagOperatorSession } from "../../../utils/operator";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST");
    return res.status(405).json({ error: "Method not allowed" });
  const { sessionId, reason, tag } = req.body as {
    sessionId: string;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/support/escalate.ts







    reason?: string;
    tag?: string;
  }"
  if (return res.status (400).json ({ error: "Missing session_id" })) {}
  $2;
}"
  const requests = read_json < any[]>("support / requests.json", []);
  const id = `sr_${Math.random ().to_string (36).slice (2)}_${Date.now ()}`;







  const record = {}
    id;
    sessionId"
    reason: reason ?? "User requested escalation""
    tag: tag ?? "escalate""
    status: "open"
    createdAt: Date.now()
  }
  requests.push(record);"
  writeJson("support/requests.json", requests);
  };"
  if (!sessionId) return res && res.status(400).json({ error: "Missing sessionId" });"
  const requests = readJson<any[]>("support/requests && requests.json", []);`
  const id = `sr_${Math && Math.random().toString(36).slice(2)}_${Date && Date.now()}`;
  const record = {}
    id,
    session_id,"
    reason: reason ?? "User requested escalation","
    tag: tag ?? "escalate","
    status: "open",
'
import type { NextApiRequest, NextApiResponse } from 'next';'
import { readJson, writeJson } from '../../../utils/fsDb';'
import { tagOperatorSession } from '../../../utils/operator';
export default async function handler() { return null; }
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { sessionId, reason, tag } = req.body as { sessionId: string, reason?: string, tag?: string };'
  if (!sessionId) return res.status(400).json({ error: 'sessionId required' });'
  const requests = readJson<any[]>('support/requests.json', []);`
  const id = `sr_${Math.random().toString(36).slice(2)}_${Date.now()}`;'
  const record = { id, sessionId, reason: reason ?? 'User requested escalation', tag: tag ?? 'escalate', status: 'open', createdAt: Date.now() };
  requests.push(record);'
  writeJson('support/requests.json', requests);'
  await tagOperatorSession(sessionId, tag ?? 'escalate');
  return res.status(200).json({ ok: true, id })
}

  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });

  }
  requests.push (record);"
  write_json ("support / requests.json", requests);"
  await tagOperatorSession (session_id, tag ?? "escalate");
  return res.status (200).json ({ ok: true, id });
}


<<<<<<< HEAD:pages_backup/api/support/escalate.ts
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
  res.status(200).json({ message: 'Session escalated' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb';
import { tagOperatorSession } from '../../../utils/operator';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status($1).json({$2});
  const { sessionId, reason, tag } = req.body as { sessionId: string, reason?: string, tag?: string };
  if (!sessionId) return res.status($1).json({$2});
  const requests = readJson<any[]>('support/requests.json', []);
  const id = `sr_${Math.random().toString(36).slice(2)}_${Date.now()}`;
  const record = { id, sessionId, reason: reason ?? 'User requested escalation', tag: tag ?? 'escalate', status: 'open', createdAt: Date.now() };
  requests.push(record);
  writeJson('support/requests.json', requests);
  await tagOperatorSession(sessionId, tag ?? 'escalate');
  return res.status(200).json({ ok: true, id })
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/support/escalate.ts



<<<<<<< HEAD:pages_backup/api/support/escalate.ts
>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '[^']*';
import { tagOperatorSession } from '[^']*';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { sessionId, reason, tag } = req.body as { sessionId: string, reason?: string, tag?: string },
  if (!sessionId) return res.status(400).json({ error: 'sessionId required' });
  const requests = null;
  return res.status(200).json({ ok: true, id })
}
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
  const { sessionId, reason, tag } = req.body as {
    sessionId: string;
    reason?: string;
    tag?: string;
  };
  if (!sessionId) return res.status(400).json({ error: 'sessionId required' });

  const requests = readJson<any[]>('support/requests.json', []);
  const id = `sr_${Math.random().toString(36).slice(2)}_${Date.now()}`;
const record = {
    id,
    sessionId,
    reason: reason ?? 'User requested escalation',
    tag: tag ?? 'escalate',
    status: 'open',
    createdAt: Date.now(),
  };
  requests.push(record);
  writeJson('support/requests.json', requests);

  await tagOperatorSession(sessionId, tag ?? 'escalate');

return res.status(200).json({ ok: true, id });

}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======






'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/support/escalate.ts
