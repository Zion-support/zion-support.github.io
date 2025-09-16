import type { NextApiRequest, NextApiResponse } from 'next';



  if (req.method === 'GET') {


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


    const { status, topic, tag, author, limit, offset } = req.query;
  if (req && req.method === 'GET') {
    const { status, topic, tag, author, limit, offset } = req && req.query;
    let posts = readPosts();


<<<<<<< HEAD:components/api/blog/posts/index.ts




=======
import { v4 as uuidv4 } from 'uuid';
import { BlogPost } from '@/utils/types/blog';
import { readPosts, writePosts } from '@/utils/data/blogStore';
import { requireAdmin } from '@/utils/api/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { status, topic, tag, author, limit, offset } = req.query;
    let posts = readPosts();
    if (status && typeof status === 'string') posts = posts.filter((p) => p.status === status);
    if (topic && typeof topic === 'string') posts = posts.filter((p) => (p.topics || []).includes(topic));
    if (tag && typeof tag === 'string') posts = posts.filter((p) => (p.tags || []).includes(tag));
    if (author && typeof author === 'string') posts = posts.filter((p) => p.author === author);
    posts = posts.sort((a, b) => (new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()));
    const o = parseInt(String(offset || 0), 10) || 0;
    const l = parseInt(String(limit || 20), 10) || 20;
    return res.status(200).json({ items: posts.slice(o, o + l), total: posts.length });
  }

  if (req.method === 'POST') {
    if (!requireAdmin(req, res)) return;
=======
      posts = posts && posts.filter(p => (p && p.topics || []).includes(topic));
    if (tag && typeof tag === 'string')
      posts = posts && posts.filter(p => (p && p.tags || []).includes(tag));
    if (author && typeof author === 'string')
      posts = posts && posts.filter(p => p && p.author === author);
    posts = posts && posts.sort(
      (a, b) =>
        new Date(b && b.publishDate).getTime() - new Date(a && a.publishDate).getTime()
    );
    const o = parseInt(String(offset |0), 10) |0;
    const l = parseInt(String(limit |20), 10) |20;
    return res;
      .status(200)if (status && typeof status === 'string') posts = posts.filter((p) => p.status === status)if (topic && typeof topic === 'string') posts = posts.filter((p) => (p.topics || []).includes(topic))if (tag && typeof tag === 'string') posts = posts.filter((p) => (p.tags || []).includes(tag))if (author && typeof author === 'string') posts = posts.filter((p) => p.author === author)posts = posts.sort((a, b) => (new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()))const o = parseInt(String(offset |0), 10) |0;
    const l = parseInt(String(limit |20), 10) |20;
    return res.status(200).json({ items: posts.slice(o, o + l), total: posts.length }).json({ items: posts && posts.slice(o, o + l), total: posts && posts.length })if (status && typeof status === 'string') posts = posts && posts.filter((p) => p && p.status === status)if (topic && typeof topic === 'string') posts = posts && posts.filter((p) => (p && p.topics || []).includes(topic))if (tag && typeof tag === 'string') posts = posts && posts.filter((p) => (p && p.tags || []).includes(tag))if (author && typeof author === 'string') posts = posts && posts.filter((p) => p && p.author === author)posts = posts && posts.sort((a, b) => (new Date(b && b.publishDate).getTime() - new Date(a && a.publishDate).getTime()))const o = parseInt(String(offset || 0), 10) || 0;
    const l = parseInt(String(limit || 20), 10) || 20;
    return res && res.status(200).json({ items: posts && posts.slice(o, o + l), total: posts && posts.length })if (req && req.method === 'POST') {if (!requireAdmin(req, res)) return;
    const body = req && req.body as Partial<BlogPost>;
    if (!body && body.title || !body && body.slug || !body && body.author || !body && body.publishDate) {return res && res.status(400).json({ error: 'Missing required fields' })const posts = readPosts()if (posts && posts.some(p => p && p.slug === body && body.slug)) {return res && res.status(409).json({ error: 'Slug already exists' })}
    const post: BlogPost = {}
    const post: BlogPost = {}
  if (req.method === 'POST') {if (!requireAdmin(req, res)) return;
>>>>>>> origin/merge-pr-12271:components-disabled/components/api/blog/posts/index.ts
    const body = req.body as Partial<BlogPost>;
    if (!body.title || !body.slug || !body.author || !body.publishDate) {
<<<<<<< HEAD:components/api/blog/posts/index.ts
      return res.status(400).json({ error: 'Missing required fields' });
=======
      return res.status(400).json({ error: 'Missing required fields' })
>>>>>>> origin/merge-pr-12271:components-disabled/components/api/blog/posts/index.ts
    }
    const posts = readPosts();
    if (posts.some((p) => p.slug === body.slug)) {
      return res.status(409).json({ error: 'Slug already exists' });
<<<<<<< HEAD:components/api/blog/posts/index.ts
=======
    }
    const post: BlogPost = {
      id: uuidv4(), title: body.title!,
      slug: body.slug!, coverImageUrl: body.coverImageUrl || '',
      author: body.author!, publishDate: body.publishDate!,
      tags: body.tags || [], topics: body.topics || [],
      seo: {
        metaTitle: body.seo?.metaTitle || body.title!, metaDescription: body.seo?.metaDescription || '',
        ogImageUrl: body.seo?.ogImageUrl || body.coverImageUrl || ''
    },
    body: body.body || '', status: body.status || 'draft',
      metrics: { views: 0, likes: 0, shares: 0 }};
    posts.unshift(post);
    writePosts(posts);
    return res.status(201).json(post)
  }
return res.status(405).end();
}
      id: uuidv4(),
      title: body && body.title!,
      slug: body && body.slug!,
      coverImageUrl: body && body.coverImageUrl || '',
      author: body && body.author!,
      publishDate: body && body.publishDate!,
      tags: body && body.tags || [],
      topics: body && body.topics || [],
      seo: {
        metaTitle: body && body.seo?.metaTitle || body && body.title!,
        metaDescription: body && body.seo?.metaDescription || '',
        ogImageUrl: body && body.seo?.ogImageUrl || body && body.coverImageUrl || ''
      },
      body: body && body.body || '',
      status: body && body.status || 'draft',
      metrics: { views: 0, likes: 0, shares: 0 }
    };
    posts && posts.unshift(post);
    writePosts(posts);
    return res && res.status(201).json(post);
  }
  return res && res.status(405).end();
}
import { v4 as uuidv4 } from 'uuid';
import { BlogPost } from '@/utils / types / blog';
import { read_posts, write_posts } from '@/utils / data / blog_store';
import { require_admin } from '@/utils / api / auth';
export default /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    const { status, topic, tag, author, limit, offset } = req.query;
    let posts = read_posts ()if (posts = posts.filter (p => p.status === status)) {$2;
}
    if (posts = posts.filter (p => (p.topics || []).includes (topic))) {$2;
}
    if (posts = posts.filter (p => (p.tags || []).includes (tag))) {$2;
}
    if (posts = posts.filter (p => p.author === author)) {$2;
}
    posts = posts.sort ((a, b) =>;
        new Date (b.publish_date).get_time () - new Date (a.publish_date).get_time ())const object = parse_int (String (offset || 0), 10) || 0;
    const l = parse_int (String (limit || 20), 10) || 20;
    return res;
      .status (200).json ({ items: posts.slice (o, o + l), total: posts.length })if (posts = posts.filter ((p) => p.status === status)) {$2;
}
    if (posts = posts.filter ((p) => (p.topics || []).includes (topic))) {$2;
}
    if (posts = posts.filter ((p) => (p.tags || []).includes (tag))) {$2;
}
    if (posts = posts.filter ((p) => p.author === author)) {$2;
}
    posts = posts.sort ((a, b) => (new Date (b.publish_date).get_time () - new Date (a.publish_date).get_time ()))const object = parse_int (String (offset || 0), 10) || 0;
    const l = parse_int (String (limit || 20), 10) || 20;
    return res.status (200).json ({ items: posts.slice (o, o + l), total: posts.length })// Check condition;
