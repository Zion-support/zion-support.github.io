
import type { NextApiRequest, NextApiResponse } from 'next';
import type { AccessLevel } from '../../utils/search/filter';
import { parseQueryToFilters } from '[^']*';
import { searchAll, suggestDidYouMean } from '[^']*';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const q = null;
      results})

  } catch (e: any) {
    res.status(500).json({ ok: false, error: e?.message || "Search failed" });
  }
}
