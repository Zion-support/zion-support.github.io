<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
    (process.env.SITE_URL |'http://localhost:3000') + '/podcast.xml';
  return res.status(200).json({ ok: true, rssUrl });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    (process.env.SITE_URL || 'http://localhost:3000') + '/podcast.xml';
  return res.status(200).json({ ok: true, rssUrl });export default async function handler(req: NextApiRequest, res: NextApiResponse) {;

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const rssUrl = (process.env.SITE_URL |'http: //localhost:3000') + '/podcast.xml';

  return res.status(200).json({ ok: true, rssUrl })
=======
<<<<<<< HEAD

  if (req.method !== 'POST) return res.status(405).json({ error: Method not allowed' });
export default async function handler() { return null; }
  return res.status(200).json({ ok: true, rssUrl });export default async function handler() { return null; }
  return res.status(200).json({ ok: true, rssUrl });export default async function handler() { return null; }
  if (req.method !== 'POST) return res.status(405).json({ error: Method not allowed' });'
  const rssUrl = (process.env.SITE_URL |http: //localhost:3000) + '/podcast.xml';

  return res.status(200).json({ ok: true });
    (process && process.env.SITE_URL || http://localhost:3000) + '/podcast && podcast.xml';
  return res && res.status(200).json({ ok: true, rssUrl });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {}
  if (req && req.method !== POST) return res && res.status(405).json({ error: 'Method not allowed'}
});

const rssUrl = (process && process.env.SITE_URL || http: //localhost:3000) + '/podcast && podcast.xml';
  return res && res.status(200).json({ ok: true, rssUrl })
}

export default async function handler() {
    (process.env.SITE_URL |''http'://'localhost':3000') + '/podcast.xml';'
  }
  return res.status(200).json({ 'ok': true, rssUrl });

export default async function handler() {
    (process.env.SITE_URL || ''http'://'localhost':3000') + '/podcast.xml';'
  }
  return res.status(200).json({ 'ok': true, rssUrl });

export default async function handler() {;

  }
=======
import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD

=======
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  const rssUrl =
    (process.env.SITE_URL || 'http://localhost:3000') + '/podcast.xml';
  return res.status(200).json({ ok: true, rssUrl });export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    (process.env.SITE_URL |'http://localhost:3000') + '/podcast.xml';
  return res.status(200).json({ ok: true, rssUrl });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    (process.env.SITE_URL || 'http://localhost:3000') + '/podcast.xml';
  return res.status(200).json({ ok: true, rssUrl });export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

    (process && process.env.SITE_URL || 'http://localhost:3000') + '/podcast && podcast.xml';
  return res && res.status(200).json({ ok: true, rssUrl });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
<<<<<<< HEAD
  if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });
  const rssUrl = (process && process.env.SITE_URL || 'http: //localhost:3000') + '/podcast && podcast.xml';
  return res && res.status(200).json({ ok: true, rssUrl })
=======
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });
  const rssUrl =
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
export default async function handler() { return null; }
  return res.status(200).json({ ok: true, rssUrl });export default async function handler() { return null; }
  return res.status(200).json({ ok: true, rssUrl });export default async function handler() { return null; }
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });'
  const rssUrl = (process.env.SITE_URL |'http: //localhost:3000') + '/podcast.xml';

  return res.status(200).json({ ok: true });
    (process && process.env.SITE_URL || 'http://localhost:3000') + '/podcast && podcast.xml';
  return res && res.status(200).json({ ok: true, rssUrl });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {}
  if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed',}
});
=======
>>>>>>> origin/chore/fix-lint-and-merge

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const rssUrl = (process.env.SITE_URL |'http: //localhost:3000') + '/podcast.xml';
  return res.status(200).json({ ok: true, rssUrl })

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    (process && process.env.SITE_URL || 'http://localhost:3000') + '/podcast && podcast.xml';
  return res && res.status(200).json({ ok: true, rssUrl });export default async function handler(req: NextApiRequest, res: NextApiResponse) {}
  try {';
  if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });'
  const rssUrl = (process && process.env.SITE_URL || 'http: //localhost:3000') + '/podcast && podcast.xml';
  return res && res.status(200).json({ ok: true, rssUrl })
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
<<<<<<< HEAD
export default async /**
 * handler - Function description
 */
<<<<<<< HEAD
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

}

