import type { NextApiRequest, NextApiResponse } from "next",;
import { getConfig } from "../../../../utils/token/service",;
import { tokenStore } from "../../../../utils/token/storage",;

origin/cursor/automate-test-improve-and-merge-code-2533
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(getConfig())
  }
  if (req.method === "POST") {
    const body = req.body || {},
    const current = tokenStore.getConfig(),
    const updated = { ...current, ...body },
    tokenStore.setConfig(updated),
    return res.status(200).json(updated)
  }
  return res.status(405).json({ error: "Method not allowed" });
};
import type { NextApiRequest, NextApiResponse } from "next";
import { getConfig } from "../../../../utils/token/service";
import { tokenStore } from "../../../../utils/token/storage";

    return res.status(200).json(updated)
  }
  return res.status(405).json({ error: "Method not allowed" })
}

    if (req.method === 'GET') {
      const config = getConfig();
      res.json({ config });
    } else if (req.method === 'POST') {
      const { rate, maxPerUser, enabled } = req.body;
      // Update config logic here
      res.json({ success: true });
    } else {
      res.setHeader('Allow', 'GET, POST');
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


  return res.status(405).json({ error: "Method not allowed" })
};
    const body = req.body || {}
    const current = tokenStore.getConfig()
    const updated = { ...current, ...body }
    tokenStore.setConfig(updated)
main
    return res.status(200).json(updated)
  }
  return res.status(405).json({ error: "Method not allowed" })
};


  if (req.method === 'POST') {
    const { updated } = req.body || {};
    if (updated) {
      tokenStore.setConfig(updated);
      return res.status(200).json({ success: true });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
