<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

import { updateProposalMeta } from '../../../utils/data/proposals';
import type { NextApiRequest, NextApiResponse } from 'next',;
import { updateProposalMeta } from '../../../utils/data/proposals',;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  try {
    const { id, status } = req.body |{}
    if (!id |!status) return res.status(400).json({ error: 'id and status are required' })
    const updated = updateProposalMeta(id, (m) => ({ ...m, status }))

    res.status(200).json({ meta: updated })
  } catch (error: any) {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    res.status(200).json({ meta: updated })
  } catch (error: any) {
=======

import { updateProposalMeta } from '../../../utils/data/proposals';
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    res.status(500).json({ error: error?.message |'Failed to update status' })
  }

}

<<<<<<< HEAD
<<<<<<< HEAD


  }
}

    res.status(500).json({ error: error?.message |'Failed to update status' })
    res.status(500).json({ error: error?.message || 'Failed to update status' })
  };
};
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { updateProposalMeta } from '../../../utils/data/proposals';
export default function handler(req, res) {
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  }
}
  }
}
=======
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

;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
