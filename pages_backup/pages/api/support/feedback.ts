
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

