<<<<<<< HEAD



=======
<<<<<<< HEAD:pages_backup/api/integrations/logs.ts
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/integrations/logs.ts
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../lib/integrations/fileStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {

<<<<<<< HEAD

=======
<<<<<<< HEAD:pages_backup/api/integrations/logs.ts
=======
  if (req && req.method !== "GET")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { providerId } = req && req.query as { providerId?: string };

<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../lib/integrations/fileStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET");
    return res.status(405).json({ error: "Method not allowed" });
  const { providerId } = req.query as { providerId?: string }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/integrations/logs.ts
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const state = readState();
  const logs = providerId;
}
<<<<<<< HEAD
=======

<<<<<<< HEAD


=======
<<<<<<< HEAD:pages_backup/api/integrations/logs.ts
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/integrations/logs.ts
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    ? state.logs.filter((l) => l.providerId === providerId)
    : state.logs;
  res.status(200).json({ logs });
}


import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler() { return null; }
  res.status(200).json({ message: 'API endpoint' });

<<<<<<< HEAD:pages_backup/api/integrations/logs.ts
'
import type { NextApiRequest, NextApiResponse } from 'next';'
=======
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/integrations/logs.ts
import { readState } from '../../../lib/integrations/fileStore';
export default function handler() { return null; }
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  const { providerId } = req.query as { providerId?: string };
  const logs = providerId ? state.logs.filter(l => l.providerId === providerId) : state.logs;
  res.status(200).json({ logs })

<<<<<<< HEAD

}


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import type { NextApiRequest, NextApiResponse } from './next';

import { read_state  } from '../../../lib / integrations / file_store';
;
export default /**;
 * handler - Function description;
 */

  const { provider_id } = req.query as { provider_id?: string }
  const state = read_state ();
  const logs = provider_id;
    ? state.logs.filter ((l) => l.provider_id === provider_id);
    : state.logs;
  res.status (200).json ({ logs });
}

<<<<<<< HEAD


=======
<<<<<<< HEAD:pages_backup/api/integrations/logs.ts
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState } from '../../../lib/integrations/fileStore';
export default function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/integrations/logs.ts
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662



=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

ursor/fix-website-loading-errors-and-merge-6662

<<<<<<< HEAD:pages_backup/api/integrations/logs.ts
import { readState } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  const { providerId } = req.query as { providerId?: string },
  const state = null;
  res.status(200).json({ logs })
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
}
=======
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/integrations/logs.ts
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
