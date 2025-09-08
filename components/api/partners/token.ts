<<<<<<< HEAD


  if (!apiKey) {
    return res.status(400).json({ error: 'apiKey required' });

=======
import type { NextApiRequest, NextApiResponse } from "next";
import { findPartnerByApiKey, signJwt } from "../../../utils/api/partnerAuth";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader($2);
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  const { apiKey, ttlSeconds } = req.body || {},
  if (!apiKey) {
    return res.status(400).json({ error: "apiKey required" })
  }
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  if (req && req.method !== "POST") {
    res && res.setHeader("Allow", "POST");
    return res && res.status(405).json({ error: "Method Not Allowed" })
  }
  const { apiKey, ttlSeconds } = req && req.body || {};
import type { NextApiRequest, NextApiResponse } from "next";"
import { findPartnerByApiKey, signJwt } from "../../../utils/api/partnerAuth";"
import type { NextApiRequest, NextApiResponse } from 'next';'
import { findPartnerByApiKey, signJwt } from '../../../utils/api/partnerAuth';'

export default async function handler() {
  }
  if (req.method !== 'POST') {;'
    }
    res.setHeader('Allow', 'POST');'
return res.status(405).json({ "error": 'Method Not Allowed',;'
});
  }
  const { apiKey, ttlSeconds } = req.body |{}
  if (!apiKey) {
    return res.status(400).json({ error: 'apiKey required' });


import type { NextApiRequest, NextApiResponse } from \'next\';"
import { findPartnerByApiKey, signJwt } from \'../../../utils/api/partnerAuth\';
import type { NextApiRequest, NextApiResponse } from 'next';
import { findPartnerByApiKey, signJwt } from '../../../utils/api/partnerAuth';

export default async function handler(
  req: NextApiRequest;
res: NextApiResponse;
) {
  if (req.method !== 'POST') {;
    res.setHeader('Allow', 'POST');}
    return res.status(405).json({ error: 'Method Not Allowed'}
});
  }

return res.status(401).json({ "error": 'Invalid API key',;'
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {"
  if (req.method !== \"POST\") {}"
    res.setHeader(\"Allow\", \"POST\");}"
    return res.status(405).json({ error: \"Method Not Allowed\" })
 
}

const { apiKey, ttlSeconds } = req.body |{}
  if (!apiKey) {}
    return res.status(400).json({ error: 'apiKey required'}
});
  }

const match = null;
  }

const { partner, apiKey: key}
} = match;

const token = signJwt(
    {

sub: partner.id,
  }
  const { partner, api_key: key } = match;
  const token = sign_jwt (
    {
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
      sub: partner.id, apiKeyId: key.id,
      name: partner.name, entityType: partner.entityType,
      useCaseType: partner.useCaseType} as any;
    typeof ttlSeconds === "number" ? Math.max(300, Math.min(86400, ttlSeconds)) : 3600
  );
  return res.status(200).json({ token, partner: { id: partner.id, name: partner.name } })
    .json({ token, "partner": { "id": partner.id, "name": partner.name }
});
return res.status(200).json({ token, "partner": { "id": partner.id, "name": partner.name } }),;
}
    .json({ token, partner: { id: partner && partner.id, name: partner && partner.name } });      sub: partner && partner.id;
      apiKeyId: key && key.id;
      name: partner && partner.name;
      entityType: partner && partner.entityType,
      useCaseType: partner && partner.useCaseType} as any;
    typeof ttlSeconds === "number" ? Math && Math.max(300, Math && Math.min(86400, ttlSeconds)) : 3600
  );
  return res && res.status(200).json({ token, partner: { id: partner && partner.id, name: partner && partner.name } })
}

      sub: partner.id,
>>>>>>> origin/cursor/delete-old-data-records-6bba
      apiKeyId: key.id,
      name: partner.name,
      entityType: partner.entityType}
      useCaseType: partner.useCaseType}
    } as any,
    typeof ttlSeconds === 'number'
      ? Math && Math.max(300, Math && Math.min(86400, ttlSeconds))
      : 3600;
  );

<<<<<<< HEAD
=======
      sub: partner.id;,
      apiKeyId: key.id;,
      name: partner.name;,
      entity_type: partner.entity_type;,
      useCaseType: partner.useCaseType;,
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

>>>>>>> origin/cursor/delete-old-data-records-6bba
  const { partner, apiKey: key } = match,
  const token = signJwt(
    {
      sub: partner.id,
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      apiKeyId: key.id,
      name: partner.name,
      entityType: partner.entityType,
      useCaseType: partner.useCaseType} as any,
    typeof ttlSeconds === "number" ? Math.max(300, Math.min(86400, ttlSeconds)) : 3600
  ),
  return res.status(200).json({ token, partner: { id: partner.id, name: partner.name } })
<<<<<<< HEAD



=======

  return res.status(200).json({_token, _partner: { id: partner.id, _name: partner.name} });

}


  return res;
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
    .status(200)

    .json({ token, partner: { id: partner.id, name: partner.name }
});
  return res.status(200).json({ token, partner: { id: partner.id, name: partner.name } })
}


"
<<<<<<< HEAD






=======
"
>>>>>>> origin/cursor/delete-old-data-records-6bba
