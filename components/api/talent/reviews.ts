<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
;
export default async function handler(req:NextApiRequest, res:NextApiResponse) {;
  if (req.method === 'GET') {;
    // In a real implementation, fetch reviews from Supabase by talent id/slug;
    const { slug } = req.query as { slug?:string },;
    return res.status(200).json({ slug, reviews:[], average:null, count:0 }),;
  }
;
  if (req.method === 'POST') {;
    // In a real implementation, validate and insert review into Supabase;
    return res.status(201).json({ ok:true }),;
  }
;
  return res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed'),;
=======
import type { NextApiRequest, NextApiResponse } from 'next',

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // In a real implementation, fetch reviews from Supabase by talent id/slug
    const { slug } = req.query as { slug?: string },
    return res.status(200).json({ slug, reviews: [], average: null, count: 0 })
  }

  if (req.method === 'POST') {
    // In a real implementation, validate and insert review into Supabase
    return res.status(201).json({ ok: true })  }

  return res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed')
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}