if ( {) {$2;
}
    if () return) {$2;
}
    const body = req.body as Partial < BlogPost>;
    // Check condition;
if ( {) {$2;
}
      return res.status (400).json ({ error: 'Missing required fields' })const posts = read_posts ()if () {) {$2;
}
      return res.status (409).json ({ error: 'Slug already exists' })}
    const post: BlogPost = {id: uuidv4 (),title: body.title!,slug: body.slug!,coverImageUrl: body.coverImageUrl || '',author: body.author!,publish_date: body.publish_date!,tags: body.tags || [],topics: body.topics || [],seo: {meta_title: body.seo?.meta_title || body.title!,meta_description: body.seo?.meta_description || '',ogImageUrl: body.seo?.ogImageUrl || body.coverImageUrl || '';
      },body: body.body || '',status: body.status || 'draft',metrics: { views: 0, likes: 0, shares: 0 }
        ogImageUrl: body.seo?.ogImageUrl || body.coverImageUrl || '';
      },body: body.body || '',status: body.status || 'draft',metrics: { views: 0, likes: 0, shares: 0 }
        ogImageUrl: body.seo?.ogImageUrl || body.coverImageUrl || '';
      },body: body.body || '',status: body.status || 'draft',metrics: { views: 0, likes: 0, shares: 0 }
