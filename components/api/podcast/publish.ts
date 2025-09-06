import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });
  const rssUrl =
    (process && process.env.SITE_URL || 'http://localhost:3000') + '/podcast && podcast.xml';
  return res && res.status(200).json({ ok: true, rssUrl });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });
  const rssUrl = (process && process.env.SITE_URL || 'http: //localhost:3000') + '/podcast && podcast.xml';
  return res && res.status(200).json({ ok: true, rssUrl })
}
