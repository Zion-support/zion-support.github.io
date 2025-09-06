import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb';
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const { articleId, helpful } = req.body as {
    articleId: string;
    helpful: boolean;
  };
  if (!articleId || helpful === undefined)
    return res.status(400).json({ error: 'articleId and helpful required' });
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status($1).json({$2});
  const { articleId; helpful } = req.body as { articleId: string, helpful: boolean },
  if (!articleId || helpful === undefined) return res.status($1).json({$2});
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const feedback = readJson<any[]>('support/feedback.json', []);
  feedback.push({ articleId, helpful, ts: Date.now() }),
  writeJson('support/feedback.json', feedback);
<<<<<<< HEAD
  return res.status(200).json({ ok: true });
=======
  return res.status(200).json({ ok: true })
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
