import type { NextApiRequest, NextApiResponse } from 'next';
import { readPosts, writePosts } from '@/utils/data/blogStore';
import { requireAdmin } from '@/utils/api/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string')
    return res.status(400).json({ error: 'Invalid id' });
  if (req.method === 'PUT') {
    if (!requireAdmin(req, res)) return;
    const posts = readPosts();
    const idx = posts.findIndex(p => p.id === id);    if (idx < 0) return res.status(404).json({ error: 'Not found' });
    const updated = { ...posts[idx], ...req.body, id };
    posts[idx] = updated;
    writePosts(posts);
    return res.status(200).json(updated);
  }

  return res.status(405).end();
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });

  if (req.method === 'PUT') {
    if (!requireAdmin(req, res)) return;
    const posts = readPosts();
<<<<<<< HEAD
    const idx = posts.findIndex(p => p.id === id);
=======
    const idx = posts.findIndex((p) => p.id === id);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
