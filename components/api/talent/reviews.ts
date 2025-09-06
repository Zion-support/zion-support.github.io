import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method === 'GET') {

    return res.status(200).json({ slug, reviews: [], average: null, count: 0 });  }
  if (req.method === 'POST') {
    // In a real implementation, validate and insert review into Supabaseexport default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {

    return res.status(200).json({ slug, reviews: [], average: null, count: 0 })
  if (req.method === 'POST') {

    // In a real implementation, validate and insert review into Supabase
    return res.status(201).json({ ok: true });
  }

}
}

    // In a real implementation, validate and insert review into Supabase

