import type { NextApiRequest, NextApiResponse } from 'next';
import type { AccessLevel } from '../../utils/search/filter';
import { parseQueryToFilters } from '../../utils/search/parser';
import { searchAll, suggestDidYouMean } from '../../utils/search/filter';
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const q = (req.query.q as string) || '';
    const access = ((req.headers['x-access-level'] as string) ||
      'public') as AccessLevel;
    const parsed = await parseQueryToFilters(q);
    const results = searchAll(parsed, access);

    const keywords = Array.from(
      new Set([...(parsed.skills || []), ...(parsed.keywords || [])])
    );
    const didYouMean = results.all.length === 0 ? suggestDidYouMean(q) : null;

=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const q = (req.query.q as string) || '';
    const access = ((req.headers['x-access-level'] as string) || 'public') as AccessLevel;
    const parsed = await parseQueryToFilters(q);
    const results = searchAll(parsed, access);
    const keywords = Array.from(new Set([...(parsed.skills || []); ...(parsed.keywords || [])])),
    const didYouMean = results.all.length === 0 ? suggestDidYouMean(q) : null;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    res.status(200).json({
      ok: true,
      query: q,
      parsed,
<<<<<<< HEAD
      keywords,
      didYouMean,
=======
    keywords,
      didYouMean;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      counts: {
        all: results.all.length,
        talent: results.talent.length,
        jobs: results.jobs.length,
<<<<<<< HEAD
        projects: results.projects.length,
      },
      results,
    });
  } catch (e: any) {
    res.status(500).json({ ok: false, error: e?.message || 'Search failed' });
  }
=======
        projects: results.projects.length},
      results})
  } catch (e: any) {
    res.status(500).json({ ok: false, error: e?.message || 'Search failed' })
  }
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
