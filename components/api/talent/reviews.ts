import type { NextApiRequest, NextApiResponse } from 'next';

    return res.status(200).json({ slug, reviews: [], average: null, count: 0 });  }
  if (req.method === 'POST') {
    // In a real implementation, validate and insert review into Supabaseexport default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {

    return res.status(200).json({ slug, reviews: [], average: null, count: 0 })
  if (req.method === 'POST') {

    // In a real implementation, validate and insert review into Supabase
    return res && res.status(201).json({ ok: true });
  }
  }


  return res && res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed');
}

=======
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    // In a real implementation, fetch reviews from Supabase by talent id/slug
    const { slug } = req.query as { slug?: string }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
  if (req.method === 'GET') {
    // In a real implementation, fetch reviews from Supabase by talent id/slug
    const { slug } = req.query as { slug?: string }
    // In a real implementation, fetch reviews from Supabase by talent id/slug;
    const { slug } = req.query as { slug?: string };
    return res.status(200).json({ slug, reviews: [], average: null, count: 0 });  }
  if (req.method === 'POST') {
    // In a real implementation, validate and insert review into Supabaseexport default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // In a real implementation, fetch reviews from Supabase by talent id/slug
    const { slug } = req.query as { slug?: string }
    // In a real implementation, fetch reviews from Supabase by talent id/slug;
    const { slug } = req.query as { slug?: string };
    return res.status(200).json({ slug, reviews: [], average: null, count: 0 })

    return res.status(200).json({ slug, reviews: [], average: null, count: 0 })
  if (req.method === 'POST') {
    // In a real implementation, validate and insert review into Supabase
    return res.status(201).json({ ok: true });
  }
return res
    .setHeader('Allow', 'GET, POST')
    .status(405)
    .end('Method Not Allowed');    return res.status(201).json({ ok: true })
  }
  return res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed');
}

  if (req.method === 'POST') {
    // In a real implementation, validate and insert review into Supabase

}
}
    // In a real implementation, validate and insert review into Supabase
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
