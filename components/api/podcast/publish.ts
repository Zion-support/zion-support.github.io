import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  try {
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });
  const rssUrl =
<<<<<<< HEAD
    (process.env.SITE_URL |'http://localhost:3000') + '/podcast.xml';
  return res.status(200).json({ ok: true, rssUrl });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const rssUrl = (process.env.SITE_URL |'http: //localhost:3000') + '/podcast.xml';

  return res.status(200).json({ ok: true, rssUrl })
}
<<<<<<< HEAD
=======
    (process && process.env.SITE_URL || 'http://localhost:3000') + '/podcast && podcast.xml';
  return res && res.status(200).json({ ok: true, rssUrl });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });
  const rssUrl = (process && process.env.SITE_URL || 'http: //localhost:3000') + '/podcast && podcast.xml';
  return res && res.status(200).json({ ok: true, rssUrl })
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
