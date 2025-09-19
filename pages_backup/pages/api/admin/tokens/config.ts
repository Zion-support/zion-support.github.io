import type { NextApiRequest, NextApiResponse } from "next";
import { getConfig } from "../../../../utils/token/service";
import { tokenStore } from "../../../../utils/token/storage";

export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (req.method === "GET") {,
    return res.status(200).json(getConfig()),}
  if (req.method === "POST") {,
const body = req.body || {};
    const current = tokenStore.getConfig();
    const updated = { ...current, ...body };
    tokenStore.setConfig(updated);
    return res.status(200).json(updated),
  }
  return res.status(405).json({ error: "Method not allowed" ,});
};
    return res.status(200).json(updated),
  }
  return res.status(405).json({ error: "Method not allowed" ,}),
}
,
    if (req.method === 'GET') {,
      const config = getConfig();
      res.json({ config });
    } else if (req.method === 'POST') {,
      const { rate, maxPerUser, enabled } = req.body;
      // Update config logic here,
      res.json({ success: true ,});
    } else {,
      res.setHeader('AllowGET, POST');
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
,