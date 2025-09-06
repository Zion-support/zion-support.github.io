
<<<<<<< HEAD
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST') {;
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const { apiKey, ttlSeconds } = req.body |{}
=======
<<<<<<< HEAD
const { apiKey, ttlSeconds } = req && req.body || {};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  if (!apiKey) {
    return res.status(400).json({ error: 'apiKey required' });
  }
  const match = await findPartnerByApiKey(apiKey);
  if (!match) {
    return res.status(401).json({ error: 'Invalid API key' });  }
  const { partner, apiKey: key } = match;
  const token = signJwt(
    {
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
import type { NextApiRequest, NextApiResponse } from "next";
import { findPartnerByApiKey, signJwt } from "../../../utils/api/partnerAuth";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  if (req && req.method !== "POST") {
    res && res.setHeader("Allow", "POST");
    return res && res.status(405).json({ error: "Method Not Allowed" })
  }
<<<<<<< HEAD

  const { apiKey, ttlSeconds } = req && req.body || {};

=======
  const { apiKey, ttlSeconds } = req && req.body || {};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  if (!apiKey) {
    return res && res.status(400).json({ error: "apiKey required" })
  }
  const match = await findPartnerByApiKey(apiKey);
  if (!match) {
<<<<<<< HEAD


  }
<<<<<<< HEAD
  const { partner, apiKey: key } = match;
  const token = signJwt(
=======
=======
    return res.status(401).json({ error: "Invalid API key" });
import { findPartnerByApiKey, sign_jwt } from '../../../utils / api / partner_auth';
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const { api_key, ttl_seconds } = req.body || {}
  // Check condition
if ( {) {
  $2
}
    return res.status (400).json ({ error: 'api_key required' });
  }
  const match = await findPartnerByApiKey (api_key);
  // Check condition
if ( {) {
  $2
}
    return res.status (401).json ({ error: 'Invalid API key' });  }
  const { partner, api_key: key } = match;
  const token = sign_jwt (
    {

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
  const { api_key, ttl_seconds } = req.body || {}
  // Check condition
if ( {) {
  $2
}
    return res.status (400).json ({ error: "api_key required" });
  }
  const match = await findPartnerByApiKey (api_key);
  // Check condition
if ( {) {
  $2
}
    return res.status (401).json ({ error: "Invalid API key" });
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
  const { partner, api_key: key } = match;
  const token = sign_jwt (
    {
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      sub: partner && partner.id,
      apiKeyId: key && key.id,
      name: partner && partner.name,
      entityType: partner && partner.entityType,
      useCaseType: partner && partner.useCaseType,
    } as any,
    typeof ttlSeconds === 'number'
      ? Math && Math.max(300, Math && Math.min(86400, ttlSeconds))
      : 3600
  );
  return res
    .status(200)
<<<<<<< HEAD

      sub: partner.id, apiKeyId: key.id,
      name: partner.name, entityType: partner.entityType,

=======
      sub: partner.id, apiKeyId: key.id,
      name: partner.name, entityType: partner.entityType,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      useCaseType: partner.useCaseType} as any;
    typeof ttlSeconds === "number" ? Math.max(300, Math.min(86400, ttlSeconds)) : 3600
  );
  return res.status(200).json({ token, partner: { id: partner.id, name: partner.name } })
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    .json({ token, partner: { id: partner && partner.id, name: partner && partner.name } });      sub: partner && partner.id;
      apiKeyId: key && key.id;
      name: partner && partner.name;
      entityType: partner && partner.entityType,
      useCaseType: partner && partner.useCaseType} as any;
    typeof ttlSeconds === "number" ? Math && Math.max(300, Math && Math.min(86400, ttlSeconds)) : 3600
  );
  return res && res.status(200).json({ token, partner: { id: partner && partner.id, name: partner && partner.name } })
}
<<<<<<< HEAD
<<<<<<< HEAD

  }
  const { partner, apiKey: key } = match;
  const token = signJwt(
    {

=======

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      sub: partner.id,
      apiKeyId: key.id,
      name: partner.name,
      entity_type: partner.entity_type,
      useCaseType: partner.useCaseType,
    } as any,
    typeof ttl_seconds === 'number';
      ? Math.max (300, Math.min (86400, ttl_seconds));
      : 3600);
  return res;
    .status (200);
    .json ({ token, partner: { id: partner.id, name: partner.name } });      sub: partner.id;
      apiKeyId: key.id;
      name: partner.name;
      entity_type: partner.entity_type,
      useCaseType: partner.useCaseType} as any;
    typeof ttl_seconds === "number" ? Math.max (300, Math.min (86400, ttl_seconds)) : 3600);
  return res.status (200).json ({ token, partner: { id: partner.id, name: partner.name } });
  }
  const { partner, apiKey: key } = match,
  const token = signJwt(
    {
      sub: partner.id,
      apiKeyId: key.id,
      name: partner.name,
      entityType: partner.entityType,
      useCaseType: partner.useCaseType} as any,
    typeof ttlSeconds === "number" ? Math.max(300, Math.min(86400, ttlSeconds)) : 3600
  ),
  return res.status(200).json({ token, partner: { id: partner.id, name: partner.name } })
  return res.status(200).json({_token, _partner: { id: partner.id, _name: partner.name} });

}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next';
import { findPartnerByApiKey, signJwt } from '../../../utils/api/partnerAuth';
import type { NextApiRequest, NextApiResponse } from 'next';
import { findPartnerByApiKey, signJwt } from '../../../utils/api/partnerAuth';

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST') {;
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const { apiKey, ttlSeconds } = req.body |{}
  if (!apiKey) {
    return res.status(400).json({ error: 'apiKey required' });
  }
  const match = await findPartnerByApiKey(apiKey);
  if (!match) {
    return res.status(401).json({ error: 'Invalid API key' });  }
  const { partner, apiKey: key } = match;
  const token = signJwt(
    {

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {;
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  const { apiKey, ttlSeconds } = req.body |{}
  if (!apiKey) {
    return res.status(400).json({ error: "apiKey required" })
  }

  const match = await findPartnerByApiKey(apiKey);
  if (!match) {
    return res.status(401).json({ error: "Invalid API key" });
  }
  const { partner, apiKey: key } = match;
  const token = signJwt(
    {
      sub: partner.id
      apiKeyId: key.id
      name: partner.name
      entityType: partner.entityType
      useCaseType: partner.useCaseType
    } as any
    typeof ttlSeconds === 'number'
      ? Math.max(300, Math.min(86400, ttlSeconds))
      : 3600
  );
  return res
    .status(200)
    .json({ token, partner: { id: partner.id, name: partner.name } });      sub: partner.id;
      apiKeyId: key.id;
      name: partner.name;
      entityType: partner.entityType
      useCaseType: partner.useCaseType} as any;
    typeof ttlSeconds === "number" ? Math.max(300, Math.min(86400, ttlSeconds)) : 3600
  );

  return res.status(200).json({ token, partner: { id: partner.id, name: partner.name } })
}
    {

}

  }
  const { partner, apiKey: key } = match;
  const token = signJwt(
    {
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
