<<<<<<< HEAD

import { readJson, writeJson } from '../../../utils/fsDb';
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { readJson, writeJson } from '../../../utils/fsDb',
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb'
>>>>>>> main
;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { articleId, helpful } = req.body as { articleId: string, helpful: boolean }
  if (!articleId || helpful === undefined) return res.status(400).json({ error: 'articleId and helpful required' })

  const feedback = readJson<any[]>('support/feedback.json', [])
  feedback.push({ articleId, helpful, ts: Date.now() })
  writeJson('support/feedback.json', feedback)
<<<<<<< HEAD

=======
  return res.status(200).json({ ok: true })
};
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
