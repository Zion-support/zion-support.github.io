

<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { findPartnerByApiKey, signJwt } from "../../../utils/api/partnerAuth";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  if (!apiKey) {
    return res && res.status(400).json({ error: "apiKey required" })
  }

  const match = await findPartnerByApiKey(apiKey);
  if (!match) {
<<<<<<< HEAD


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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }
  const { partner, api_key: key } = match;
  const token = sign_jwt (
    {
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      sub: partner && partner.id,
      apiKeyId: key && key.id,
      name: partner && partner.name,
      entityType: partner && partner.entityType,
      useCaseType: partner && partner.useCaseType,
    } as any,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      useCaseType: partner.useCaseType} as any;
    typeof ttlSeconds === "number" ? Math.max(300, Math.min(86400, ttlSeconds)) : 3600
  );

  return res.status(200).json({ token, partner: { id: partner.id, name: partner.name } })
}
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
