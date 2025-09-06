<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import type { NextApiRequest, NextApiResponse } from 'next',;
import { getShared } from './share',;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query,
  if (!id || Array.isArray(id)) return res.status(400).json({ error: 'Missing id' }),
  const entry = getShared(id),
  if (!entry) return res.status(404).json({ error: 'Not found' }),
=======
>>>>>>> pr-12243
import type { NextApiRequest, NextApiResponse } from 'next';
import { getShared } from './share',;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  if (!id || Array.isArray(id)) return res.status(400).json({ error: 'Missing id' })
  const entry = getShared(id)
  if (!entry) return res.status(404).json({ error: 'Not found' })
<<<<<<< HEAD
=======
>>>>>>> main
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { getShared } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (!id || Array.isArray(id)) return res.status(400).json({ error: 'Missing id' });
  const entry = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> pr-12243
  res.status(200).json({ markdown: entry.markdown, public: entry.public, createdAt: entry.createdAt })
<<<<<<< HEAD
export default function handler(req, res) {
  try {
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
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
};
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
