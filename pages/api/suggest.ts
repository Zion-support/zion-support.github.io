<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
const SAMPLE_QUERIES = $2;
const SKILLS = $2;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const q = ((req.query.q as string) || '').toLowerCase($2);
  const suggestions = $2;
  for (const s of SAMPLE_QUERIES) {
    if (!q || s.toLowerCase().includes(q)) suggestions.add(s)
  }
  for (const s of SKILLS) {
    if (!q || s.toLowerCase().includes(q)) suggestions.add(s)
  }

  res.status(200).json({ ok: true, suggestions: Array.from(suggestions).slice(0, 8) })
}
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
