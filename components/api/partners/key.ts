<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  authenticateRequest,
  listApiKeys,
  saveApiKeys,
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
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const { apiKey } = auth;
  const keys = await listApiKeys();
  // Deactivate old key
  const existing = keys.find(k => k.id === apiKey.id);
  if (existing) existing.active = false;
  // Create new key
  const now = new Date().toISOString();
  const newKey = {
    id: uuidv4(),
    partnerId: auth.partner.id,
    key: uuidv4(),
    active: true,
    createdAt: now,
    rateLimitPerMinute: apiKey.rateLimitPerMinute ?? 60,
  };
  keys.push(newKey as any);
  await saveApiKeys(keys);
  return res.status(201).json({ apiKey: newKey.key });
}
=======
 
}const auth = await authenticateRequest (req);
if (!auth) {
  
}const {
  apiKey 
}= auth;
const keys = await listApiKeys ();
//Deactivate old key const existing = keys.find ( (k) => k.id === apiKey.id);
if (existing) existing.active = false;
// Create new key const now = new Date () .toISOString ();
const newKey = {
  id: uuidv4 ();
partnerId: auth.partner.id;
key: uuidv4 ();
active: true;
createdAt: now;
rateLimitPerMinute: apiKey.rateLimitPerMinute ?? 60 
};
keys.push (newKey as any);
await saveApiKeys (keys);
return res.status (201) .json ({
  apiKey: newKey.key 
}) 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
