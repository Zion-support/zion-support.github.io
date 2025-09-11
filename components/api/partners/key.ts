

<<<<<<< HEAD
<<<<<<< HEAD
id: uuidv4(),
    partnerId: auth && auth.partner.id,
    key: uuidv4(),
    active: true,
    createdAt: now,
    rateLimitPerMinute: apiKey && apiKey.rateLimitPerMinute ?? 60,
  };
  keys && keys.push(newKey as any);
  await saveApiKeys(keys);
  return res && res.status(201).json({ apiKey: newKey && newKey.key });    id: uuidv4();
    partnerId: auth && auth.partner.id;
    key: uuidv4();
    active: true;
    createdAt: now;
    rateLimitPerMinute: apiKey && apiKey.rateLimitPerMinute ?? 60};
  keys && keys.push(newKey as any);
  await saveApiKeys(keys);
  return res && res.status(201).json({ apiKey: newKey && newKey.key })
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextApiRequest, NextApiResponse } from "next";
import { authenticateRequest, listApiKeys, saveApiKeys } from "../../../utils/api/partnerAuth";
import { v4 as uuidv4 } from "uuid";
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
  const existing = keys.find((k) => k.id === apiKey.id);
  if (existing) existing.active = false;
  // Create new key
  const now = new Date().toISOString();
  const newKey = {
    id: uuidv4(), partnerId: auth.partner.id,
    key: uuidv4(), active: true,
    createdAt: now,
    rateLimitPerMinute: apiKey.rateLimitPerMinute ?? 60};
  keys.push(newKey as any);
  await saveApiKeys(keys);
  return res.status(201).json({ apiKey: newKey.key })
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  authenticate_request,
  listApiKeys,
  saveApiKeys,
} from '../../../utils / api / partner_auth';
import { v4 as uuidv4 } from 'uuid';
;
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    res.set_header ('Allow', 'POST');
    return res.status (405).json ({ error: 'Method Not Allowed' });
  }
  const auth = await authenticate_request (req);
  // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD
    return res.status (401).json ({ error: 'Unauthorized' });  }
  const { api_key } = auth;
  const keys = await listApiKeys ();
  // Deactivate old key;
  const existing = keys.find (key => k.id === api_key.id);  // Check condition
if (existing.active = false) {
  $2
}
  // Create new key;
  const now = new Date ().toISOString ();
  const new_key = {import type { NextApiRequest, NextApiResponse } from './next';
import { authenticate_request, listApiKeys, saveApiKeys  } from '../../../utils / api / partner_auth';
import { v4 as uuidv4  } from './uuid';
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    res.set_header ("Allow", "POST");
    return res.status (405).json ({ error: "Method Not Allowed" });
  }
  const auth = await authenticate_request (req);
  // Check condition
if ( {) {
  $2
}
    return res.status (401).json ({ error: "Unauthorized" });
  const { api_key } = auth;
  const keys = await listApiKeys ();
  // Deactivate old key;
  const existing = keys.find (key => k.id === api_key.id);  const existing = keys.find ((k) => k.id === api_key.id);
  // Check condition
if (existing.active = false) {
  $2
}
  // Create new key;
  const now = new Date ().toISOString ();
  const new_key = {
    id: uuidv4 (),
    partner_id: auth.partner.id,
    key: uuidv4 (),
    active: true,
    created_at: now,
    rateLimitPerMinute: api_key.rateLimitPerMinute ?? 60,
  }
  keys.push (new_key as any);
  await saveApiKeys (keys);
  return res.status (201).json ({ api_key: new_key.key });    id: uuidv4 ();
    partner_id: auth.partner.id;
    key: uuidv4 ();
    active: true;
    created_at: now;
    rateLimitPerMinute: api_key.rateLimitPerMinute ?? 60}
  keys.push (new_key as any);
  await saveApiKeys (keys);
  return res.status (201).json ({ api_key: new_key.key });
  }
  const { apiKey } = auth
  const keys = await listApiKeys()
  // Deactivate old key
  const existing = keys.find((k) => k.id === apiKey.id)
  if (existing) existing.active = false,
  // Create new key
  const now = new Date().toISOString()
  const newKey = {
    id: uuidv4(),
    partnerId: auth.partner.id,
    key: uuidv4(),
    active: true,
    createdAt: now,
    rateLimitPerMinute: apiKey.rateLimitPerMinute ?? 60},
  keys.push(newKey as any),
  await saveApiKeys(keys),
  return res.status(201).json({ apiKey: newKey.key })

}
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next';
import {
  authenticateRequest
  listApiKeys
  saveApiKeys;
  authenticateRequest,
  listApiKeys,;
  saveApiKeys,;
} from '../../../utils/api/partnerAuth';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST') {;
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
  const newKey = {import type { NextApiRequest, NextApiResponse } from "next";

import { authenticateRequest, listApiKeys, saveApiKeys } from "../../../utils/api/partnerAuth";
import { v4 as uuidv4 } from "uuid";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {;
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" })
  }

  const auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({ error: "Unauthorized" });
  const { apiKey } = auth;
  const keys = await listApiKeys();
  // Deactivate old key
  const existing = keys.find(k => k.id === apiKey.id);  const existing = keys.find((k) => k.id === apiKey.id);
  if (existing) existing.active = false;
  // Create new key
  const now = new Date().toISOString();
  const newKey = {
    id: uuidv4()
    partnerId: auth.partner.id
    key: uuidv4()
    active: true
    createdAt: now
    rateLimitPerMinute: apiKey.rateLimitPerMinute ?? 60
  }
  keys.push(newKey as any);
  await saveApiKeys(keys);
  return res.status(201).json({ apiKey: newKey.key });    id: uuidv4();
    partnerId: auth.partner.id;
    key: uuidv4();
    active: true;
    createdAt: now;
    rateLimitPerMinute: apiKey.rateLimitPerMinute ?? 60}
  keys.push(newKey as any);
  await saveApiKeys(keys);

  return res.status(201).json({ apiKey: newKey.key })
}
  const newKey = {

}
}
  const newKey = {
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
  const newKey = {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
