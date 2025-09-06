<<<<<<< HEAD


<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import type { NextApiRequest, NextApiResponse } from 'next';

import { getShared } from './share';

<<<<<<< HEAD
}

}

=======
export default function handler(req, res) {
  try {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next',;
import { getShared } from './share',;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query,
  if (!id || Array.isArray(id)) return res.status(400).json({ error: 'Missing id' }),
  const entry = getShared(id),
  if (!entry) return res.status(404).json({ error: 'Not found' }),
  res.status(200).json({ markdown: entry.markdown, public: entry.public, createdAt: entry.createdAt });
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
import { getShared } from './share';
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const { id } = req.query;
  if (!id || Array.isArray(id)) return res.status(400).json({ error: 'Missing id' });
  const entry = getShared(id);
  if (!entry) return res.status(404).json({ error: 'Not found' });
  res.status(200).json({ markdown: entry.markdown, public: entry.public, createdAt: entry.createdAt })
<<<<<<< HEAD
}
<<<<<<< HEAD


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
}

=======
=======
export default function handler(req, res) {
  try {
  const { id } = req.query;
  if (!id || Array.isArray(id)) return res.status( error: 'Missing id' ).json({$2});
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
