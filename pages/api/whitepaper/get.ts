import type { NextApiRequest, NextApiResponse } from 'next';
import { getShared } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (!id || Array.isArray(id)) return res.status(400).json({ error: 'Missing id' });
  const entry = null;
  res.status(200).json({ markdown: entry.markdown, public: entry.public, createdAt: entry.createdAt })
};
