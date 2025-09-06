import type { NextApiRequest, NextApiResponse } from 'next';
import { readPosts, writePosts } from '@/utils/data/blogStore';
import { requireAdmin } from '@/utils/api/auth';
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string')
    return res.status(400).json({ error: 'Invalid id' });
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

  if (req.method === 'PUT') {
    if (!requireAdmin(req, res)) return;
    const posts = readPosts();
<<<<<<< HEAD
    const idx = posts.findIndex(p => p.id === id);
=======
    const idx = posts.findIndex((p) => p.id === id);
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    if (idx < 0) return res.status(404).json({ error: 'Not found' });
    const updated = { ...posts[idx], ...req.body, id };
    posts[idx] = updated;
    writePosts(posts);
<<<<<<< HEAD
    return res.status(200).json(updated);
  }

  return res.status(405).end();
=======
    return res.status(200).json(updated)
  }

  return res.status(405).end();
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
