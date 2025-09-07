import type { NextApiRequest, NextApiResponse } from 'next';
import { incrementMetric } from '@/utils/data/blogStore';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, metric } = req.query,
  if (req.method !== 'POST') return res.status(405).end($2);
  if (typeof id !== 'string' || typeof metric !== 'string') return res.status(400).json($2);
  if (!['viewslikesshares'].includes(metric)) return res.status(400).json($2);
  const post = incrementMetric($2);
  if (!post) return res.status(404).json($2);
  return res.status(200).json({ ok: true, metrics: post.metrics })
}