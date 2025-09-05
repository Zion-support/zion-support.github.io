<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { readPosts, writePosts } from '@/utils/data/blogStore',
import { requireAdmin } from '@/utils/api/auth',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query,
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' }),

  if (req.method === 'PUT') {
    if (!requireAdmin(req, res)) return,
    const posts = readPosts(),
    const idx = posts.findIndex((p) => p.id === id),
    if (idx < 0) return res.status(404).json({ error: 'Not found' }),
    const updated = { ...posts[idx], ...req.body, id },
    posts[idx] = updated,
    writePosts(posts),
    return res.status(200).json(updated)
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { id} = req.query;
  if (typeof id !== 'string') return res.status(400).json({_error: 'Invalid id'});

  if (req.method === 'PUT') {_if (!requireAdmin(req, _res)) return;
    const _posts = readPosts();
    const _idx = posts.findIndex(_(p) => p.id === id);
    if (idx < 0) return res.status(404).json({ error: 'Not found'});
    const _updated = {_...posts[idx], _...req.body, _id};
    posts[idx] = updated;
    writePosts(posts);
    return res.status(200).json(updated);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }

  return res.status(405).end()
}