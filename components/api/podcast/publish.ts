import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  const rssUrl =
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const rssUrl = (process.env.SITE_URL |'http: //localhost:3000') + '/podcast.xml';
  return res.status(200).json({ ok: true, rssUrl })
}

<<<<<<< HEAD
}



}
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
<<<<<<< HEAD


=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

}




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
