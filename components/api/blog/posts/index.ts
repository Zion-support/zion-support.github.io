import type { NextApiRequest, NextApiResponse } from 'next',
import { v4 as uuidv4 } from 'uuid'
import { BlogPost } from '@/utils/types/blog'
import { readPosts, writePosts } from '@/utils/data/blogStore',
import { requireAdmin } from '@/utils/api/auth'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { status, topic, tag, author, limit, offset } = req.query,
    let posts = readPosts()
    if (status && typeof status === 'string') posts = posts.filter((p) => p.status === status),
    if (topic && typeof topic === 'string') posts = posts.filter((p) => (p.topics || []).includes(topic)),
    if (tag && typeof tag === 'string') posts = posts.filter((p) => (p.tags || []).includes(tag)),
    if (author && typeof author === 'string') posts = posts.filter((p) => p.author === author),
    posts = posts.sort((a, b) => (new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())),
    const o = parseInt(String(offset || 0), 10) || 0,
    const l = parseInt(String(limit || 20), 10) || 20,
    return res.status(200).json({ items: posts.slice(o, o + l), total: posts.length })
  }

  if (req.method === 'POST') {
    if (!requireAdmin(req, res)) return,
    const body = req.body as Partial<BlogPost>
    if (!body.title || !body.slug || !body.author || !body.publishDate) {
      return res.status(400).json({ error: 'Missing required fields' })
    }
    const posts = readPosts()
    if (posts.some((p) => p.slug === body.slug)) {
      return res.status(409).json({ error: 'Slug already exists' })
    }
    const _posts = readPosts();
    if (_posts.some((p) => p.slug === body.slug)) {_return res.status(409).json({ error: 'Slug already exists'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
    const post: BlogPost = {_id: uuidv4(), _title: body.title!, _slug: body.slug!, _coverImageUrl: body.coverImageUrl || '', _author: body.author!, _publishDate: body.publishDate!, _tags: body.tags || [], _topics: body.topics || [], _seo: {
        metaTitle: body.seo?.metaTitle || body.title!, _metaDescription: body.seo?.metaDescription || '', _ogImageUrl: body.seo?.ogImageUrl || body.coverImageUrl || ''},
      body: body.body || '',
      status: body.status || 'draft',
      metrics: { views: 0, likes: 0, shares: 0 }},
    posts.unshift(post),
    writePosts(posts),
    return res.status(201).json(post)
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
  }

  return res.status(405).end()
}