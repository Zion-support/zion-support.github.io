import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4  } from 'uuid';
import { BlogPost  } from '@/utils/types/blog';
import { readPosts, writePosts } from '@/utils/data/blogStore';
import { requireAdmin } from '@/utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD

  if (req.method === 'GET') {
=======
  if (req.method === 'GET') {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
    posts = posts.sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
    const o = parseInt(String(offset |0), 10) |0;
    const l = parseInt(String(limit |20), 10) |20;
    return res
      .status(200)
      .json({ items: posts.slice(o, o + l), total: posts.length });    if (status && typeof status === 'string') posts = posts.filter((p) => p.status === status);
    if (topic && typeof topic === 'string') posts = posts.filter((p) => (p.topics |[]).includes(topic));
    if (tag && typeof tag === 'string') posts = posts.filter((p) => (p.tags |[]).includes(tag));
    if (author && typeof author === 'string') posts = posts.filter((p) => p.author === author);
    posts = posts.sort((a, b) => (new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()));
    const o = parseInt(String(offset |0), 10) |0;
    const l = parseInt(String(limit |20), 10) |20;
    return res.status(200).json({ items: posts.slice(o, o + l), total: posts.length })
  if (req.method === 'POST') {
    if (!requireAdmin(req, res)) return;
    const body = req.body as Partial<BlogPost>;
    if (!body.title |!body.slug |!body.author |!body.publishDate) {
      return res.status(400).json({ error: 'Missing required fields' });
    const posts = readPosts();
    if (posts.some(p => p.slug === body.slug)) {
      return res.status(409).json({ error: 'Slug already exists' });
    }
    const post: BlogPost = {
      id: uuidv4()
      title: body.title!
      slug: body.slug!
      coverImageUrl: body.coverImageUrl |''
      author: body.author!
      publishDate: body.publishDate!
      tags: body.tags |[]
      topics: body.topics |[]
      seo: {
<<<<<<< HEAD
        metaTitle: body.seo?.metaTitle |body.title!
        metaDescription: body.seo?.metaDescription |''
        ogImageUrl: body.seo?.ogImageUrl |body.coverImageUrl |''
      }
      body: body.body |''
      status: body.status |'draft'
      metrics: { views: 0, likes: 0, shares: 0 }
    }
    posts.unshift(post);
    writePosts(posts);
    return res.status(201).json(post);

  }
return res.status(405).end();
}
=======
        metaTitle: body.seo?.metaTitle || body.title!,
        metaDescription: body.seo?.metaDescription || '',
        ogImageUrl: body.seo?.ogImageUrl || body.coverImageUrl || '',
      },
      body: body.body || '',
      status: body.status || 'draft',
      metrics: { views: 0, likes: 0, shares: 0 },
    };
    posts.unshift(post);
    writePosts(posts);
    return res.status(201).json(post);
  }

<<<<<<< HEAD
  return res.status(405).end();
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
return res.status(405).end();
}

}
}
=======
  return res.status(405).end();
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
