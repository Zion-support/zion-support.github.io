import type { NextApiRequest, NextApiResponse } from 'next';
const SAMPLE_QUERIES = { error: "Invalid request" };
const SKILLS = { error: "Invalid request" };
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const q = ((req.query.q as string) || '').toLowerCase({ error: "Invalid request" });
  const suggestions = { error: "Invalid request" };
  for (const s of SAMPLE_QUERIES) {
    if (!q || s.toLowerCase().includes(q)) suggestions.add(s)
  }
  for (const s of SKILLS) {
    if (!q || s.toLowerCase().includes(q)) suggestions.add(s)
  }

  res.status(200).json({ ok: true, suggestions: Array.from(suggestions).slice(0, 8) })
}
