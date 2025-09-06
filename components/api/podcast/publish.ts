import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
    (process.env.SITE_URL |'http://localhost:3000') + '/podcast.xml';
  return res.status(200).json({ ok: true, rssUrl });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    (process.env.SITE_URL || 'http://localhost:3000') + '/podcast.xml';
  return res.status(200).json({ ok: true, rssUrl });export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

  try {
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });
  const rssUrl =
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const rssUrl = (process.env.SITE_URL |'http: //localhost:3000') + '/podcast.xml';

  return res.status(200).json({ ok: true, rssUrl })

<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    (process && process.env.SITE_URL || 'http://localhost:3000') + '/podcast && podcast.xml';
  return res && res.status(200).json({ ok: true, rssUrl });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });
  const rssUrl = (process && process.env.SITE_URL || 'http: //localhost:3000') + '/podcast && podcast.xml';
  return res && res.status(200).json({ ok: true, rssUrl })
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  return res.status (200).json ({ ok: true, rss_url });export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}
  const rss_url = (process.env.SITE_URL || 'http: //localhost:3000') + '/podcast.xml';
  return res.status (200).json ({ ok: true, rss_url });
<<<<<<< HEAD
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

}



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
}

}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}

}



>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
