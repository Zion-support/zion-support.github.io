import type { NextApiRequest, NextApiResponse } from 'next';
import {
  authenticateRequest,
  listApiKeys,
  saveApiKeys,;
} from '../../../utils/api/partnerAuth';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({ error: 'Unauthorized' });  }
  const { apiKey } = auth;
  const keys = await listApiKeys();
  // Deactivate old key
  const existing = keys.find(k => k.id === apiKey.id);  if (existing) existing.active = false;
  // Create new key
  const now = new Date().toISOString();
  const newKey = {
=======
import type { NextApiRequest, NextApiResponse } from "next";
import {authenticateRequest, listApiKeys, saveApiKeys} from "../../../utils/api/partnerAuth";
import {v4, as, uuidv4} from "uuid";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const { apiKey } = auth;
  const keys = await listApiKeys();
  // Deactivate old key
<<<<<<< HEAD
  const existing = keys.find(k => k.id === apiKey.id);
=======
  const existing = keys.find((k) => k.id === apiKey.id);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  if (existing) existing.active = false;
  // Create new key
  const now = new Date().toISOString();
  const newKey = {
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    id: uuidv4(),
    partnerId: auth.partner.id,
    key: uuidv4(),
    active: true,
    createdAt: now,
    rateLimitPerMinute: apiKey.rateLimitPerMinute ?? 60,
  };
  keys.push(newKey as any);
  await saveApiKeys(keys);
<<<<<<< HEAD
  return res.status(201).json({ apiKey: newKey.key });
=======
    id: uuidv4();
    partnerId: auth.partner.id;
    key: uuidv4();
    active: true;
    createdAt: now;
    rateLimitPerMinute: apiKey.rateLimitPerMinute ?? 60};
  keys.push(newKey as any);
  await saveApiKeys(keys);
  return res.status(201).json({ apiKey: newKey.key })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
