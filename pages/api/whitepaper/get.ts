<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import type { NextApiRequest, NextApiResponse } from 'next';

import { getShared } from './share';

export default function handler(req, res) {
  try {
<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const { id } = req.query;
  if (!id || Array.isArray(id)) return res.status(400).json({ error: 'Missing id' });
  const entry = getShared(id);
  if (!entry) return res.status(404).json({ error: 'Not found' });
  res.status(200).json({ markdown: entry.markdown, public: entry.public, createdAt: entry.createdAt })
<<<<<<< HEAD
=======
<<<<<<< HEAD
}


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
}

export default function handler(req, res) {
  try {
  const { id } = req.query;
  if (!id || Array.isArray(id)) return res.status( error: 'Missing id' ).json({$2});
  const entry = getShared(id);
=======


import type { NextApiRequest, NextApiResponse } from 'next';

import { getShared } from './share';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  if (!id |Array.isArray(id)) return res.status(400).json({ error: 'Missing id' })
  const entry = getShared(id)
  if (!entry) return res.status(404).json({ error: 'Not found' })

  res.status(200).json({ markdown: entry.markdown, public: entry.public, createdAt: entry.createdAt })
export default function handler(req, res) {
  try {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const { id } = req.query;
  if (!id || Array.isArray(id)) return res.status(400).json({ error: 'Missing id' });
  const entry = getShared(id);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
}
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
