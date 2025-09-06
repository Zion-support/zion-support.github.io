

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
=======
    res.status(500).json({ ok: false, error: e?.message || 'Search failed' })
  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    res.status (500).json ({ ok: false, error: e?.message || "Search failed" });
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

=======
import type { NextApiRequest, NextApiResponse } from 'next';

    const q = (req.query.q as string) || '';
    const access = ((req.headers['x-access-level'] as string) || 'public') as AccessLevel;
=======
import type { NextApiRequest, NextApiResponse } from "next";
import type { AccessLevel } from "../../utils/search/filter";
import { parseQueryToFilters } from "../../utils/search/parser";
import { searchAll, suggestDidYouMean } from "../../utils/search/filter";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const q = (req.query.q as string) || "";
    const access = ((req.headers["x-access-level"] as string) ||
      "public") as AccessLevel;
>>>>>>> main
    const parsed = await parseQueryToFilters(q);
    const results = searchAll(parsed, access);


  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
