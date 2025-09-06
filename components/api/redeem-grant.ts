<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
import { v4 as uuidv4 } from 'uuid';
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const REDEMPTIONS_FILE = path.join(
  process.cwd()
  'data'
  'partners'
  'grant-redemptions.json'
);
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
    return res.status(405).json({ error: 'Method Not Allowed' });  }
  const { studentEmail, grantCode, courseId } = req.body |{}
  if (!studentEmail |!grantCode |!courseId) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
    return res.status(400).json({ error: 'Missing required fields' });
<<<<<<< HEAD
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
  if (!(await enforceRateLimit(auth.apiKey))) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 429);
    return res.status(429).json({ error: "Rate limit exceeded" })
  }
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 405);
    return res.status(405).json({ error: "Method Not Allowed" })
  }
<<<<<<< HEAD
  const { studentEmail, grantCode, courseId } = req.body |{}
  if (!studentEmail |!grantCode |!courseId) {
=======
  const { studentEmail, grantCode, courseId } = req.body || {};
  if (!studentEmail || !grantCode || !courseId) {
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
    return res.status(400).json({ error: 'Missing required fields' });
  await fs.ensureDir(path.dirname(REDEMPTIONS_FILE));
  const records = (await fs.pathExists(REDEMPTIONS_FILE))
    ? await fs.readJSON(REDEMPTIONS_FILE)
    : [];
  const now = new Date().toISOString();
  const record = {
    id: uuidv4()
    partnerId: auth.partner.id
    studentEmail
    grantCode
    courseId
redeemedAt: now
  }
  records.push(record);
  await fs.writeJSON(REDEMPTIONS_FILE, records, { spaces: 2 });
  await recordRequest(req, res, auth.partner, auth.apiKey, started, 201);
  return res.status(201).json({ id: record.id, redeemedAt: now });  return res.status(201).json({ id: record.id, redeemedAt: now })
}

<<<<<<< HEAD
=======

  }
  const { studentEmail, grantCode, courseId } = req.body || {};
  if (!studentEmail || !grantCode || !courseId) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
}
}
}
=======
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
