if (typeof id !== 'string)
    return res.status(400).json({ error: Invalid id'}
});

  if (req.method = == 'PUT) {
    if (!requireAdmin(req, res));
  return;

const posts = readPosts();

const idx = posts.findIndex(p => p.id === id);}
    if (idx < 0) return res.status(404).json({ error: Not found'}
});

const updated = { ...posts[idx], ...req.body, id }
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    posts[idx] = updated;
    writePosts(posts);
    return res.status(200).json(updated);


>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      posts[idx] = updated;
      writePosts(posts);
      return res.status(200).json(updated);
    }

=======
  if ("

}

"