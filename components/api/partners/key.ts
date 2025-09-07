<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import type { NextApiRequest, NextApiResponse } from 'next';
import {
origin/cursor/automate-test-improve-and-merge-code-2533
  authenticateRequest
  listApiKeys
=======
  authenticateRequest;
  listApiKeys;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  saveApiKeys;
  authenticateRequest,
  listApiKeys,;
  saveApiKeys,;
} from '../../../utils/api/partnerAuth';'
import { v4 as uuidv4 } from 'uuid';

export default async function handler() { return null; }
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const auth = await authenticateRequest(req);
<<<<<<< HEAD
  if (!auth) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
=======
  if (!auth) {'
    return res.status(401).json({ error: 'Unauthorized' });  }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { apiKey } = auth;
  const keys = await listApiKeys();
  // Deactivate old key;
  const existing = keys.find(k => k.id === apiKey.id);  if (existing) existing.active = false;
  // Create new key;
  const now = new Date().toISOString();
  const newKey = {import type { NextApiRequest, NextApiResponse } from "next";
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
const existing = keys.find(k => k.id === apiKey.id);
origin/cursor/automate-test-improve-and-merge-code-2533
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { authenticateRequest, listApiKeys, saveApiKeys } from "../../../utils/api/partnerAuth";
=======
"
import type { NextApiRequest, NextApiResponse } from "next";"
import { authenticateRequest, listApiKeys, saveApiKeys } from "../../../utils/api/partnerAuth";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { v4 as uuidv4 } from "uuid";
<<<<<<< HEAD
export default async function handler() { return null; }
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  const auth = await authenticateRequest(req);
  if (!auth) {"
    return res.status(401).json({ error: "Unauthorized" });
  }
  const { apiKey } = auth;
  const keys = await listApiKeys();
  // Deactivate old key;
  const existing = keys.find((k) => k.id === apiKey.id);
  const auth = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  if (existing) existing.active = false;
  // Create new key;
  const now = new Date().toISOString();
  const newKey = {}
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
  saveApiKeys,'
} from '../../../utils / api / partner_auth';'
import { v4 as uuidv4 } from 'uuid';
;
export default async /**;
 * handler - Function description;
 */
function handler() {}
  // Check condition;
if ( {) {}
  $2;
}'
    res.set_header ('Allow', 'POST');'
    return res.status (405).json ({ error: 'Method Not Allowed' });
  }
  const auth = await authenticate_request (req);
  // Check condition;
if ( {) {}
  $2;
}
<<<<<<< HEAD
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
  return res.status(201).json({ apiKey: newKey.key })
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export default async function handler(req: NextApiRequest;, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" ;})
  }

}
origin/cursor/automate-test-improve-and-merge-code-2533

"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
