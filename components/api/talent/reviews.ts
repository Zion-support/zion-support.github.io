import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    // In a real implementation, fetch reviews from Supabase by talent id/slug
    const { slug } = req.query as { slug?: string };
<<<<<<< HEAD
    return res.status(200).json({ slug, reviews: [], average: null, count: 0 });  }

  if (req.method === 'POST') {
    // In a real implementation, validate and insert review into Supabase
=======
    return res.status(200).json({ slug, reviews: [], average: null, count: 0 });
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // In a real implementation, fetch reviews from Supabase by talent id/slug
    const { slug } = req.query as { slug?: string };
    return res.status(200).json({ slug, reviews: [], average: null, count: 0 })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // In a real implementation, fetch reviews from Supabase by talent id/slug
    const { slug } = req.query as { slug?: string };
    return res.status(200).json({ slug, reviews: [], average: null, count: 0 })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  if (req.method === 'POST') {
    // In a real implementation, validate and insert review into Supabase
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    return res.status(201).json({ ok: true });
  }

  return res
    .setHeader('Allow', 'GET, POST')
    .status(405)
<<<<<<< HEAD
    .end('Method Not Allowed');
=======
    .end('Method Not Allowed');
=======
    return res.status(201).json({ ok: true })
  }

  return res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed');
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(201).json({ ok: true })
  }

  return res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed');
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
