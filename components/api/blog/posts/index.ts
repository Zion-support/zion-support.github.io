import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { BlogPost } from '@/utils/types/blog';
import { readPosts, writePosts } from '@/utils/data/blogStore';
import { requireAdmin } from '@/utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { status, topic, tag, author, limit, offset } = req.query,
    let posts = readPosts($2);
    if (status && typeof status = $2;
    if (topic && typeof topic = $2;
    if (tag && typeof tag = $2;
    if (author && typeof author = $2;
    posts = posts.sort((a, b) => (new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())),
    const o = parseInt(String(offset || 0), 10) || 0,
    const l = parseInt(String(limit || 20), 10) || 20,
    return res.status(200).json({ items: posts.slice(o, o + l), total: posts.length })
  }

  if (req.method === 'POST') {
    if (!requireAdmin(req, res)) return,
    const body = $2;
    if (!body.title || !body.slug || !body.author || !body.publishDate) {
      return res.status(400).json({ error: 'Missing required fields' })
    }
    const posts = readPosts($2);
    if (posts.some((p) => p.slug === body.slug)) {
      return res.status(409).json({ error: 'Slug already exists' })
    }
    const post: BlogPost = {
      id: uuidv4($2);
      title: body.title!,
      slug: body.slug!,
      coverImageUrl: body.coverImageUrl || '',
      author: body.author!,
      publishDate: body.publishDate!,
      tags: body.tags || [],
      topics: body.topics || [],
      seo: {
        metaTitle: body.seo?.metaTitle || body.title!,
        metaDescription: body.seo?.metaDescription || '',
        ogImageUrl: body.seo?.ogImageUrl || body.coverImageUrl || ''},
      body: body.body || '',
      status: body.status || 'draft',
      metrics: { views: 0, likes: 0, shares: 0}},
    posts.unshift($2);
    writePosts($2);
    return res.status(201).json(post)
  }

  return res.status(405).end()
}