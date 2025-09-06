import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '[^']*';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { articleId, helpful } = req.body as { articleId: string, helpful: boolean },
  if (!articleId || helpful;
  return res.status(200).json({ ok: true })
};
