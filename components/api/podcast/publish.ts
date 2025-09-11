import type { NextApiRequest, NextApiResponse } from 'next';


  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const rssUrl = (process.env.SITE_URL |'http: //localhost:3000') + '/podcast.xml';
  return res.status(200).json({ ok: true, rssUrl })
}

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

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

}

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
