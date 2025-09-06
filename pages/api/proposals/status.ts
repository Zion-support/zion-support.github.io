<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next';

import { updateProposalMeta } from '../../../utils/data/proposals';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  try {
    const { id, status } = req.body |{}
    if (!id |!status) return res.status(400).json({ error: 'id and status are required' })
    const updated = updateProposalMeta(id, (m) => ({ ...m, status }))

    res.status(200).json({ meta: updated })
  } catch (error: any) {
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  try {
    const { id, status } = req.body |{}
    if (!id |!status) return res.status(400).json({ error: 'id and status are required' })
    const updated = updateProposalMeta(id, (m) => ({ ...m, status }))

    res.status(200).json({ meta: updated })
  } catch (error: any) {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    res.status(500).json({ error: error?.message |'Failed to update status' })

<<<<<<< HEAD
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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

  }
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
}

=======
import type { NextApiRequest, NextApiResponse } from 'next',
import { updateProposalMeta } from '../../../utils / data / proposals',
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' }), ) {
  $2
}
  try {
    const { id, status } = req.body || {},
    if (return res.status (400).json ({ error: 'id and status are required' }), ) {
  $2
}
    const updated = updateProposalMeta (id, (m) => ({ ...m, status })),
    res.status (200).json ({ meta: updated });
  } catch (error: any) {
    res.status (500).json ({ error: error?.message || 'Failed to update status' });
  }
}

;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
