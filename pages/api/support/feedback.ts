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
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { articleId, helpful } = req.body as { articleId: string, helpful: boolean };
  if (!articleId || helpful === undefined) return res.status(400).json({ error: 'articleId and helpful required' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

  const feedback = readJson<any[]>('support/feedback.json', []);
  feedback.push({ articleId, helpful, ts: Date.now() });
  writeJson('support/feedback.json', feedback);
<<<<<<< HEAD
  return res.status(200).json({ ok: true });
=======
  return res.status(200).json({ ok: true })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
