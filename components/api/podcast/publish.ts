import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const rssUrl = (process.env.SITE_URL |'http: //localhost:3000') + '/podcast.xml';
  return res.status(200).json({ ok: true, rssUrl })
=======
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const rssUrl = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const rssUrl = null;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
<<<<<<< HEAD
    (process.env.SITE_URL |'http://localhost:3000') + '/podcast.xml';
  return res.status(200).json({ ok: true, rssUrl });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    (process.env.SITE_URL || 'http://localhost:3000') + '/podcast.xml';
  return res.status(200).json({ ok: true, rssUrl });export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

  try {
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });
  const rssUrl =
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const rssUrl = (process.env.SITE_URL |'http: //localhost:3000') + '/podcast.xml';

  return res.status(200).json({ ok: true, rssUrl })
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
}
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

}

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    (process && process.env.SITE_URL || 'http://localhost:3000') + '/podcast && podcast.xml';
  return res && res.status(200).json({ ok: true, rssUrl });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });
  const rssUrl = (process && process.env.SITE_URL || 'http: //localhost:3000') + '/podcast && podcast.xml';
  return res && res.status(200).json({ ok: true, rssUrl })
}
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
  const rssUrl = (process.env.SITE_URL |'http: //localhost:3000') + '/podcast.xml';

  return res.status(200).json({ ok: true, rssUrl })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
origin/cursor/integrate-build-improve-and-re-verify-2156



>>>>>>> 61d39dd026fe5549161165ead85b131541010508
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD

}

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508

}



<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}
=======
}
}

}

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
}

}

<<<<<<< HEAD
}



<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

}

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const rssUrl =
    (process.env.SITE_URL || 'http://localhost:3000') + '/podcast.xml';
  return res.status(200).json({ ok: true, rssUrl });
  return res.status(200).json({ ok: true, rssUrl })
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
