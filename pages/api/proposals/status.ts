<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from 'next';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import { updateProposalMeta } from '../../../utils/data/proposals';
<<<<<<< HEAD

import { updateProposalMeta } from '../../../utils/data/proposals';
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  try {
    const { id, status } = req.body |{}
    if (!id |!status) return res.status(400).json({ error: 'id and status are required' })
    const updated = updateProposalMeta(id, (m) => ({ ...m, status }))

    res.status(200).json({ meta: updated })
  } catch (error: any) {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    res.status(500).json({ error: error?.message |'Failed to update status' })
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


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
<<<<<<< HEAD
    const { id, status } = req.body |{}
    if (!id |!status) return res.status(400).json({ error: 'id and status are required' })
    const updated = updateProposalMeta(id, (m) => ({ ...m, status }))
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

    res.status(200).json({ meta: updated })
  } catch (error: any) {
    res.status(500).json({ error: error?.message |'Failed to update status' })
<<<<<<< HEAD
  }

}

<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
=======


  }
}

    res.status(500).json({ error: error?.message |'Failed to update status' })
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======
    res.status(500).json({ error: error?.message |'Failed to update status' })
  }

}

import type { NextApiRequest, NextApiResponse } from 'next',
import { updateProposalMeta } from '../../../utils / data / proposals',
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' }), ) {
  $2
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
}
  }
}
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

;



>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
