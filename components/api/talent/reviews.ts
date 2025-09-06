import type { NextApiRequest, NextApiResponse } from 'next';
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // In a real implementation, fetch reviews from Supabase by talent id/slug
    const { slug } = req.query as { slug?: string },
    return res.status(200).json({ slug, reviews: [], average: null, count: 0 })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  if (req.method === 'POST') {
    // In a real implementation, validate and insert review into Supabase

=======
    return res.status(201).json({ ok: true })
  }

  return res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed'),
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
