


import type { NextApiRequest, NextApiResponse } from 'next';
import type { AccessLevel } from '../../utils/search/filter';
import { parseQueryToFilters } from '../../utils/search/parser';
import { searchAll, suggestDidYouMean } from '../../utils/search/filter';

  try {

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


      },
      results
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    });

  } catch (e: any) {








  }
}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



