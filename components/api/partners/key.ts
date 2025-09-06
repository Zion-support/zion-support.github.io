<<<<<<< HEAD
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next';
import {

=======
=======
=======
import type { NextApiRequest, NextApiResponse } from "next";
import type { NextApiRequest, NextApiResponse } from 'next';
import {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  authenticateRequest
  listApiKeys
  saveApiKeys;
  authenticateRequest,
  listApiKeys,;
  saveApiKeys,;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
} from '../../../utils/api/partnerAuth';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST') {;
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
<<<<<<< HEAD
=======
  }
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const { apiKey } = auth;
  const keys = await listApiKeys();
  // Deactivate old key
<<<<<<< HEAD
  const existing = keys.find(k => k.id === apiKey.id);  if (existing) existing.active = false;
  // Create new key
  const now = new Date().toISOString();
  const newKey = {import type { NextApiRequest, NextApiResponse } from "next";

import type { NextApiRequest, NextApiResponse } from "next";
=======
const existing = keys.find(k => k.id === apiKey.id);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { authenticateRequest, listApiKeys, saveApiKeys } from "../../../utils/api/partnerAuth";
import { v4 as uuidv4 } from "uuid";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" })
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from "next";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
  await saveApiKeys(keys);
  return res.status(201).json({ apiKey: newKey.key })
}
  const newKey = {

=======
  const newKey = {
=======
  }
<<<<<<< HEAD
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const { apiKey } = auth;
  const keys = await listApiKeys();
  // Deactivate old key
  const existing = keys.find((k) => k.id === apiKey.id);
=======
  const auth = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  if (existing) existing.active = false;
  // Create new key
  const now = new Date().toISOString();
  const newKey = {
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    id: uuidv4(), partnerId: auth.partner.id,
    key: uuidv4(), active: true,
    createdAt: now,
    rateLimitPerMinute: apiKey.rateLimitPerMinute ?? 60};
  keys.push(newKey as any);
  await saveApiKeys(keys);
  return res.status(201).json({ apiKey: newKey.key })
}
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======
=======
id: uuidv4(),
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    partnerId: auth.partner.id,
    key: uuidv4(),
    active: true,
    createdAt: now,
<<<<<<< HEAD
    rateLimitPerMinute: apiKey.rateLimitPerMinute ?? 60},
  keys.push(newKey as any),
  await saveApiKeys(keys),
  return res.status(201).json({ apiKey: newKey.key })

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    rateLimitPerMinute: apiKey.rateLimitPerMinute ?? 60,
  };
  keys.push(newKey as any);
  await saveApiKeys(keys);
  return res.status(201).json({ apiKey: newKey.key });
  return res.status(201).json({ apiKey: newKey.key })
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
