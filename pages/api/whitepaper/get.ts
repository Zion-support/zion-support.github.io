import type { NextApiRequest, NextApiResponse } from 'next';
import { getShared } from './share';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (!id || Array.isArray(id)) return res.status(400).json({ error: 'Missing id' });
  const entry = getShared(id);
  if (!entry) return res.status(404).json({ error: 'Not found' });
<<<<<<< HEAD
  res.status(200).json({
    markdown: entry.markdown,
    public: entry.public,
    createdAt: entry.createdAt,
  });
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (!id || Array.isArray(id)) return res.status(400).json({ error: 'Missing id' });
  const entry = getShared(id);
  if (!entry) return res.status(404).json({ error: 'Not found' });
  res.status(200).json({ markdown: entry.markdown, public: entry.public, createdAt: entry.createdAt })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  res.status(200).json({ markdown: entry.markdown, public: entry.public, createdAt: entry.createdAt })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
