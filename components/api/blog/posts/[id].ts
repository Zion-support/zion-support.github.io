

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const { id } = req.query;
=======  if (typeof id !== "string")
    return res && res.status(400).json({ error: "Invalid id" });
  if (req && req.method === "PUT") {
    if (!requireAdmin(req, res)) return;
    const posts = readPosts();

=======    const idx = posts.findIndex((p) => p.id === id);
    if (idx < 0) return res.status(404).json({ error: "Not found" });
    const updated = { ...posts[idx], ...req.body, id }
    const idx = posts.findIndex(p => p.id === id);    if (idx < 0) return res.status(404).json({ error: 'Not found' });
    const updated = { ...posts[idx], ...req.body, id };
    posts[idx] = updated;
    writePosts(posts);
    return res.status(200).json(updated);


    const idx = posts && posts.findIndex((p) => p && p.id === id);
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
    return res.status(200).json(updated)
  }

  return res && res.status(405).end();
  export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req && req.query;
    posts[idx] = updated;
    writePosts(posts);
    return res.status(200).json(updated);
=======
=======
  export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req && req.query;
    if (typeof id !== "string")


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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      posts[idx] = updated;
      writePosts(posts);
      return res && res.status(200).json(updated);
    }

==============
  return res.status(405).end();

  if (req.method === 'PUT') {
    if (!requireAdmin(req, res)) return;
    const posts = readPosts();

    if (idx < 0) return res.status(404).json({ error: 'Not found' });
    const updated = { ...posts[idx], ...req.body, id };
    posts[idx] = updated;
  return res.status(405).end()

}

==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return res.status(405).end();

  if (req.method === 'PUT') {
    if (!requireAdmin(req, res)) return;
    const posts = readPosts();

    if (idx < 0) return res.status(404).json({ error: 'Not found' });
    const updated = { ...posts[idx], ...req.body, id };
    posts[idx] = updated;
    writePosts(posts);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
