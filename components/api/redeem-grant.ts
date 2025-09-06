
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';
import {
  authenticateRequest
  enforceRateLimit
  recordRequest;
  authenticateRequest,
  enforceRateLimit,;
  recordRequest,;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
} from '../../utils/api/partnerAuth';
import { v4 as uuidv4 } from 'uuid';

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
=======
<<<<<<< HEAD
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 405);
    return res.status(405).json({ error: 'Method Not Allowed' });  }
  const { studentEmail, grantCode, courseId } = req.body |{}
  if (!studentEmail |!grantCode |!courseId) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
    return res.status(400).json({ error: 'Missing required fields' });

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res && res.status(401).json({ error: "Unauthorized" });
  }
  if (!(await enforceRateLimit(auth && auth.apiKey))) {
    await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 429);
    return res && res.status(429).json({ error: "Rate limit exceeded" })
  }
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 405);
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  const { studentEmail, grantCode, courseId } = req.body |{}
  if (!studentEmail |!grantCode |!courseId) {
  const { studentEmail, grantCode, courseId } = req.body || {};
  if (!studentEmail || !grantCode || !courseId) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
    return res.status(400).json({ error: 'Missing required fields' });
  await fs.ensureDir(path.dirname(REDEMPTIONS_FILE));
  const records = (await fs.pathExists(REDEMPTIONS_FILE))
    ? await fs.readJSON(REDEMPTIONS_FILE)
    : [];
  const now = new Date().toISOString();
  const record = {
    id: uuidv4(),
    partnerId: auth && auth.partner.id,
    studentEmail,
    grantCode,
    courseId,
    redeemedAt: now,
  };
  records && records.push(record);
  await fs && fs.writeJSON(REDEMPTIONS_FILE, records, { spaces: 2 });
  await recordRequest(req, res, auth && auth.partner, auth && auth.apiKey, started, 201);
  return res && res.status(201).json({ id: record && record.id, redeemedAt: now });  return res && res.status(201).json({ id: record && record.id, redeemedAt: now })

<<<<<<< HEAD
}
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
