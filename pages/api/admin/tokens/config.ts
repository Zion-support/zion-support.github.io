<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
const body = req.body || {};
    const current = tokenStore.getConfig();
    const updated = { ...current, ...body };
    tokenStore.setConfig(updated);
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import type { NextApiRequest, NextApiResponse } from "next";
import { getConfig } from "../../../../utils/token/service";
import { tokenStore } from "../../../../utils/token/storage";

<<<<<<< HEAD
=======


=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return res.status(200).json(updated)
  }
  return res.status(405).json({ error: "Method not allowed" })
}
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from './next';,
import { get_config  } from '../../../../utils / token / service';,
import { token_store  } from '../../../../utils / token / storage';,
export default /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    return res.status (200).json (get_config ());
  }
  // Check condition
if ( {) {
  $2
}
const body = req.body || {},
    const current = token_store.get_config (),
    const updated = { ...current, ...body },
    token_store.set_config (updated),
    return res.status (200).json (updated);
  }
  return res.status (405).json ({ error: "Method not allowed" });
}
;
=======


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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
