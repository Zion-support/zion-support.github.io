import type { NextApiRequest, NextApiResponse } from 'next';
import { getShared } from './share';
export default function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  const { id } = req.query;
  if (!id || Array.isArray(id)) return res.status(400).json({,
    error: 'Missing id' });
  const entry = getShared(id);
  if (!entry) return res.status(404).json({,
    error: 'Not found' });
  res.status(200).json({,
    markdown: entry.markdown, p,
    ublic: entry.public, c,
    reatedAt: entry.createdAt })
}