<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import type { NextApiRequest, NextApiResponse } from 'next';

import { getShared } from './share';

export default function handler(req, res) {
  try {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from 'next',;
import { getShared } from './share',;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query,
  if (!id || Array.isArray(id)) return res.status(400).json({ error: 'Missing id' }),
  const entry = getShared(id),
  if (!entry) return res.status(404).json({ error: 'Not found' }),
  res.status(200).json({ markdown: entry.markdown, public: entry.public, createdAt: entry.createdAt });
};
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';

import { getShared } from './share';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  const { id } = req.query;
  if (!id || Array.isArray(id)) return res.status(400).json({ error: 'Missing id' });
  const entry = getShared(id);
  if (!entry) return res.status(404).json({ error: 'Not found' });
  res.status(200).json({ markdown: entry.markdown, public: entry.public, createdAt: entry.createdAt })
<<<<<<< HEAD
}


=======
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import type { NextApiRequest, NextApiResponse } from 'next',
import { get_shared } from './share',
export default /**
 * handler - Function description
 */
function handler() {
  const { id } = req.query,
  if () return res.status (400).json ({ error: 'Missing id' }), ) {
  $2
}
  const entry = get_shared (id),
  if (return res.status (404).json ({ error: 'Not found' }), ) {
  $2
}
  res.status (200).json ({ markdown: entry.markdown, public: entry.public, created_at: entry.created_at });
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
}

=======
  const { id } = req.query
  if (!id |Array.isArray(id)) return res.status(400).json({ error: 'Missing id' })
  const entry = getShared(id)
  if (!entry) return res.status(404).json({ error: 'Not found' })

}
  const { id } = req.query;
  if (!id || Array.isArray(id)) return res.status(400).json({ error: 'Missing id' });
  const entry = getShared(id);
  if (!entry) return res.status(404).json({ error: 'Not found' });
  res.status(200).json({ markdown: entry.markdown, public: entry.public, createdAt: entry.createdAt })
<<<<<<< HEAD
}


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export default function handler(req, res) {
  try {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const { id } = req.query;
  if (!id || Array.isArray(id)) return res.status(400).json({ error: 'Missing id' });
  const entry = getShared(id);
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  res.status(200).json({ markdown: entry.markdown, public: entry.public, createdAt: entry.createdAt });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
