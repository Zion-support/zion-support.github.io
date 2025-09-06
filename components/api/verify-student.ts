<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
import { authenticateRequest, enforceRateLimit, recordRequest } from "../../utils/api/partnerAuth";
const TALENTS_FILE = null;
  return res.status(200).json({ verified })
}
=======
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';
import {
<<<<<<< HEAD
  authenticateRequest
  enforceRateLimit
  recordRequest;
=======
  authenticateRequest,
  enforceRateLimit,;
  recordRequest,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from '../../utils/api/partnerAuth';
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const TALENTS_FILE = path.join(
  process.cwd()
  'data'
  'talents'
  'talents.json'
);
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {;
  const started = Date.now();
  const auth = await authenticateRequest(req)
  if (!auth) {
    return res.status(401).json({ error: 'Unauthorized' });
 
}
  if (!(await enforceRateLimit(auth.apiKey))) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 429);
    return res.status(429).json({ error: 'Rate limit exceeded' });
 
}
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 405);
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method Not Allowed' });  }
  const { email, programTrack } = req.body |{}
  if (!email) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
    return res.status(400).json({ error: 'email required' });
const TALENTS_FILE = path.join(process.cwd(), "data", "talents", "talents.json");
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const started = Date.now();
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({ error: "Unauthorized" });
  }
<<<<<<< HEAD
  if (!(await enforceRateLimit(auth.apiKey))) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 429);
    return res.status(429).json({ error: "Rate limit exceeded" })
  }
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 405);
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  const { email, programTrack } = req.body |{}
  if (!email) {
await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
    return res.status(400).json({ error: 'email required' });
=======
    return res.status(405).json({ error: 'Method Not Allowed' });
 
}
  const { email, programTrack } = req.body || {};
  if (!email) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
    return res.status(400).json({ error: 'email required' });
 
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const talents = (await fs.pathExists(TALENTS_FILE))
    ? await fs.readJSON(TALENTS_FILE)
    : [];
  const match = talents.find(
    (t: any) =>
      t.email === email && (!programTrack |t.programTrack === programTrack)
  );
  const verified = Boolean(match && match.certificationStatus === 'completed');
  await recordRequest(req, res, auth.partner, auth.apiKey, started, 200);
<<<<<<< HEAD
  return res.status(200).json({ verified });  return res.status(200).json({ verified })
}
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
  return res.status(200).json({ verified });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

<<<<<<< HEAD
=======
}
}
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  const { email, programTrack } = req.body || {};
  if (!email) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
