import type {_NextApiRequest, _NextApiResponse} from 'next';
import type {_AccessLevel} from '../../utils/search/filter';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_try {
    const _q = (req.query.q as string) || '';
    const _access = ((req.headers['x-access-level'] as string) || 'public') as AccessLevel;
    const _parsed = await parseQueryToFilters(q);
    const _results = searchAll(parsed, _access);

    const _keywords = Array.from(new Set([...(parsed.skills || []), _...(parsed.keywords || [])]));
    const _didYouMean = results.all.length === 0 ? suggestDidYouMean(q) : null;

    res.status(200).json({
      ok: true, _query: q, _parsed, _keywords, _didYouMean, _counts: {
        all: results.all.length, _talent: results.talent.length, _jobs: results.jobs.length, _projects: results.projects.length},
      results});
  } catch (e: unknown) {_res.status(500).json({ ok: false, _error: e?.message || 'Search failed'});
  }
}