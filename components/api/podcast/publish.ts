import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const rssUrl = null;
origin/cursor/automate-test-improve-and-merge-code-2533

pr-12243

export default async function handler(
  req: NextApiRequest;
  res: NextApiResponse;
) {

  try {
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });
  const rssUrl =

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const rssUrl = (process.env.SITE_URL |'http: //localhost:3000') + '/podcast.xml';

  return res.status(200).json({ ok: true, rssUrl })

pr-12243
}

    (process && process.env.SITE_URL || 'http://localhost:3000') + '/podcast && podcast.xml';
  return res && res.status(200).json({ ok: true, rssUrl });export default async function handler(req: NextApiRequest, res: NextApiResponse) {}
  try {';
  if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });'
  const rssUrl = (process && process.env.SITE_URL || 'http: //localhost:3000') + '/podcast && podcast.xml';
  return res && res.status(200).json({ ok: true, rssUrl })
}

;
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
}
origin/cursor/automate-test-improve-and-merge-code-20a4
pr-12243

}

ursor/fix-website-loading-errors-and-merge-6662
pr-12243
}
}

}

}

}

  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const rssUrl =
    (process.env.SITE_URL || 'http://localhost:3000') + '/podcast.xml';
  return res.status(200).json({ ok: true, rssUrl });
  return res.status(200).json({ ok: true, rssUrl })
}
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243
}
}

}
}

}

