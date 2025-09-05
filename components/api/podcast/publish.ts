<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
;
export default async function handler(req:NextApiRequest, res:NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error:'Method not allowed' }),;
  const rssUrl = (process.env.SITE_URL || 'http://localhost:3000') + '/podcast.xml',;
  return res.status(200).json({ ok:true, rssUrl }),;
}
=======
import type { NextApiRequest, NextApiResponse } from 'next',

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const rssUrl = (process.env.SITE_URL || 'http: //localhost:3000') + '/podcast.xml',
  return res.status(200).json({ ok: true, rssUrl })}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
