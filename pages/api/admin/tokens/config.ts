
import type { NextApiRequest, NextApiResponse } from "next";
import { getConfig } from "../../../../utils/token/service";
import { tokenStore } from "../../../../utils/token/storage";

=======
import type { NextApiRequest, NextApiResponse } from "next";
import { getConfig } from "../../../../utils/token/service";
import { tokenStore } from "../../../../utils/token/storage";

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-e9d8
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const config = getConfig();
    return res.status(200).json(config);
  }

    const body = req.body || {};
    const current = tokenStore.getConfig();
    const updated = { ...current, ...body };
    tokenStore.setConfig(updated);
    return res.status(200).json(updated);
  }
  return res.status(405).json({ error: "Method not allowed" });
}

=======
  
  if (req.method === 'POST') {
    const { updated } = req.body || {};
    if (updated) {
      tokenStore.setConfig(updated);
      return res.status(200).json({ success: true });
    }
  }
  
  return res.status(405).json({ error: "Method not allowed" });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-e9d8
