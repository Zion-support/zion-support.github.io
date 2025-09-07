import type { NextApiRequest, NextApiResponse } from \"next\;
import type { NextApiRequest, NextApiResponse } from 'next;
import {


  saveApiKeys;
  authenticateRequest,
  listApiKeys,
  saveApiKeys}
  const { apiKey } = auth,
  const keys = await listApiKeys($2);
  // Deactivate old key
  const existing = $2;
  if (existing) existing.active = $2;
  // Create new key
  const now = new Date().toISOString($2);
  const newKey = {
    id: uuidv4($2);
=======
} from ../../../utils/api/partnerAuth';'
import { v4 as uuidv4 } from uuid;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6

export default async function handler() {
  }
  if (req.method !== 'POST') {;'
    }
    res.setHeader('Allow', 'POST');'
return res.status(405).json({ "error": 'Method Not Allowed',;'
});
  }
  const auth = await authenticateRequest(req);

}
return res.status(401).json({ "error": 'Unauthorized',;'
});
  }


import { authenticateRequest, listApiKeys, saveApiKeys } from "../../../utils/api/partnerAuth";
=======

import type { NextApiRequest, NextApiResponse } from next";"
import { authenticateRequest, listApiKeys, saveApiKeys } from ../../../utils/api/partnerAuth;"
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { v4 as uuidv4 } from "uuid;

=======
export default async function handler(req: NextApiRequest;, res: NextApiResponse) {
  if (req.method !== POST") {
    res.setHeader("Allow, POST");
    return res.status(405).json({ error: "Method Not Allowed" ;})
  }

}
origin/cursor/automate-test-improve-and-merge-code-2533

"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
