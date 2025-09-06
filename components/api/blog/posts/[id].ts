<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import type { NextApiRequest, NextApiResponse } from "next";
import { readPosts, writePosts } from "@/utils/data/blogStore";
import { requireAdmin } from "@/utils/api/auth";
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const { id } = req.query;
  if (typeof id !== "string")
    return res.status(400).json({ error: "Invalid id" });
  if (req.method === "PUT") {
    if (!requireAdmin(req, res)) return;
    const posts = readPosts();
<<<<<<< HEAD
    const idx = posts.findIndex((p) => p.id === id);
    if (idx < 0) return res.status(404).json({ error: "Not found" });
    const updated = { ...posts[idx], ...req.body, id }
=======
    const idx = posts.findIndex(p => p.id === id);    if (idx < 0) return res.status(404).json({ error: 'Not found' });
    const updated = { ...posts[idx], ...req.body, id };
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    posts[idx] = updated;
    writePosts(posts);
    return res.status(200).json(updated);

<<<<<<< HEAD
  }
<<<<<<< HEAD
  return res.status(405).end();
  export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======
<<<<<<< HEAD
return res.status(405).end();
  export default function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    const { id } = req.query;
    if (typeof id !== "string")
      return res.status(400).json({ error: "Invalid id" });
    if (req.method === "PUT") {
      if (!requireAdmin(req, res)) return;
      const posts = readPosts();
      const idx = posts.findIndex((p) => p.id === id);
      const idx = posts.findIndex((p) => p.id === id);
      if (idx < 0) return res.status(404).json({ error: "Not found" });
      const updated = { ...posts[idx], ...req.body, id }
      posts[idx] = updated;
      writePosts(posts);
      return res.status(200).json(updated);
    }
    return res.status(405).end();
    return res.status(200).json(updated);
  }
  return res.status(405).end();
}
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return res.status(405).end();

  if (req.method === 'PUT') {
    if (!requireAdmin(req, res)) return;
    const posts = readPosts();

    if (idx < 0) return res.status(404).json({ error: 'Not found' });
    const updated = { ...posts[idx], ...req.body, id };
    posts[idx] = updated;
    writePosts(posts);
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
