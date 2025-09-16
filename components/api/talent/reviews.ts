import type { NextApiRequest, NextApiResponse } from 'next';



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> origin/feature/merge-conflicts-and-improvements


=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // In a real implementation, fetch reviews from Supabase by talent id/slug
    const { slug } = req.query as { slug?: string };
    return res.status(200).json({ slug, reviews: [], average: null, count: 0 });
  }

  if (req.method === 'POST') {
    // In a real implementation, validate and insert review into Supabase
    return res.status(201).json({ ok: true });
  }

  return res.setHeader('Allow', 'GET, POST').status(405).end('Method Not Allowed');
}
>>>>>>> origin/auto/autonomy-17186719616
