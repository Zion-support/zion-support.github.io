<<<<<<< HEAD:pages/api/integrations/logs.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

:pages_backup/api/integrations/logs.ts
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../lib/integrations/fileStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET");
    return res.status(405).json({ error: "Method not allowed" });
  const { providerId } = req.query as { providerId?: string }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/integrations/logs.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../lib/integrations/fileStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
if (req.method !== "GET");
    return res.status(405).json({ error: "Method not allowed" });
  const { providerId } = req.query as { providerId?: string }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

  if (req && req.method !== "GET")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { providerId } = req && req.query as { providerId?: string };

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/integrations/logs.ts
  const state = readState();
  const logs = providerId;
}
<<<<<<< HEAD:pages/api/integrations/logs.ts
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

:pages_backup/api/integrations/logs.ts
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/integrations/logs.ts
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/logs.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    ? state.logs.filter((l) => l.providerId === providerId)
    : state.logs;
  res.status(200).json({ logs });
}
<<<<<<< HEAD:pages/api/integrations/logs.ts
<<<<<<< HEAD
<<<<<<< HEAD

:pages_backup/api/integrations/logs.ts
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/integrations/logs.ts
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/logs.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler() { return null; }
  res.status(200).json({ message: 'API endpoint' });

'
import type { NextApiRequest, NextApiResponse } from 'next';'
import { readState } from '../../../lib/integrations/fileStore';
export default function handler() { return null; }
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  const { providerId } = req.query as { providerId?: string };
  const state = readState();
  const logs = providerId ? state.logs.filter(l => l.providerId === providerId) : state.logs;
  res.status(200).json({ logs })
:pages_backup/api/integrations/logs.ts
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}

<<<<<<< HEAD:pages/api/integrations/logs.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

}

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/integrations/logs.ts
=======

}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import type { NextApiRequest, NextApiResponse } from './next';
=======

}

}

'
import type { NextApiRequest, NextApiResponse } from './next';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/integrations/logs.ts
import { read_state  } from '../../../lib / integrations / file_store';
;
export default /**;
 * handler - Function description;
 */
:pages_backup/api/integrations/logs.ts
function handler() {
  if (
    return res.status (405).json ({ error: "Method not allowed" })) {
  $2
}
<<<<<<< HEAD:pages/api/integrations/logs.ts
<<<<<<< HEAD
<<<<<<< HEAD
  const { provider_id } = req.query as { provider_id?: string }
  const state = read_state ();
  const logs = provider_id;
    ? state.logs.filter ((l) => l.provider_id === provider_id);
    : state.logs;
  res.status (200).json ({ logs });
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/integrations/logs.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
ursor/fix-website-loading-errors-and-merge-6662

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/integrations/logs.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  const { providerId } = req.query as { providerId?: string },
  const state = null;
  res.status(200).json({ logs })
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
