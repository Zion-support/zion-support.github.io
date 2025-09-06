
import type { NextApiRequest, NextApiResponse } from 'next';

const SAMPLE_QUERIES = null;
  for (const s of SAMPLE_QUERIES) {
    if (!q || s.toLowerCase().includes(q)) suggestions.add(s)
  }
  for (const s of SKILLS) {
    if (!q || s.toLowerCase().includes(q)) suggestions.add(s)

  }

const { q = "" } = req.query;
  const query = String(q).toLowerCase();

  if (!query) {
    return res.status(200).json({ suggestions: SAMPLE_QUERIES.slice(0, 5) });
  }

  const suggestions = SAMPLE_QUERIES.filter((s) =>
    s.toLowerCase().includes(query),
  ).slice(0, 5);

  return res.status(200).json({ suggestions });
}
