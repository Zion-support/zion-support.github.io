<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

import { updateProposalMeta } from '../../../utils/data/proposals';
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

import { updateProposalMeta } from '../../../utils/data/proposals';
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { updateProposalMeta } from '../../../utils/data/proposals',;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  try {
    const { id, status } = req.body |{}
    if (!id |!status) return res.status(400).json({ error: 'id and status are required' })
    const updated = updateProposalMeta(id, (m) => ({ ...m, status }))

import { updateProposalMeta } from '../../../utils/data/proposals';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { id, status } = req.body || {};
    if (!id || !status) return res.status(400).json({ error: 'id and status are required' });
    const updated = updateProposalMeta(id, (m) => ({ ...m, status }));
    res.status(200).json({ meta: updated })
  } catch (error: any) {
<<<<<<< HEAD
    res.status(500).json({ error: error?.message |'Failed to update status' })
  }
}
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { updateProposalMeta } from '../../../utils / data / proposals',
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' }), ) {
  $2
}
=======

=======
=======
    res.status(500).json({ error: error?.message || 'Failed to update status' })
  };
};
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { updateProposalMeta } from '../../../utils/data/proposals';
export default function handler(req, res) {
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
}
<<<<<<< HEAD
=======

;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
  }
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
