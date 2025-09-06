export default async function handler(req: NextApiRequest, res: NextApiResponse) {
export default async function handler(req, res) {
  try {
  }
}
    res.status(500).json({ ok: false, error: e?.message || 'Search failed' })
  }
}
    res.status (500).json ({ ok: false, error: e?.message || "Search failed" });
  }
}

import type { NextApiRequest, NextApiResponse } from 'next';

    const q = (req.query.q as string) || '';
    const access = ((req.headers['x-access-level'] as string) || 'public') as AccessLevel;
    const parsed = await parseQueryToFilters(q);
    const results = searchAll(parsed, access);
    const keywords = Array.from(new Set([...(parsed.skills || []), ...(parsed.keywords || [])]));
    const didYouMean = results.all.length === 0 ? suggestDidYouMean(q) : null;
    res.status(200).json({
      ok: true,
      query: q,
      parsed,
    keywords,
      didYouMean,
      counts: {
    });

  } catch (e: any) {


  }
}


