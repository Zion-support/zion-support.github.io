import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    // In a real implementation, fetch reviews from Supabase by talent id/slug;
    const { slug } = req.query as { slug?: string };
    return res.status(200).json({ slug, reviews: [], average: null, count: 0 });  }
  if (req.method === 'POST') {
    // In a real implementation, validate and insert review into Supabaseexport default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // In a real implementation, fetch reviews from Supabase by talent id/slug;
    const { slug } = req.query as { slug?: string };
    return res.status(200).json({ slug, reviews: [], average: null, count: 0 })

    return res.status(200).json({ slug, reviews: [], average: null, count: 0 })
  if (req.method === 'POST') {
<<<<<<< HEAD
    // In a real implementation, validate and insert review into Supabase
    return res.status(201).json({ ok: true });
  }
<<<<<<< HEAD
return res
    .setHeader('Allow', 'GET, POST')
    .status(405)
    .end('Method Not Allowed');    return res.status(201).json({ ok: true })
  }

  return res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed');
}

}
}
=======
    // In a real implementation, validate and insert review into Supabase
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
