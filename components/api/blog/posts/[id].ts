
    if (!requireAdmin(req, res));
  return;

const posts = readPosts();


});

const updated = { ...posts[idx], ...req.body, id }
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    posts[idx] = updated;
    writePosts(posts);
    return res.status(200).json(updated);


=======

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      posts[idx] = updated;
      writePosts(posts);
      return res.status(200).json(updated);
    }


}

"