import type { NextApiRequest, NextApiResponse } from 'next';
import { getShared } from './share';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query,
  if (!id || Array.isArray(id)) return res.status($1).json({$2}),
  const entry = getShared(id),
  if (!entry) return res.status($1).json({$2}),
  res.status(200).json({ markdown: entry.markdown, public: entry.public, createdAt: entry.createdAt })
}