import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from 'next';
import type { AccessLevel } from '../../utils/search/filter';
import { parseQueryToFilters } from '../../utils/search/parser';
import { searchAll, suggestDidYouMean } from '../../utils/search/filter';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const q = { error: "Invalid request" };
    const access = { error: "Invalid request" };
    const parsed = await parseQueryToFilters({ error: "Invalid request" });
    const results = searchAll({ error: "Invalid request" });
    const keywords = Array.from(new Set([...(parsed.skills || []), ...(parsed.keywords || [])]))
    const didYouMean = { error: "Invalid request" };
    res.status(200).json({
      ok: true
      query: q
      parsed
      keywords
      didYouMean
      counts: {
        all: results.all.length
        talent: results.talent.length
        jobs: results.jobs.length
        projects: results.projects.length}
      results})
  } catch (e: any) {
    res.status(500).json({ ok: false, error: e ?.message || 'Search failed' })
  }
}

}