import type { NextApiRequest, NextApiResponse } from 'next';

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
    const { status, topic, tag, author, limit, offset } = req.query;
  if (req && req.method === 'GET') {
    const { status, topic, tag, author, limit, offset } = req && req.query;
    let posts = readPosts();


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
        meta_title: body.seo?.meta_title || body.title!,
        meta_description: body.seo?.meta_description || '',
=======

        metaTitle: body.seo?.metaTitle || body.title!,
        metaDescription: body.seo?.metaDescription || '',
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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




>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