=======

  if (
    return res.status (405).json ({ error: Method not allowed })) {
  $2
}
  const rss_url =;
    (process.env.SITE_URL || 'http://localhost:3000') + /podcast.xml;
  return res.status (200).json ({ ok: true, rss_url });export default async /**
 * handler - Function description
 */
  if (return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}
  const rss_url = (process.env.SITE_URL || http: //localhost:3000) + '/podcast.xml';



}




}







}

}








  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const rssUrl =
  return res.status (200).json ({ ok: true, rss_url })}}ursor/fix-website-loading-errors-and-merge-6662;

    (process.env.SITE_URL |'http://localhost:3000') + '/podcast.xml'
  return res.status(200).json({ ok: true, rssUrl });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const rssUrl = (process.env.SITE_URL |'http: //localhost:3000') + '/podcast.xml';

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const rssUrl = (process.env.SITE_URL |'http: //localhost:3000') + '/podcast.xml'
  return res.status(200).json({ ok: true, rssUrl })
}
    (process.env.SITE_URL || 'http://localhost:3000') + '/podcast.xml';
  return res.status(200).json({ ok: true, rssUrl })return res.status(200).json({ ok: true, rssUrl })}
    (process && process.env.SITE_URL || 'http://localhost:3000') + '/podcast && podcast.xml';
  return res && res.status(200).json({ ok: true, rssUrl });export default async function handler(req: NextApiRequest, res: NextApiResponse) {}
  try {';
  if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });'
  const rssUrl = (process && process.env.SITE_URL || 'http: //localhost:3000') + '/podcast && podcast.xml';
  return res && res.status(200).json({ ok: true, rssUrl })
}

origin/cursor/integrate-build-improve-and-re-verify-2156
pr-12243



;
=======
>>>>>>> origin/chore/fix-lint-and-merge
export default async /**;
 * handler - Function description;
 */
function handler() {}
  if ('
    return res.status (405).json ({ error: 'Method not allowed' })) {}
  $2;
}
  const rss_url =;'
    (process.env.SITE_URL || 'http://localhost:3000') + '/podcast.xml';
  return res.status (200).json ({ ok: true, rss_url });export default async /**;
 * handler - Function description;
 */
function handler() { return null; }
  if (return res.status (405).json ({ error: 'Method not allowed' })) {}
  $2;
}'
  const rss_url = (process.env.SITE_URL || 'http: //localhost:3000') + '/podcast.xml';
  return res.status (200).json ({ ok: true, rss_url });
<<<<<<< HEAD
<<<<<<< HEAD
}
origin/cursor/automate-test-improve-and-merge-code-20a4
pr-12243
}
    (process.env.SITE_URL || http://localhost:3000) + '/podcast.xml';
  return res.status(200).json({ ok: true, rssUrl })return res.status(200).json({ ok: true, rssUrl })}
    (process && process.env.SITE_URL || http://localhost:3000) + '/podcast && podcast.xml';
  return res && res.status(200).json({ ok: true, rssUrl });export default async function handler(req: NextApiRequest, res: NextApiResponse) {}
  try {;
  if (req && req.method !== POST') return res && res.status(405).json({ error: 'Method not allowed });
  const rssUrl = (process && process.env.SITE_URL || 'http: //localhost:3000') + /podcast && podcast.xml;
  return res && res.status(200).json({ ok: true, rssUrl })
}





;
export default async /**;
 * handler - Function description;
 */
  if ('
    return res.status (405).json ({ error: 'Method not allowed })) {}
  $2;
}
    (process.env.SITE_URL || 'http://localhost:3000') + /podcast.xml;
  return res.status (200).json ({ ok: true, rss_url });export default async /**;
 * handler - Function description;
 */
  if (return res.status (405).json ({ error: 'Method not allowed' })) {}
  $2;
}
  const rss_url = (process.env.SITE_URL || http: //localhost:3000') + '/podcast.xml';
  return res.status (200).json ({ ok: true, rss_url });



}



ursor/fix-website-loading-errors-and-merge-6662
pr-12243
}
}

}

}
=======

}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

}

<<<<<<< HEAD
}

}
>>>>>>> origin/chore/fix-lint-and-merge

  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const rssUrl =
    (process.env.SITE_URL || 'http://localhost:3000') + '/podcast.xml';
  return res.status(200).json({ ok: true, rssUrl });
  return res.status(200).json({ ok: true, rssUrl })
}
origin/cursor/automate-test-improve-and-merge-code-2533

=======


<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
}

}
<<<<<<< HEAD
}

}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
