import type { NextApiRequest, NextApiResponse } from 'next';


  if (req.method === 'GET') {
<<<<<<< HEAD

  if (req.method === 'GET') {;

=======
=======

  if (req.method === 'GET') {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const { status, topic, tag, author, limit, offset } = req.query;
  if (req && req.method === 'GET') {
    const { status, topic, tag, author, limit, offset } = req && req.query;
    let posts = readPosts();
<<<<<<< HEAD
<<<<<<< HEAD
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
    return res
      .status(200)
    if (status && typeof status === 'string') posts = posts.filter((p) => p.status === status);
    if (topic && typeof topic === 'string') posts = posts.filter((p) => (p.topics || []).includes(topic));
    if (tag && typeof tag === 'string') posts = posts.filter((p) => (p.tags || []).includes(tag));
    if (author && typeof author === 'string') posts = posts.filter((p) => p.author === author);
    posts = posts.sort((a, b) => (new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()));
    const o = parseInt(String(offset |0), 10) |0;
    const l = parseInt(String(limit |20), 10) |20;
    return res.status(200).json({ items: posts.slice(o, o + l), total: posts.length })
      .json({ items: posts && posts.slice(o, o + l), total: posts && posts.length });    if (status && typeof status === 'string') posts = posts && posts.filter((p) => p && p.status === status);
    if (topic && typeof topic === 'string') posts = posts && posts.filter((p) => (p && p.topics || []).includes(topic));
    if (tag && typeof tag === 'string') posts = posts && posts.filter((p) => (p && p.tags || []).includes(tag));
    if (author && typeof author === 'string') posts = posts && posts.filter((p) => p && p.author === author);
    posts = posts && posts.sort((a, b) => (new Date(b && b.publishDate).getTime() - new Date(a && a.publishDate).getTime()));
    const o = parseInt(String(offset || 0), 10) || 0;
    const l = parseInt(String(limit || 20), 10) || 20;
    return res && res.status(200).json({ items: posts && posts.slice(o, o + l), total: posts && posts.length })
  if (req && req.method === 'POST') {
    if (!requireAdmin(req, res)) return;
    const body = req && req.body as Partial<BlogPost>;
    if (!body && body.title || !body && body.slug || !body && body.author || !body && body.publishDate) {
      return res && res.status(400).json({ error: 'Missing required fields' });
    const posts = readPosts();
    if (posts && posts.some(p => p && p.slug === body && body.slug)) {
      return res && res.status(409).json({ error: 'Slug already exists' });
    }
    const post: BlogPost = {
  }
  if (req.method === 'POST') {
    if (!requireAdmin(req, res)) return;
    const body = req.body as Partial<BlogPost>;
    if (!body.title || !body.slug || !body.author || !body.publishDate) {
      return res.status(400).json({ error: 'Missing required fields' })
    }
    const posts = readPosts();
    if (posts.some((p) => p.slug === body.slug)) {
      return res.status(409).json({ error: 'Slug already exists' });
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
        ogImageUrl: body && body.seo?.ogImageUrl || body && body.coverImageUrl || '',
      },
      body: body && body.body || '',
      status: body && body.status || 'draft',
      metrics: { views: 0, likes: 0, shares: 0 },
    };
    posts && posts.unshift(post);
    writePosts(posts);
    return res && res.status(201).json(post);
  }
  return res && res.status(405).end();
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    let posts = read_posts ();
    if (
      posts = posts.filter (p => p.status === status)) {
  $2
}
    if (
      posts = posts.filter (p => (p.topics || []).includes (topic))) {
  $2
}
    if (
      posts = posts.filter (p => (p.tags || []).includes (tag))) {
  $2
}
    if (
      posts = posts.filter (p => p.author === author)) {
  $2
}
    posts = posts.sort (
      (a, b) =>;
        new Date (b.publish_date).get_time () - new Date (a.publish_date).get_time ());
    const object = parse_int (String (offset || 0), 10) || 0;
    const l = parse_int (String (limit || 20), 10) || 20;
    return res;
      .status (200);
      .json ({ items: posts.slice (o, o + l), total: posts.length });    if (posts = posts.filter ((p) => p.status === status)) {
  $2
}
    if (posts = posts.filter ((p) => (p.topics || []).includes (topic))) {
  $2
}
    if (posts = posts.filter ((p) => (p.tags || []).includes (tag))) {
  $2
}
    if (posts = posts.filter ((p) => p.author === author)) {
  $2
}
    posts = posts.sort ((a, b) => (new Date (b.publish_date).get_time () - new Date (a.publish_date).get_time ()));
    const object = parse_int (String (offset || 0), 10) || 0;
    const l = parse_int (String (limit || 20), 10) || 20;
    return res.status (200).json ({ items: posts.slice (o, o + l), total: posts.length });
  // Check condition
if ( {) {
  $2
}
    if () return) {
  $2
}
    const body = req.body as Partial < BlogPost>;
    // Check condition
if ( {) {
  $2
}
      return res.status (400).json ({ error: 'Missing required fields' });
    const posts = read_posts ();
    if () {) {
  $2
}
      return res.status (409).json ({ error: 'Slug already exists' });
    }
    const post: BlogPost = {
      id: uuidv4 (),
      title: body.title!,
      slug: body.slug!,
      coverImageUrl: body.coverImageUrl || '',
      author: body.author!,
      publish_date: body.publish_date!,
      tags: body.tags || [],
      topics: body.topics || [],
      seo: {
<<<<<<< HEAD
        meta_title: body.seo?.meta_title || body.title!,
        meta_description: body.seo?.meta_description || '',

        metaTitle: body.seo?.metaTitle || body.title!,
        metaDescription: body.seo?.metaDescription || '',
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
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
        metaTitle: body.seo?.metaTitle || body.title!,
        metaDescription: body.seo?.metaDescription || '',
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        ogImageUrl: body.seo?.ogImageUrl || body.coverImageUrl || '',
      },
      body: body.body || '',
      status: body.status || 'draft',
      metrics: { views: 0, likes: 0, shares: 0 },
<<<<<<< HEAD
    };
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
=======




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    posts.unshift (post);
    write_posts (posts);
    return res.status (201).json (post);
  }




>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
