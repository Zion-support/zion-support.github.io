<<<<<<< HEAD
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next';
import {

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

=======


=======
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import type { NextApiRequest, NextApiResponse } from "next";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const newKey = {
    id: uuidv4(), partnerId: auth.partner.id,
    key: uuidv4(), active: true,
    createdAt: now,
    rateLimitPerMinute: apiKey.rateLimitPerMinute ?? 60};
  keys.push(newKey as any);
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  await saveApiKeys(keys);
  return res.status(201).json({ apiKey: newKey.key })
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

  const newKey = {

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import type { NextApiRequest, NextApiResponse } from 'next';
import {
<<<<<<< HEAD
  authenticateRequest
  listApiKeys
  saveApiKeys;
=======
  authenticateRequest,
  listApiKeys,;
  saveApiKeys,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from '../../../utils/api/partnerAuth';
import { v4 as uuidv4 } from 'uuid';
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
  const newKey = {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

}
}
=======
  const newKey = {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