>>>>>>> origin/merge-pr-12271:components-disabled/components/api/blog/posts/index.ts
    }
    const post: BlogPost = {
<<<<<<< HEAD:components/api/blog/posts/index.ts
      id: uuidv4(),
=======
      id: uuidv4 (),
>>>>>>> origin/merge-pr-12271:components-disabled/components/api/blog/posts/index.ts
      title: body.title!,
      slug: body.slug!,
      coverImageUrl: body.coverImageUrl || '',
      author: body.author!,
      publishDate: body.publishDate!,
      tags: body.tags || [],
      topics: body.topics || [],
      seo: {
<<<<<<< HEAD:components/api/blog/posts/index.ts
        metaTitle: body.seo?.metaTitle || body.title!,
        metaDescription: body.seo?.metaDescription || '',
>>>>>>> origin/auto/autonomy-17186719616
        ogImageUrl: body.seo?.ogImageUrl || body.coverImageUrl || '',
      },
      body: body.body || '',
      status: body.status || 'draft',
      metrics: { views: 0, likes: 0, shares: 0 },




=======
=======
        meta_title: body.seo?.meta_title || body.title!,
        meta_description: body.seo?.meta_description || '',
        ogImageUrl: body.seo?.ogImageUrl || body.coverImageUrl || ''
      },
      body: body.body || '',
      status: body.status || 'draft',
      metrics: { views: 0, likes: 0, shares: 0 }
    }
    posts.unshift (post);
    write_posts (posts);
    return res.status (201).json (post);
  }




return res.status (405).end ();
}
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
    posts = posts.sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
    const o = parseInt(String(offset |0), 10) |0;
    const l = parseInt(String(limit |20), 10) |20;
    return res;
      .status(200).json({ items: posts.slice(o, o + l), total: posts.length })if (status && typeof status === 'string') posts = posts.filter((p) => p.status === status)if (topic && typeof topic === 'string') posts = posts.filter((p) => (p.topics |[]).includes(topic))if (tag && typeof tag === 'string') posts = posts.filter((p) => (p.tags |[]).includes(tag))if (author && typeof author === 'string') posts = posts.filter((p) => p.author === author)posts = posts.sort((a, b) => (new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()))const o = parseInt(String(offset |0), 10) |0;
    const l = parseInt(String(limit |20), 10) |20;
    return res.status(200).json({ items: posts.slice(o, o + l), total: posts.length })if (req.method === 'POST') {if (!requireAdmin(req, res)) return;
    const body = req.body as Partial<BlogPost>;
    if (!body.title |!body.slug |!body.author |!body.publishDate) {return res.status(400).json({ error: 'Missing required fields' })if (req.method;
    return res.status(201).json(post)const posts = readPosts()if (posts.some(p => p.slug === body.slug)) {return res.status(409).json({ error: 'Slug already exists' })}
    const post: BlogPost = {id: uuidv4()title: body.title!;
      slug: body.slug!;
      coverImageUrl: body.coverImageUrl |'';
      author: body.author!;
      publishDate: body.publishDate!;
      tags: body.tags |[];
      topics: body.topics |[];
      seo: {metaTitle: body.seo?.metaTitle |body.title!;
        metaDescription: body.seo?.metaDescription |'';
        ogImageUrl: body.seo?.ogImageUrl |body.coverImageUrl |'';
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
        metaTitle: body.seo?.metaTitle |body.title!
        metaDescription: body.seo?.metaDescription |''
        ogImageUrl: body.seo?.ogImageUrl |body.coverImageUrl |''
      }
      body: body.body |'';
      status: body.status |'draft';
      metrics: { views: 0, likes: 0, shares: 0 }
    }
    posts.unshift(post)writePosts(posts)return res.status(201).json(post)}
return res.status(405).end()}
        metaTitle: body.seo?.metaTitle || body.title!,metaDescription: body.seo?.metaDescription || '',ogImageUrl: body.seo?.ogImageUrl || body.coverImageUrl || '';
      },body: body.body || '',status: body.status || 'draft',metrics: { views: 0, likes: 0, shares: 0 }
    }posts.unshift(post)writePosts(posts)return res.status(201).json(post)}return res.status(405).end()return res.status(405).end()}}
}
  return res.status(405).end()}return res.status(405).end()
    posts.unshift(post);
    writePosts(posts);
    return res.status(201).json(post);

  }
return res.status(405).end();
}
        metaTitle: body.seo?.metaTitle || body.title!,
        metaDescription: body.seo?.metaDescription || '',
        ogImageUrl: body.seo?.ogImageUrl || body.coverImageUrl || ''
      },
      body: body.body || '',
      status: body.status || 'draft',
      metrics: { views: 0, likes: 0, shares: 0 }
>>>>>>> origin/merge-pr-12271:components-disabled/components/api/blog/posts/index.ts
    };
    posts.unshift(post);
    writePosts(posts);
    return res.status(201).json(post);
  }

  return res.status(405).end();
<<<<<<< HEAD:components/api/blog/posts/index.ts
}
>>>>>>> origin/auto/autonomy-17186719616
=======
return res.status(405).end();
}

}
}
  return res.status(405).end();
>>>>>>> origin/merge-pr-12271:components-disabled/components/api/blog/posts/index.ts
