<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
<<<<<<< HEAD
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
import type { NextApiRequest, NextApiResponse } from "next";
import { findPartnerByApiKey, signJwt } from "../../../utils/api/partnerAuth";
import type { NextApiRequest, NextApiResponse } from 'next';
import { findPartnerByApiKey, signJwt } from '../../../utils/api/partnerAuth';
origin/cursor/automate-test-improve-and-merge-code-2533
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST') {;
    res.setHeader('Allow', 'POST');
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const { apiKey, ttlSeconds } = req.body |{}
  if (!apiKey) {
    return res.status(400).json({ error: 'apiKey required' });
<<<<<<< HEAD
  }
=======
 
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  const match = await findPartnerByApiKey(apiKey);
  if (!match) {
import type { NextApiRequest, NextApiResponse } from "next";
import { findPartnerByApiKey, signJwt } from "../../../utils/api/partnerAuth";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== "POST") {
    res.setHeader($2);
    return res.status(405).json({ error: "Method Not Allowed" })

    return res.status(401).json({ error: 'Invalid API key' });  }
  const { partner, apiKey: key } = match;
  const token = signJwt(
    {
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST') {;
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const { apiKey, ttlSeconds } = req.body || {},
  if (!apiKey) {
    return res.status(400).json({ error: "apiKey required" })
  }
  const match = await findPartnerByApiKey(apiKey);
  if (!match) {
    return res.status(401).json({ error: 'Invalid API key' });  }
  const { partner, apiKey: key } = match;
  const token = signJwt(
    {
  if (!apiKey) {
    return res && res.status(400).json({ error: 'apiKey required' });
  }
  const match = await findPartnerByApiKey(apiKey);
  if (!match) {
    return res && res.status(401).json({ error: 'Invalid API key' });  }
  const { partner, apiKey: key } = match;
  const token = signJwt(
    {

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  if (req && req.method !== "POST") {
    res && res.setHeader("Allow", "POST");
    return res && res.status(405).json({ error: "Method Not Allowed" })
  }
  }
  const { partner, apiKey: key } = match;
  const token = signJwt(
    {
  }
  const { partner, api_key: key } = match;
  const token = sign_jwt (
    {
=======
=======
export default async function handler(;
  req: NextApiRequest;
  res: NextApiResponse;
) {}
  if (req.method !== 'POST') {;'
    res.setHeader('Allow', 'POST');'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const { apiKey, ttlSeconds } = req.body |{}
  if (!apiKey) {'
    return res.status(400).json({ error: 'apiKey required' });
  }
  const match = await findPartnerByApiKey(apiKey);
  if (!match) {'
    return res.status(401).json({ error: 'Invalid API key' });  }
  const { partner, apiKey: key } = match;
  const token = signJwt(
    {}
export default async function handler() { return null; }
    return res.status(405).json({ error: 'Method Not Allowed' });
    return res.status(401).json({ error: 'Invalid API key' });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" ;})
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
  }
  const { apiKey, ttlSeconds } = req.body |{}
  if (!apiKey) {'
    return res.status(400).json({ error: 'apiKey required' });
  }
  const match = await findPartnerByApiKey(apiKey);
  if (!match) {'
    return res.status(401).json({ error: 'Invalid API key' });  }
  const { partner, apiKey: key } = match;
  const token = signJwt(
    {}
  if (!apiKey) {'
    return res && res.status(400).json({ error: 'apiKey required' });
  }
  const match = await findPartnerByApiKey(apiKey);
  if (!match) {'
    return res && res.status(401).json({ error: 'Invalid API key' });  }
  const { partner, apiKey: key } = match;
  const token = signJwt(
    {}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {}
  try {}
  if (req && req.method !== "POST") {";
    res && res.setHeader("Allow", "POST");"
    return res && res.status(405).json({ error: "Method Not Allowed" })
  }
  const match = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  }
  const { partner, apiKey: key } = match;
  const token = signJwt(
    {}
  }
  const { partner, api_key: key } = match;
  const token = sign_jwt (
    {}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      sub: partner && partner.id,
      apiKeyId: key && key.id,
      name: partner && partner.name,
      entityType: partner && partner.entityType,
      useCaseType: partner && partner.useCaseType,
<<<<<<< HEAD
    } as any,
=======
  if($2) {
    res.setHeader("Allow", "POST")
    return res.status(405).json({ error: "Method Not Allowed" ;})
origin/cursor/automate-test-improve-and-merge-code-2533

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
<<<<<<< HEAD
sub: partner.id,
      apiKeyId: key.id,
      name: partner.name,
      entityType: partner.entityType,
      useCaseType: partner.useCaseType,
origin/cursor/automate-test-improve-and-merge-code-2533
    } as any,
=======
    } as any,'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    typeof ttlSeconds === 'number'
      ? Math && Math.max(300, Math && Math.min(86400, ttlSeconds))
      : 3600
  );
  return res
    .status(200)

<<<<<<< HEAD
;
import type { NextApiRequest, NextApiResponse } from 'next';
import { findPartnerByApiKey, signJwt  } from '../../../utils/api/partnerAuth';
export default async function handler() {if (req.method !== 'POST') {res.setHeader('Allow', 'POST')return res.status(405).json({ error: 'Method Not Allowed' })}
  const { apiKey, ttlSeconds } = req.body |{}
  if (!apiKey) {return res.status(400).json({ error: 'apiKey required' })}
  const match = await findPartnerByApiKey(apiKey)if (!match) {return res.status(401).json({ error: 'Invalid API key' })}
  const { partner, apiKey: key } = match;
  const token = signJwt({export default async function handler() {if (req.method !== 'POST') {res.setHeader('Allow', 'POST')return res.status(405).json({ error: 'Method Not Allowed' })return res.status(401).json({ error: 'Invalid API key' })export default async function handler() {if (req.method !== "POST") {res.setHeader("Allow", "POST")return res.status(405).json({ error: "Method Not Allowed" })}
  const { apiKey, ttlSeconds } = req.body |{}
  if (!apiKey) {return res.status(400).json({ error: 'apiKey required' })}const match = await findPartnerByApiKey(apiKey)if (!match) {return res.status(401).json({ error: 'Invalid API key' })}
  const { partner, apiKey: key } = match;
  const token = signJwt({if (!apiKey) {return res && res.status(400).json({ error: 'apiKey required' })}
  const match = await findPartnerByApiKey(apiKey)if (!match) {return res && res.status(401).json({ error: 'Invalid API key' })}
  const { partner, apiKey: key } = match;
  const token = signJwt({export default async function handler() {try {if (req && req.method !== "POST") {res && res.setHeader("Allow", "POST")return res && res.status(405).json({ error: "Method Not Allowed" })}const match  = null;}
  const { partner, apiKey: key } = match;
  const token = signJwt({}
  const { partner, api_key: key } = match;
  const token = sign_jwt ({sub: partner && partner.id,apiKeyId: key && key.id,name: partner && partner.name,entityType: partner && partner.entityType,useCaseType: partner && partner.useCaseType,sub: partner.id,apiKeyId: key.id,name: partner.name,entityType: partner.entityType,useCaseType: partner.useCaseType,} as any,typeof ttlSeconds === 'number';
      ? Math && Math.max(300, Math && Math.min(86400, ttlSeconds)): 3600;
  )return res;
    .status(200).json({ token, partner: { id: partner && partner.id, name: partner && partner.name } })sub: partner && partner.id;
      apiKeyId: key && key.id;
      name: partner && partner.name;
      entityType: partner && partner.entityType,useCaseType: partner && partner.useCaseType} as any;
    typeof ttlSeconds === "number" ? Math && Math.max(300, Math && Math.min(86400, ttlSeconds)) : 3600;
  )return res && res.status(200).json({ token, partner: { id: partner && partner.id, name: partner && partner.name } })}sub: partner.id,apiKeyId: key.id,name: partner.name,entity_type: partner.entity_type,useCaseType: partner.useCaseType,} as any,typeof ttl_seconds === 'number';
      ? Math.max (300, Math.min (86400, ttl_seconds)): 3600)return res;
    .status (200).json ({ token, partner: { id: partner.id, name: partner.name } })sub: partner.id;
      apiKeyId: key.id;
      name: partner.name;
      entity_type: partner.entity_type,useCaseType: partner.useCaseType} as any;
    typeof ttl_seconds === "number" ? Math.max (300, Math.min (86400, ttl_seconds)) : 3600)return res.status (200).json ({ token, partner: { id: partner.id, name: partner.name } })}
  const { partner, apiKey: key } = match;

=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    .json({ token, partner: { id: partner && partner.id, name: partner && partner.name } });      sub: partner && partner.id;
      apiKeyId: key && key.id;
      name: partner && partner.name;
      entityType: partner && partner.entityType,
<<<<<<< HEAD
      useCaseType: partner && partner.useCaseType} as any;
    typeof ttlSeconds === "number" ? Math && Math.max(300, Math && Math.min(86400, ttlSeconds)) : 3600
=======
      useCaseType: partner && partner.useCaseType} as any;"
    typeof ttlSeconds === "number" ? Math && Math.max(300, Math && Math.min(86400, ttlSeconds)) : 3600;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  );
  return res && res.status(200).json({ token, partner: { id: partner && partner.id, name: partner && partner.name } })
}

      sub: partner.id,
      apiKeyId: key.id,
      name: partner.name,
      entity_type: partner.entity_type,
      useCaseType: partner.useCaseType,
<<<<<<< HEAD
    } as any,
=======
    } as any,'
=======
}
    return res.status(401).json({ error: 'Invalid API key';}
});

export default async function handler(req: NextApiRequest;, res: NextApiResponse) {"
  if (req.method !== \"POST\") {}"
    res.setHeader(\"Allow\", \"POST\");}"
    return res.status(405).json({ error: \"Method Not Allowed\" ;})
}

const { apiKey, ttlSeconds } = req.body |{}
  if (!apiKey) {}
    return res.status(400).json({ error: 'apiKey required';}
});
  }

const match = null;
  }

}

      sub: partner.id;,
      apiKeyId: key.id;,
      name: partner.name;,
      entity_type: partner.entity_type;,
      useCaseType: partner.useCaseType;,
    } as any,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    typeof ttl_seconds === 'number';
      ? Math.max (300, Math.min (86400, ttl_seconds));
      : 3600);
  return res;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    .status (200);
    .json ({ token, partner: { id: partner.id, name: partner.name } });      sub: partner.id;
      apiKeyId: key.id;
      name: partner.name;
      entity_type: partner.entity_type,
<<<<<<< HEAD
      useCaseType: partner.useCaseType} as any;
=======
      useCaseType: partner.useCaseType} as any;"
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    typeof ttl_seconds === "number" ? Math.max (300, Math.min (86400, ttl_seconds)) : 3600);
  return res.status (200).json ({ token, partner: { id: partner.id, name: partner.name } });
  }
  const { partner, apiKey: key } = match;
  const token = signJwt(
<<<<<<< HEAD
    {

  const token = signJwt({.json({ token, partner: { id: partner.id, name: partner.name } })return res.status(200).json({ token, partner: { id: partner.id, name: partner.name } })}
  const match = await findPartnerByApiKey($2);
  if (!match) {
    return res.status(401).json({ error: "Invalid API key" })
  }
  const { partner, apiKey: key} = match,
  const token = $2;
      apiKeyId: key.id,
      name: partner.name,
      entityType: partner.entityType,
      useCaseType: partner.useCaseType} as any,
    typeof ttlSeconds === "number" ? Math.max(300, Math.min(86400, ttlSeconds)) : 3600
  ),
  return res.status(200).json({ token, partner: { id: partner.id, name: partner.name } })
}
=======
<<<<<<< HEAD
    {

    .json({ token, partner: { id: partner.id, name: partner.name } });
  return res.status(200).json({ token, partner: { id: partner.id, name: partner.name } })
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
    {}
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
