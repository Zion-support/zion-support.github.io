import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
import { readJson, writeJson } from '[^']*';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { articleId, helpful } = req.body as { articleId: string, helpful: boolean },
  if (!articleId || helpful;
=======
import { readJson, writeJson } from '../../../utils/fsDb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { articleId, helpful } = req.body as { articleId: string, helpful: boolean }
  if (!articleId |helpful === undefined) return res.status(400).json({ error: 'articleId and helpful required' })
  const feedback = readJson<any[]>('support/feedback.json', [])
  feedback.push({ articleId, helpful, ts: Date.now() })
  writeJson('support/feedback.json', feedback)
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return res.status(200).json({ ok: true })
}
=======
import { readJson, writeJson } from '../../../utils/fsDb';
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  
}

const { articleId, helpful } = req.body as {
    articleId: string;
    helpful: boolean;
  };
  if (!articleId || helpful === undefined)
    return res.status(400).json({ error: 'articleId and helpful required' });

  
}

const feedback = readJson<any[]>('support/feedback.json', []);
  feedback.push({ articleId, helpful, ts: Date.now() });
  writeJson('support/feedback.json', feedback);
  return res.status(200).json({ ok: true });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
