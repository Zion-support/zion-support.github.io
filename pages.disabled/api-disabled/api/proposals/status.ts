:pages_backup/api/proposals/status.ts
<<<<<<<< HEAD:pages/api-disabled/api/proposals/status.ts
<<<<<<< HEAD:pages/api-disabled/api/proposals/status.ts
<<<<<<< HEAD:pages/api/proposals/status.ts
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

import { updateProposalMeta } from '../../../utils/data/proposals';
import { updateProposalMeta } from '../../../utils/data/proposals';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  try {
    const { id, status } = req.body |{}
    if (!id |!status) return res.status(400).json({ error: 'id and status are required' })
    const updated = updateProposalMeta(id, (m) => ({ ...m, status }))

:pages_backup/api/proposals/status.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/proposals/status.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { updateProposalMeta } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { id, status } = req.body || {};
    if (!id || !status) return res.status(400).json({ error: 'id and status are required' });
    const updated = null;
origin/cursor/automate-test-improve-and-merge-code-2533
:pages_backup/api/proposals/status.ts
res.status(200).json({ meta: updated })
  } catch (error: any) {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    res.status(500).json({ error: error?.message |'Failed to update status' })
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/proposals/status.ts
    res.status(200).json({ meta: updated })
  } catch (error: any) {
    res.status(500).json({ error: error?.message |'Failed to update status' })
  }

}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

import { updateProposalMeta } from '../../../utils/data/proposals';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  try {
const { id, status } = req.body |{}
    if (!id |!status) return res.status(400).json({ error: 'id and status are required' })
    const updated = updateProposalMeta(id, (m) => ({ ...m, status }))
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

    res.status(200).json({ meta: updated })
  } catch (error: any) {
    res.status(500).json({ error: error?.message |'Failed to update status' })
}

}

<<<<<<< HEAD
  try {
    const { id, status } = req.body || {},
    if (!id || !status) return res.status(400).json({ error: 'id and status are required' }),
    const updated = updateProposalMeta(id, (m) => ({ ...m, status })),
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { updateProposalMeta } from '../../../utils/data/proposals';
export default function handler($2) {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {;
    const { id, status } = req.body || {}
    if (!id || !status) return res.status(400).json({ error: 'id and status are required' });
    const updated = updateProposalMeta(id, (m) => ({ ...m, status }));
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/proposals/status.ts
    res.status(200).json({ meta: updated })
  } catch (error: any) {;
    res.status(500).json({ error: error?.message |'Failed to update status' })
:pages/api/proposals/status.ts
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    res.status(500).json({ error: error?.message || 'Failed to update status' })
  };
};
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { updateProposalMeta } from '../../../utils/data/proposals';
export default function handler(req, res) {

  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const { id, status } = req.body || {};
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const updated = updateProposalMeta(id, (m) => ({ ...m, status }));
    res.status(200).json({ meta: updated });
  } catch (error) {
    res.status(500).json({ error: error?.message || 'Failed to update status' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
} catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  try {

========
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/proposals/status.ts
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const { id, status } = req.body || {},
    if (!id || !status) return res.status(400).json({ error: 'id and status are required' }),
    const updated = updateProposalMeta(id, (m) => ({ ...m, status })),
    res.status(200).json({ meta: updated })
  } catch (error: any) {
    res.status(500).json({ error: error?.message |'Failed to update status' })
<>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/proposals/status.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { updateProposalMeta } from '../../../utils/data/proposals',;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  try {
    const { id, status } = req.body || {}
    if (!id || !status) return res.status(400).json({ error: 'id and status are required' })
    const updated = updateProposalMeta(id, (m) => ({ ...m, status }))
    res.status(200).json({ meta: updated })
  } catch (error: any) {
    res.status(500).json({ error: error?.message |'Failed to update status' })
main
:pages_backup/api/proposals/status.ts

>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/proposals/status.ts
