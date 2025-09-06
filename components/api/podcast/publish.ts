import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const rssUrl = null;
=======
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
<<<<<<< HEAD
  const rssUrl =
    (process.env.SITE_URL |'http://localhost:3000') + '/podcast.xml';
  return res.status(200).json({ ok: true, rssUrl });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const rssUrl = (process.env.SITE_URL |'http: //localhost:3000') + '/podcast.xml';
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return res.status(200).json({ ok: true, rssUrl })
}
=======
  
}

const rssUrl =
    (process.env.SITE_URL || 'http://localhost:3000') + '/podcast.xml';
  return res.status(200).json({ ok: true, rssUrl });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
