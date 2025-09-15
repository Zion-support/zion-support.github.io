<<<<<<< HEAD








  if (typeof id !== "string")
    return res && res.status(400).json({ error: "Invalid id" });
  if (req && req.method === "PUT") {
    if (!requireAdmin(req, res)) return;
    const posts = readPosts();

    const idx = posts.findIndex((p) => p.id === id);
    if (idx < 0) return res.status(404).json({ error: "Not found" });
    const updated = { ...posts[idx], ...req.body, id }
    const idx = posts.findIndex(p => p.id === id);    if (idx < 0) return res.status(404).json({ error: 'Not found' });
    const updated = { ...posts[idx], ...req.body, id };

    posts[idx] = updated;
    writePosts(posts);
    return res.status(200).json(updated);






    const { id } = req.query;




    if (typeof id !== "string")
      return res.status(400).json({ error: "Invalid id" });


      return res && res.status(400).json({ error: "Invalid id" });

}

  return res.status(405).end();
  export default function handler(req: NextApiRequest, res: NextApiResponse) {

    const { id } = req.query;

    if (typeof id !== "string")
      return res && res.status(400).json({ error: "Invalid id" });
    if (req && req.method === "PUT") {
      if (!requireAdmin(req, res)) return;
      const posts = readPosts();
      const idx = posts && posts.findIndex((p) => p && p.id === id);
      const idx = posts && posts.findIndex((p) => p && p.id === id);
      if (idx < 0) return res && res.status(404).json({ error: "Not found" });
      const updated = { ...posts[idx], ...req && req.body, id };


      posts[idx] = updated;
      writePosts(posts);
      return res.status(200).json(updated);
    }













>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5






>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4





=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { readPosts, writePosts } from '@/utils/data/blogStore';
import { requireAdmin } from '@/utils/api/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });

  if (req.method === 'PUT') {
    if (!requireAdmin(req, res)) return;
    const posts = readPosts();
    const idx = posts.findIndex((p) => p.id === id);
    if (idx < 0) return res.status(404).json({ error: 'Not found' });
    const updated = { ...posts[idx], ...req.body, id };
    posts[idx] = updated;
    writePosts(posts);
    return res.status(200).json(updated);
  }

  return res.status(405).end();
}
>>>>>>> origin/auto/autonomy-17186719616
