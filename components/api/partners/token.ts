import type { NextApiRequest, NextApiResponse } from \"next\;
import { findPartnerByApiKey, signJwt } from \"../../../utils/api/partnerAuth\";
import type { NextApiRequest, NextApiResponse } from 'next;
import { findPartnerByApiKey, signJwt } from ../../../utils/api/partnerAuth';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST) {
    res.setHeader(Allow', 'POST');

    .status (200);
    .json ({ token, partner: { id: partner.id, name: partner.name } });      sub: partner.id;
      apiKeyId: key.id;
      name: partner.name;
      entity_type: partner.entity_type,

    typeof ttl_seconds === number ? Math.max (300, Math.min (86400, ttl_seconds)) : 3600);
  return res.status (200).json ({ token, partner: { id: partner.id, name: partner.name } });
  }
  const { partner, apiKey: key } = match;
  const token = signJwt(

=======
    .status(200)

    .json({ token, partner: { id: partner.id;, name: partner.name ;} });
  return res.status(200).json({ token, partner: { id: partner.id;, name: partner.name ;} })
}
origin/cursor/automate-test-improve-and-merge-code-2533
    .json({ token, partner: { id: partner.id;, name: partner.name ;}
});
  return res.status(200).json({ token, partner: { id: partner.id;, name: partner.name ;} })
}

"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
