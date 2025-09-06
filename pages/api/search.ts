<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

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
<<<<<<< HEAD
=======
    res.status(500).json({ ok: false, error: e?.message |"Search failed" });
=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import type { AccessLevel } from '../../utils/search/filter';
import { parseQueryToFilters } from '../../utils/search/parser';
import { searchAll, suggestDidYouMean } from '../../utils/search/filter';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


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
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { NextApiRequest, NextApiResponse } from 'next';
import type { AccessLevel } from '../../utils/search/filter';
import { parseQueryToFilters } from '../../utils/search/parser';
import { searchAll, suggestDidYouMean } from '../../utils/search/filter';
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======
export default async function handler(req, res) {
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  try {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    const q = (req.query.q as string) || '';
    const access = ((req.headers['x-access-level'] as string) || 'public') as AccessLevel;
    const parsed = await parseQueryToFilters(q);
    const results = searchAll(parsed, access);
<<<<<<< HEAD


  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    const keywords = Array.from(new Set([...(parsed.skills || []), ...(parsed.keywords || [])]));
    const didYouMean = results.all.length === 0 ? suggestDidYouMean(q) : null;
    res.status(200).json({
      ok: true,
      query: q,
      parsed,
    keywords,
      didYouMean,
      counts: {
        all: results.all.length,
        talent: results.talent.length,
        jobs: results.jobs.length,
        projects: results.projects.length},
      results})
  } catch (e: any) {
    res.status(500).json({ ok: false, error: e?.message || 'Search failed' })
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
    const keywords = Array.from(new Set([...(parsed.skills || []), ...(parsed.keywords || [])])),;
    const didYouMean = results.all.length === 0 ? suggestDidYouMean(q) : null;
    res.status(200).json({;
      ok: true;
      query: q;
      parsed;
      keywords,;
      didYouMean,;
      counts: {;
        all: results.all.length,;
        talent: results.talent.length,;
        jobs: results.jobs.length;
        projects: results.projects.length};
      results});
  } catch (error) {
    res.status(500).json({ ok: false, error: e?.message || 'Search failed' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
