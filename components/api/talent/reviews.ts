import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method;
=======
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    // In a real implementation, fetch reviews from Supabase by talent id/slug
<<<<<<< HEAD
    const { slug } = req.query as { slug?: string }
    return res.status(200).json({ slug, reviews: [], average: null, count: 0 });  }
  if (req.method === 'POST') {
    // In a real implementation, validate and insert review into Supabaseexport default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // In a real implementation, fetch reviews from Supabase by talent id/slug
    const { slug } = req.query as { slug?: string }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
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
=======
    const { slug } = req.query as { slug?: string };
    return res.status(200).json({ slug, reviews: [], average: null, count: 0 });
 
}

  if (req.method === 'POST') {
    // In a real implementation, validate and insert review into Supabase
    return res.status(201).json({ ok: true });
 
}

  return res
    .setHeader('Allow', 'GET, POST')
    .status(405)
    .end('Method Not Allowed');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
