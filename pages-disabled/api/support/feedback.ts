import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD:pages/api/support/feedback.ts

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // TODO: Implement feedback logic
    res.status(200).json({ message: 'feedback endpoint' });
  } catch (error) {
    console.error('Error in feedback:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
=======
import { readJson, writeJson } from '../../../utils/fsDb'
;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { articleId, helpful } = req.body as { articleId: string, helpful: boolean }
  if (!articleId || helpful === undefined) return res.status(400).json({ error: 'articleId and helpful required' })

  const feedback = readJson<any[]>('support/feedback.json', [])
  feedback.push({ articleId, helpful, ts: Date.now() })
  writeJson('support/feedback.json', feedback)

  return res.status(200).json({ ok: true })
};
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages-disabled/api/support/feedback.ts
