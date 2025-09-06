import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { BlogPost } from '@/utils/types/blog';
import { readPosts, writePosts } from '@/utils/data/blogStore';
import { requireAdmin } from '@/utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method === 'GET') {
    const { status, topic, tag, author, limit, offset } = req && req.query;
    let posts = readPosts();
    if (status && typeof status === 'string')
      posts = posts && posts.filter(p => p && p.status === status);
    if (topic && typeof topic === 'string')
      posts = posts && posts.filter(p => (p && p.topics || []).includes(topic));
    if (tag && typeof tag === 'string')
      posts = posts && posts.filter(p => (p && p.tags || []).includes(tag));
    if (author && typeof author === 'string')
      posts = posts && posts.filter(p => p && p.author === author);
    posts = posts && posts.sort(
      (a, b) =>
        new Date(b && b.publishDate).getTime() - new Date(a && a.publishDate).getTime()
    );
    const o = parseInt(String(offset || 0), 10) || 0;
    const l = parseInt(String(limit || 20), 10) || 20;
    return res
      .status(200)
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
