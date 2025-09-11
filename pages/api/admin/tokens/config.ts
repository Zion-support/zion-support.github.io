<<<<<<< HEAD
<<<<<<< HEAD
const body = req.body || {};
    const current = tokenStore.getConfig();
    const updated = { ...current, ...body };
    tokenStore.setConfig(updated);
import type { NextApiRequest, NextApiResponse } from "next",;
import { getConfig } from "../../../../utils/token/service",;
import { tokenStore } from "../../../../utils/token/storage",;
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




export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const config = getConfig();
    return res.status(200).json(config);
  }

  if (req.method === "POST") {
const body = req.body |{}
    const current = tokenStore.getConfig()
    const updated = { ...current, ...body }
    tokenStore.setConfig(updated)
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return res.status(200).json(updated)
  }
  return res.status(405).json({ error: "Method not allowed" })
}


<<<<<<< HEAD
<<<<<<< HEAD


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const isAdmin = req.headers['x-admin'] === 'true';
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });

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
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
