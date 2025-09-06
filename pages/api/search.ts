

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
    const parsed = await parseQueryToFilters(q);
    const results = searchAll(parsed, access);


  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
