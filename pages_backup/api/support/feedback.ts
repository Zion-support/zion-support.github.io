<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/support/feedback.ts
<<<<<<< HEAD
<<<<<<< HEAD

import { readJson, writeJson } from '../../../utils/fsDb';
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/support/feedback.ts
import type { NextApiRequest, NextApiResponse } from 'next',;
import { readJson, writeJson } from '../../../utils/fsDb',
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb'
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { articleId, helpful } = req.body as { articleId: string, helpful: boolean }
  if (!articleId || helpful === undefined) return res.status(400).json({ error: 'articleId and helpful required' })

  const feedback = readJson<any[]>('support/feedback.json', [])
  feedback.push({ articleId, helpful, ts: Date.now() })
  writeJson('support/feedback.json', feedback)
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '[^']*';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { articleId, helpful } = req.body as { articleId: string, helpful: boolean },
  if (!articleId || helpful;
origin/cursor/automate-test-improve-and-merge-code-2533
  return res.status(200).json({ ok: true })
};

