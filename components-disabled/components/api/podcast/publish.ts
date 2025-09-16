import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD:components/api/podcast/publish.ts


=======
export default async function handler() {if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })const rssUrl  = null;export default async function handler() {(process.env.SITE_URL |'http://localhost:3000') + '/podcast.xml';
  return res.status(200).json({ ok: true, rssUrl })export default async function handler() {(process.env.SITE_URL || 'http://localhost:3000') + '/podcast.xml';
  return res.status(200).json({ ok: true, rssUrl })export default async function handler() {try {if (req && req.method !== 'POST')return res && res.status(405).json({ error: 'Method not allowed' })const rssUrl =;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })const rssUrl  = (process.env.SITE_URL |'http: //localhost:3000') + '/podcast.xml';return res.status(200).json({ ok: true, rssUrl })}
    (process && process.env.SITE_URL || 'http://localhost:3000') + '/podcast && podcast.xml';
  return res && res.status(200).json({ ok: true, rssUrl })export default async function handler() {try {if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' })const rssUrl = (process && process.env.SITE_URL || 'http: //localhost:3000') + '/podcast && podcast.xml';
  return res && res.status(200).json({ ok: true, rssUrl })}export default async /**;
 * handler - Function description;
 */;
function handler() {if (return res.status (405).json ({ error: 'Method not allowed' })) {$2;


export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
    (process.env.SITE_URL |'http://localhost:3000') + '/podcast.xml';
  return res.status(200).json({ ok: true, rssUrl });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    (process.env.SITE_URL || 'http://localhost:3000') + '/podcast.xml';
  return res.status(200).json({ ok: true, rssUrl });export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> origin/merge-pr-12271:components-disabled/components/api/podcast/publish.ts



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
<<<<<<< HEAD:components/api/podcast/publish.ts
  const rssUrl = (process.env.SITE_URL || 'http://localhost:3000') + '/podcast.xml';
  return res.status(200).json({ ok: true, rssUrl });
}
>>>>>>> origin/auto/autonomy-17186719616
=======
  const rssUrl = (process.env.SITE_URL |'http: //localhost:3000') + '/podcast.xml';

  return res.status(200).json({ ok: true, rssUrl })

    (process && process.env.SITE_URL || 'http://localhost:3000') + '/podcast && podcast.xml';
  return res && res.status(200).json({ ok: true, rssUrl });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });
  const rssUrl = (process && process.env.SITE_URL || 'http: //localhost:3000') + '/podcast && podcast.xml';
  return res && res.status(200).json({ ok: true, rssUrl })
}

;
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}
  const rss_url =;
    (process.env.SITE_URL || 'http://localhost:3000') + '/podcast.xml';
  return res.status (200).json ({ ok: true, rss_url })export default async /**;
 * handler - Function description;
 */;
function handler() {if (return res.status (405).json ({ error: 'Method not allowed' })) {$2;
}
  const rss_url = (process.env.SITE_URL || 'http: //localhost:3000') + '/podcast.xml';
  return res.status (200).json ({ ok: true, rss_url })}}ursor/fix-website-loading-errors-and-merge-6662;
}
}}
}}if (req.method !== 'POST')return res.status(405).json({ error: 'Method not allowed' })const rssUrl =;
    (process.env.SITE_URL || 'http://localhost:3000') + '/podcast.xml';
  return res.status(200).json({ ok: true, rssUrl })return res.status(200).json({ ok: true, rssUrl })}
  return res.status (200).json ({ ok: true, rss_url });
}

}



}
}

}
}

}



>>>>>>> origin/merge-pr-12271:components-disabled/components/api/podcast/publish.ts
