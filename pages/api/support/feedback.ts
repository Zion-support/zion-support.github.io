

<<<<<<< HEAD
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next',;
import { readJson, writeJson } from '../../../utils/fsDb',;
;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { articleId, helpful } = req.body as { articleId: string, helpful: boolean },
  if (!articleId || helpful === undefined) return res.status(400).json({ error: 'articleId and helpful required' }),

  const feedback = readJson<any[]>('support/feedback.json', []),
  feedback.push({ articleId, helpful, ts: Date.now() }),
  writeJson('support/feedback.json', feedback),
  return res.status(200).json({ ok: true });
};
import type { NextApiRequest, NextApiResponse } from 'next';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import { readJson, writeJson } from '../../../utils/fsDb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { articleId, helpful } = req.body as { articleId: string, helpful: boolean }
  if (!articleId |helpful === undefined) return res.status(400).json({ error: 'articleId and helpful required' })
  const feedback = readJson<any[]>('support/feedback.json', [])
  feedback.push({ articleId, helpful, ts: Date.now() })
  writeJson('support/feedback.json', feedback)

<<<<<<< HEAD
  return res.status(200).json({ ok: true })
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb';
export default async function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { articleId, helpful } = req.body as { articleId: string, helpful: boolean },;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const feedback = readJson<any[]>('support/feedback.json', []),;
  feedback.push({ articleId, helpful, ts: Date.now() });
  writeJson('support/feedback.json', feedback);
  return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
