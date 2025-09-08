import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD


=======
import { v4 as uuidv4 } from 'uuid';
import { BlogPost } from '@/utils/types/blog';
import { readPosts, writePosts } from '@/utils/data/blogStore';
import { requireAdmin } from '@/utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { status, topic, tag, author, limit, offset } = req.query;
    let posts = readPosts();
return res.status (405).end ();
    }
    const post: BlogPost = {_id: uuidv4(), _title: body.title!, _slug: body.slug!, _coverImageUrl: body.coverImageUrl || '', _author: body.author!, _publishDate: body.publishDate!, _tags: body.tags || [], _topics: body.topics || [], _seo: {
        metaTitle: body.seo?.metaTitle || body.title!, _metaDescription: body.seo?.metaDescription || '', _ogImageUrl: body.seo?.ogImageUrl || body.coverImageUrl || ''},
      body: body.body || '',
      status: body.status || 'draft',
      metrics: { views: 0, likes: 0, shares: 0 }},
    posts.unshift(post),
    writePosts(posts),
    return res.status(201).json(post)

  }

  return res.status(405).end()

}
import { v4 as uuidv4  } from 'uuid';
import { BlogPost  } from '@/utils/types/blog';
import { readPosts, writePosts } from '@/utils/data/blogStore';
import { requireAdmin } from '@/utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'GET') {
  if (req.method === 'GET') {;
    const { status, topic, tag, author, limit, offset } = req.query;
    let posts = readPosts();
    if (status && typeof status === 'string')
      posts = posts.filter(p => p.status === status);
    if (topic && typeof topic === 'string')
      posts = posts.filter(p => (p.topics |[]).includes(topic));
    if (tag && typeof tag === 'string')
      posts = posts.filter(p => (p.tags |[]).includes(tag));
    if (author && typeof author === 'string')
      posts = posts.filter(p => p.author === author);
>>>>>>> origin/cursor/delete-old-data-records-6bba




<<<<<<< HEAD




=======

return res.status (405).end ();
}
import { BlogPost  } from '@/utils/types/blog';
import { readPosts, writePosts } from '@/utils/data/blogStore';
import { requireAdmin } from '@/utils/api/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'GET') {
  if (req.method === 'GET') {;}
}

import { v4 as uuidv4  } from 'uuid';
return res.status (405).end ();
}

import { v4 as uuidv4  } from 'uuid';
import { BlogPost  } from '@/utils/types/blog';
import { readPosts, writePosts } from '@/utils/data/blogStore';
import { requireAdmin } from '@/utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'GET') {
  if (req.method === 'GET') {;}
}
const { status, topic, tag, author, limit, offset } = req.query;
import { v4 as uuidv4  } from uuid';
import { BlogPost  } from '@/utils/types/blog;
import { readPosts, writePosts } from @/utils/data/blogStore';
import { requireAdmin } from '@/utils/api/auth;
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === GET') {
  if (req.method === 'GET) {}
}
    let posts = readPosts();
    if (status && typeof status === string')
      posts = posts.filter(p => p.status === status);
    if (topic && typeof topic === 'string)
      posts = posts.filter(p => (p.topics |[]).includes(topic));
    if (tag && typeof tag === string')
      posts = posts.filter(p => (p.tags |[]).includes(tag));
    if (author && typeof author === 'string)
      posts = posts.filter(p => p.author === author);
    posts = posts.sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );


    return res;

    posts.unshift(post);
    writePosts(posts);
    return res.status(201).json(post);

  }
return res.status(405).end();
}

    posts.unshift(post);
    writePosts(posts);
    return res.status(201).json(post);
  }

  return res.status(405).end();
return res.status(405).end();
}

}
}
  return res.status(405).end();
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df