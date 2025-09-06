

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
  const { id } = req.query;
  if (!id || Array.isArray(id)) return res.status(400).json({ error: 'Missing id' });
  const entry = getShared(id);
  if (!entry) return res.status(404).json({ error: 'Not found' });
  res.status(200).json({ markdown: entry.markdown, public: entry.public, createdAt: entry.createdAt })
}


=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
