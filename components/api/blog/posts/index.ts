import type { NextApiRequest, NextApiResponse } from 'next';





>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



  if (req.method === 'GET') {


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


    const { status, topic, tag, author, limit, offset } = req.query;
  if (req && req.method === 'GET') {
    const { status, topic, tag, author, limit, offset } = req && req.query;
    let posts = readPosts();






        ogImageUrl: body.seo?.ogImageUrl || body.coverImageUrl || '',
      },
      body: body.body || '',
      status: body.status || 'draft',
      metrics: { views: 0, likes: 0, shares: 0 },
    }
    posts.unshift (post);
    write_posts (posts);
    return res.status (201).json (post);
  }





>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba




