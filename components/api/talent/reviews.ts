<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // In a real implementation, fetch reviews from Supabase by talent id/slug
    const { slug } = req.query as { slug?: string },
    return res.status(200).json({ slug, reviews: [], average: null, count: 0 })
  }

  if (req.method === 'POST') {
    // In a real implementation, validate and insert review into Supabase
    return res.status(201).json({ ok: true })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method === 'GET') {
    // In a real implementation, _fetch reviews from Supabase by talent id/slug
    const { slug} = req.query as {_slug?: string};
    return res.status(200).json({_slug, _reviews: [], _average: null, _count: 0});
  }

  if (req.method === 'POST') {_// In a real implementation, _validate and insert review into Supabase
    return res.status(201).json({ ok: true});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }

  return res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed')
}